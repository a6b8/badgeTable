/*
    2023 Badge Table Generator

    Disclaimer:
    The use of this code is at your own risk. The entire code is licensed under the MIT, which means you are granted certain rights to use, modify, and distribute the code under the terms of the license. However, please be aware that this module was created for learning purposes and testing smart contracts.
    This module is intended to provide a platform for educational and testing purposes only. It may not be suitable for use in production environments or for handling real-world financial transactions. The authors or contributors shall not be liable for any damages or consequences arising from the use of this module in production or critical applications.
    Before using this module in any capacity, including educational or testing purposes, it is strongly recommended to review and understand its functionality thoroughly. Furthermore, it is advised to refrain from using this module for any sensitive or production-related tasks.
    By using this code, you agree to the terms of the MIT and acknowledge that the authors or contributors shall not be held responsible for any issues or damages that may arise from its use, including educational or testing purposes.
    Please read the full MIT for more details on your rights and responsibilities regarding the usage of this code.
*/
 

import { configImported } from './data/config.mjs'
import { printMessages } from './helpers/mixed.mjs'


export class BadgeTable {
    #config


    constructor() {
        this.setConfig( { 
            'config': configImported, 
            'init': true 
        } )

        return true
    }


/**
 * Get the currently active configuration, including presets.
 *
 * This method returns the currently active configuration, which includes
 * presets needed to generate a table. It can be used to retrieve the
 * default configuration after auto-generation.
 *
 * @method
 * @returns {Object} The currently active configuration.
 */

    getConfig() {
        return this.#config
    }

/**
 * Get an array of available presets as strings.
 *
 * This method returns an array of strings containing all available presets.
 *
 * @method
 * @returns {string[]} An array of available presets as strings.
 */

    getPresets() {
        return Object.keys( this.#config['presets'] )
    }

/** 
 * Adjust the configuration for generating tables and optionally initialize it.
 *
 * This method allows you to adjust the configuration, for example, to insert a custom template.
 * To customize your configuration and create a custom table, please refer to [.setConfig()](#setconfig).
 *
 * @method
 * @param {Object} options - Options for setting the configuration.
 * @param {Object} options.config - The configuration to set for the function.
 * @param {boolean} [options.init=false] - Whether to initialize the configuration (default is false).
 * @returns {boolean} Returns true after successful configuration adjustment.
*/

    setConfig( { config, init=false } ) {
        const [ messages, comments ] = this.#validateSetConfig( { config, init } )
        printMessages( { messages, comments } )

        if( config !== undefined ) {
            if( init !== true ) {
                console.log( `Set custom config!` )
            }
            this.#config = config
        } else {
            console.log( 'Config not found !' )
            process.exit( 1 )
        }

        Object
            .entries( this.#config['styles'] )
            .forEach( b => {
                const [ key, value ] = b
                this.#config['styles'][ key ]['url'] = Object
                    .entries( this.#config['styles'][ key ]['parameters'] )
                    .map( ( a ) => `${a[ 0 ]}=${a[ 1 ]}` )
                    .join( '&' )
                return true
            } )

        return this
    }


/**
 * Generate a desired table based on the provided options.
 *
 * This method generates a table based on the specified `preset` (string) and includes the specified `projects` (array).
 *
 * @method
 * @param {Object} options - Options for generating the table.
 * @param {string} options.preset - The preset to use for generating the table.
 * @param {Array} options.projects - The projects to include in the table.
 * @param {boolean} [options.sort=true] - Whether to sort the table (default is true).
 * @param {boolean} [options.footer=true] - Whether to include a footer in the table (default is true).
 * @param {boolean} [options.header=false] - Whether to include a header in the table (default is false).
 * @returns {string} Returns the generated table in markdown format.
 *
*/

    getTable( { preset, projects, sort=true, footer=true, header=false } ) {
        const [ messages, comments ] = this.#validateGetTable( { preset, projects, sort, footer, header } )
        printMessages( { messages, comments } )

        if( sort === true ) {
            projects = projects
                .sort( ( a, b ) => a.title.localeCompare( b.title ) )
        }

        projects = projects
            .map( project => {
                if( !Object.hasOwn( project, 'githubBranch' ) ) {
                    project['githubBranch'] = 'main'
                }
                return project
            } )

        let table = []

        if( header ) {
            table.push( `**${this.#config['presets'][ preset ]['headline']}**` )
            table.push( '' )
        }

        const headlines = this.#config['presets'][ preset ]['structs']
            .map( a => [ `${a[ 0 ]}__headline`, a[ 1 ] ] )
        this.#generateHeadline( { headlines } )
            .forEach( row => table.push( row ) )

        const rows = this.#config['presets'][ preset ]['structs']
            .map( a => a[ 0 ] )


        this.#generateRows( { preset, rows, projects } )
            .forEach( row => table.push( row ) )

        if( footer ) {
            table.push( '' )
            table.push( this.#config['markdown']['footerText'] )
        }

        return table.join( "\n" )
    }


    #generateRows( { preset, rows, projects } ) {
        const lines = projects
            .map( ( project ) => this.#generateRow( { preset, rows, project } ) )

        return lines
    }


    #generateRow( { preset, rows, project } ) {
        const line = rows
            .map( ( keyPath, index, all )  => {
                let str = ''
                str += ( index === 0 ) ? '| ' : ''
                str += this.#generateCell( { preset, keyPath, project } )
                str += ( all.length -1 === index ) ? ' |' : ''
                return str
            } )
            .join( ' | ' )

        return line
    }


    #generateCell( { preset, keyPath, project } ) {
        const badges = this.#keyPathToValue( { keyPath } )['row']

        const strs = badges
            .map( ( keyPathBadge, rindex ) => {
                const _self = keyPathBadge
                    .split( '__' )
                    .slice( -1 )[ 0 ]
                const badge = this.#keyPathToValue( { 'keyPath': keyPathBadge } )
                const pattern = /<<[^>]+>>/g
                const items = badge['struct']
                    .match( pattern )

                let str = ''
                if( items !== null ) {
                    str = items
                        .map( ( bracket, index ) => {
                            const close = bracket.startsWith( '<</' )
                            const key = bracket
                                .replace( close ? '<</' : '<<', '' )
                                .replace( '>>', '' )

                            const search = `tree__html__${key}`
                            const htmls = this.#keyPathToValue( { 'keyPath': search } )
                            const html = htmls[ close ? 1 : 0 ]

                            let [ txt, valueIsEmpty ] = this.#injectParameters( {
                                'str': html,
                                'project': project,
                                '_self': _self
                            } )

                            if( valueIsEmpty ) {
                                txt = ''
                            }

                            return txt
                        } )
                        .join( '' )
                } else {
                    const [ t, valueIsEmpty ] = this.#injectParameters( {
                        'str': badge['struct'],
                        'project': project,
                        '_self': _self
                    } )
                    str = t
                }

                return str
            } )
            .join( '' )

        return strs
    }


    #injectParameters( { str, project, _self, iteration=0, valueIsEmpty=false } ) {
        if( iteration === 2 ) {
            // return str
        }

        const pattern = /{{[^{}]+}}/g;
        const matches = str.match( pattern )
        if( matches === null ) {
            return [ str, valueIsEmpty ]
        }

        matches
            .forEach( match => {
                let key = match
                    .replace( '{{', '' )
                    .replace( '}}', '' )

                let value
                if( key.startsWith( 'tree__' ) ) {
                    key = key.replace( '__self__', `__${_self}__` )
                    value = this.#keyPathToValue( { 'keyPath': key } )
                } else {
                    value = project[ key ]
                }

                if( value === '' ) {
                    valueIsEmpty = true
                }

                str = str.replace( match, value )
            } )

        iteration++
        const [ result, _valueIsEmpty ] = this.#injectParameters( { str, project, _self, iteration, valueIsEmpty } )

        return [ result, _valueIsEmpty ]
    }


    #generateHeadline( { headlines } ) {
        const lines = [ '', '' ]
            .map( ( tmp, rindex ) => {
                const row = headlines
                    .map( ( columns, index, all ) => {
                        let keyPath = columns[ rindex ]
                        let str = ''
                        str += index === 0 ? '| ' : ''
                        str += this.#keyPathToValue( { keyPath } )
                        str += all.length - 1 === index ? ' |' : ''
                        return str
                    } )
                    .join( ' | ' )
                return row
            },  )

        return lines
    }


    #validateGetTable( { preset, projects, sort, footer, header } ) {
        const messages = []
        const comments = []

        const validPresets = this.getPresets()
        if( preset === undefined ) {
            messages.push( `Key 'projects' is type of 'undefined'.` )
        } else if( typeof preset !== 'string' ) {
            messages.push( `Key 'projects' is not type of 'string'.` )
        }  else if( !validPresets.includes( preset ) ) {
            messages.push( `Key 'preset' with the value ${preset} is not known. Choose from ${ validPresets.map( a => `'${a}'`).join( ', ' ) } instead.` )
        }

        if( projects === undefined ) {
            messages.push( `Key 'projects' is type of 'undefined'.` )
        } else if( !Array.isArray( projects ) ) {
            messages.push( `Key 'projects' is not type of 'array'.` )
        } else {
            projects
                .forEach( ( project, index ) => {
                    const n = this.#config['presets'][ preset ]['validation']
                        .forEach( ( key ) => {
                            if( !project.hasOwnProperty( key ) ) {
                                messages.push( `Index [${index}] Key "${key}" is missing.` )
                            }

                            if( typeof project[ key ] !== 'string' ) {
                                messages.push( `Index [${index}] Key "${key}" is not type "string".` )
                            }
                        } )
                    return true
                } )
        }

        const tmp = [
            [ sort, 'sort' ],
            [ footer, 'footer' ],
            [ header, 'header' ]
        ]
            .forEach( a => {
                const [ value, key ] = a
                if( value === undefined ) {
                    messages.push( `Key '${key}' is type of 'undefined'.` )
                } else if( typeof value !== 'boolean' ) {
                    messages.push( `Key '${key}' is not type of 'boolean'.` )
                }
            } )

        return [ messages, comments ]
    }


    #keyPathToValue( { keyPath, separator='__' } ) {
        if( typeof keyPath !== 'string' ) {
            console.log( `KeyPath is not type string` )
            process.exit( 1 )
        }

        if( !keyPath.startsWith( 'tree__' ) ) {
            console.log( 'KeyPath does not start with "tree__"' )
            process.exit( 1 )
        } else {
            keyPath = keyPath.replace( 'tree__', '' )
        }

        const result = keyPath
            .split( separator )
            .reduce( ( acc, key, index ) => {
                if( !acc ) return undefined
                if( !acc.hasOwnProperty( key ) ) return undefined
                acc = acc[ key ]
                return acc
            }, this.#config )
    
        return result
    }


    #validateSetConfig( { config, init } ) {
        const messages = []
        const comments = []

        if( init === undefined ) {
            messages.push( `Key 'init' is type of 'undefined'.`)
        } else if( typeof init !== 'boolean' ) {
            messages.push( `Key 'init' is not type of 'boolean'.` )
        }

        if( config === undefined ) {
            messages.push( `Key 'config' is type of 'undefined'.`)
        } else if( typeof config !== 'object' ) {
            messages.push( `Key 'config' is not type of 'object'.` )
        } 

        if( messages.length !== 0 ) {
            return [ messages, comments ]
        }

        const tmp = Object
            .keys( configImported )
            .forEach( key => {
                if( !Object.hasOwn( config, key ) ) {
                    messages.push( `In 'config' the key '${key}' is missing.` )
                }
            } )

        return [ messages, comments ]
    }
}