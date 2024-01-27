import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { repositories } from './data/examples-plain.mjs'

const bt = new BadgeTable()
const config = bt.getConfig()


const cfg = {
    'example': 'githubOverviewWithArticle',
    'preset': './presets.md',
    'readme': {
        'template': './README.txt',
        'final': './README.md'
    }
}
 
const mds = Object
    .entries( config['presets'] )
    .sort( ( a, b ) => a[ 0 ].localeCompare( b[ 0 ] ) )
    .reduce( ( acc, a, index ) => {
        const [ preset, value ] = a
        const { validation } = value

        const search = preset.substring( 0, 3 )
        const projects = repositories
            .filter( b => b['tags'].includes( search ) )
            .filter( ( b, rindex ) =>rindex < 2 )
            .map( b => {
                const struct = {}
                validation
                    .forEach( key => struct[ key ] = b[ key ] )

                return struct
            } )

        const payload = { preset, projects }

        acc['readme'] += `### ${preset}\n`
        const modPayload = { ...payload, 'footer': false }

        let table = bt.getTable( modPayload )
        const implementation = `Implementation: [${cfg['preset']}#${preset}](${cfg['preset']}#${preset})\n\n`

        if( cfg['example'] === preset ) {
            acc['example'] += table + "\n\n"
            acc['example'] += implementation
        }

        acc['readme'] += table
        acc['readme'] += "\n\n"
        acc['readme'] += implementation

        acc['preset'] += `### ${preset}\n`
        acc['preset'] += `${value['description']}\n\n`
        acc['preset'] += `**Required Keys:**\n`
        acc['preset'] += value['validation']
            .reduce( ( abb, b, rindex ) => {
                abb += `- ${b}\n`
                return abb
            }, '' )
        acc['preset'] += `\n\n`
        acc['preset'] += table

        acc['preset'] += `**Code:**\n`
        acc['preset'] += `\`\`\`js\n`
        acc['preset'] += `import { BadgeTable } from 'badgetable'\n`
        acc['preset'] += `const badgeTable = new BadgeTable()\n`
        acc['preset'] += `const values = ${JSON.stringify( payload, null, 4 )}\n`
        acc['preset'] += `badgeTable.getTable( values )\n`
        acc['preset'] += `\`\`\`\n\n`

        return acc
    }, { 'readme': '', 'preset': "# Presets\n\n", 'example': '' } )

fs.writeFileSync( cfg['preset'], mds['preset'], 'utf-8' )

const tmp = fs.readFileSync( cfg['readme']['template'], 'utf-8' )
const readme = tmp
    .replace( '{{INSERT_PRESETS}}', mds['readme'] )
    .replace( '{{INSERT_EXAMPLE}}', mds['example'] )

fs.writeFileSync( cfg['readme']['final'], readme, 'utf-8' )