import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { examples } from './data/examples.mjs'

const btg = new BadgeTable( true )

const strs = Object
    .entries( examples )
    .map( ( a, index ) => {
        const [ key, value ] = a
        const table = btg.getTable( value )
        return table
    } )
    .join( "\n  \n  \n  <br>" )


fs.writeFileSync( 
    './tests/results/all.md', 
    strs, 
    'utf-8'
)