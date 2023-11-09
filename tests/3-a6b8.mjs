import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { examples } from './data/a6b8.mjs'


const bt = new BadgeTable( true )


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