import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { repositories } from './data/examples-plain.mjs'

const bt = new BadgeTable()
const config = bt.getConfig()
 
let mds = ""
mds += Object
    .entries( config['presets'] )
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
        
        acc += `### ${preset}\n`
        const modPayload = { ...payload, 'footer': false }
        acc += bt.getTable( modPayload )
        acc += "\n\n"
        acc += `${v['description']}\n\n`
        acc += `**Required Keys:**\n`
        acc += v['validation']
            .reduce( ( abb, b, rindex ) => {
                abb += `- ${b}\n`
                return abb
            }, '' )
        acc += `\n\n`

        acc += `**Code:**\n`
        acc += `\`\`\`js\n`
        acc += `import { BadgeTable } from 'badgetable'\n`
        acc += `const badgeTable = new BadgeTable()\n`
        acc += `const values = ${JSON.stringify( payload, null, 4 )}\n`
        acc += `badgeTable.getTable( values )\n`
        acc += `\`\`\`\n\n`

        return acc
    }, '' )
 
const cfg = {
    'test': './tests/results/presets.md',
    'readme': {
        'template': './README.txt',
        'final': './README.md'
    }
}
 
fs.writeFileSync( cfg['test'], mds, 'utf-8' )

const tmp = fs.readFileSync( cfg['readme']['template'], 'utf-8' )
const readme = tmp.replace( '{{INSERT_PRESETS}}', mds )
fs.writeFileSync( cfg['readme']['final'], readme, 'utf-8' )

