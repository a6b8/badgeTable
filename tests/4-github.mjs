import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { examples } from './data/examples.mjs'

const bt = new BadgeTable( true )

console.log( examples['packageData'] )

const md = bt.getTable( examples['packageData'] )
console.log( 'md', md )

fs.writeFileSync( 
    `./tests/results/test.md`,
    md,
    'utf-8'
)

/*
Object
    .entries( examples )
    .forEach( a => {
        const [ pagePosition, tables ] = a
        const strs = Object
            .entries( tables )
            .reduce( ( acc, b, index ) => {
                const [ key, vars ] = b
                acc += bt.getTable( vars )
                return acc
            }, '' )

        fs.writeFileSync( 
            `./tests/results/${pagePosition}.md`,
            strs,
            'utf-8'
        )
    } )

*/