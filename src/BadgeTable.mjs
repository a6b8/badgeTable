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


export class BadgeTable {
    #config
    #debug


    constructor( debug ) {
        this.#debug = debug
        this.setConfig( configImported, true )

        return true
    }


    getConfig() {
        return this.#config
    }


    setConfig( config, init ) {
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


    getTable( { template, projects, sort=true } ) {
        const [ messages, comments ] = this.#validateGetTable( { template, projects, sort } )
        this.#printValidation( { messages, comments } )

        if( sort === true ) {
            projects = projects
                .sort( ( a, b ) => a.title.localeCompare( b.title ) )
        }

        let table = []
        table.push( `**${this.#config['templates'][ template ]['headline']}**`)
        table.push( '' )

        const headlines = this.#config['templates'][ template ]['structs']
            .map( a => [ `${a[ 0 ]}__headline`, a[ 1 ] ] )
        this.#generateHeadline( { headlines } )
            .forEach( row => table.push( row ) )

        const row = this.#config['templates'][ template ]['structs']
            .map( a => a[ 0 ] )
        this.#generateRows( { row, projects } )
            .forEach( row => table.push( row ) )

        table.push( '' )
        table.push( this.#config['markdown']['footerText'] )

        return table.join( "\n" )
    }


    #generateRows( { row, projects } ) {
        const lines = projects
            .map( ( project ) => this.#generateRow( { row, project } ) )

        return lines
    }


    #generateRow( { row, project } ) {
        const line = row
            .map( ( keyPath, index, all )  => {
                let str = ''
                str += ( index === 0 ) ? '| ' : ''
                str += this.#generateCell( { keyPath, project } )
                str += ( all.length -1 === index ) ? ' |' : ''
                return str
            } )
            .join( ' | ' )

        return line
    }


    #generateCell( { keyPath, project } ) {
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

                            const txt = this.#injectParameters( {
                                'str': html,
                                'project': project,
                                '_self': _self
                            } )

                            return txt
                        } )
                        .join( '' )
                } else {
                    str = this.#injectParameters( {
                        'str': badge['struct'],
                        'project': project,
                        '_self': _self
                    } )
                    
                }

                return str
            } )
            .join( '' )

        return strs
    }


    #injectParameters( { str, project, _self, iteration=0 } ) {
        if( iteration === 2 ) {
            // return str
        }

        const pattern = /{{[^{}]+}}/g;
        const matches = str.match( pattern )
        if( matches === null ) {
            return str
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

                str = str.replace( match, value )
            } )

        iteration++
        const result = this.#injectParameters( { str, project, _self, iteration } )

        return result
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


    #validateGetTable( { template, projects, sort } ) {
        const messages = []
        const comments = []

        if( typeof sort !== 'boolean' ) {
            comments.push( `Key "sort" is not of type boolean. Value "${sort}" will ignored.` )
        }

        const knownKeys = Object.keys( this.#config['templates'] )
        if( !knownKeys.includes( template ) ) {
            const error = `Key "template" with the value ${template} is not known. Use ${JSON.stringify( knownKeys )} instead.`
            console.log( error )
            process.exit( 1 )
            // messages.push( error )
        }

        projects
            .forEach( ( project, index ) => {
                const n = this.#config['templates'][ template ]['validation']
                    .forEach( ( key ) => {
                        if( !project.hasOwnProperty( key ) ) {
                            messages.push( `Index [${index}] Key "${key}" is missing.`)
                        }

                        if( typeof project[ key ] !== "string" ) {
                            messages.push( `Index [${index}] Key "${key}" is not type "string".`)
                        }
                    } )
                return true
            } )

        return [ messages, comments ]
    }


    #printValidation( { messages, comments } ) {
        comments
            .forEach( ( msg ) => {
                console.log( `${msg}`)
            })


        messages
            .forEach( ( msg, index, all ) => {
                if( index === 0 ) {
                    console.log( `Following Error${all.length > 1 ? 's': ''}: `)
                }

                console.log( `  - ${msg}`)

                if( all.length - 1 === index ) {
                    process.exit( 1 )
                } 
            } )

        return true
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
}