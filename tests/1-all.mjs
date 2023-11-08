import fs from 'fs'
import { BadgeTables } from '../src/BadgeTables.mjs'
import { examples } from './data/examples.mjs'

const btg = new BadgeTables( true )

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