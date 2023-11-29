import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { repositories } from './data/examples-plain.mjs'

const bt = new BadgeTable()
const config = bt.getConfig()


const cfg = {
    'example': 'npmPackagesCircleCi',
    'test': './tests/results/presets.md',
    'readme': {
        'template': './README.txt',
        'final': './README.md'
    }
}

 
const mds = Object
    .entries( config['presets'] )
    .sort( ( a, b ) => a[ 0 ].localeCompare( b[ 0 ] ) )
    .reduce( ( acc, a, index ) => {
        const [ preset, v ] = a
        const { headline, validation, structs } = v

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
        const implementation = `Implementation: [${cfg['test']}#${preset}](./tests/results/all.md#${preset})\n\n`

        if( cfg['example'] === preset ) {
            acc['example'] += table + "\n\n"
            acc['example'] += implementation
        }

        acc['readme'] += table
        acc['readme'] += "\n\n"

        acc['all'] += acc['readme']

        acc['readme'] += implementation

        acc['all'] += `${v['description']}\n\n`
        acc['all'] += `**Required Keys:**\n`
        acc['all'] += v['validation']
            .reduce( ( abb, b, rindex ) => {
                abb += `- ${b}\n`
                return abb
            }, '' )
        acc['all'] += `\n\n`

        acc['all'] += `**Code:**\n`
        acc['all'] += `\`\`\`js\n`
        acc['all'] += `import { BadgeTable } from 'badgetable'\n`
        acc['all'] += `const badgeTable = new BadgeTable()\n`
        acc['all'] += `const values = ${JSON.stringify( payload, null, 4 )}\n`
        acc['all'] += `badgeTable.getTable( values )\n`
        acc['all'] += `\`\`\`\n\n`

        return acc
    }, { 'readme': '', 'all': "# Presets\n\n", 'example': '' } )

fs.writeFileSync( cfg['test'], mds['all'], 'utf-8' )

const tmp = fs.readFileSync( cfg['readme']['template'], 'utf-8' )
const readme = tmp
    .replace( '{{INSERT_PRESETS}}', mds['readme'] )
    .replace( '{{INSERT_EXAMPLE}}', mds['example'] )
fs.writeFileSync( cfg['readme']['final'], readme, 'utf-8' )