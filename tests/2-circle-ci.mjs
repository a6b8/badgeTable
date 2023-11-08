import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { examples } from './data/examples.mjs'
import crypto from 'crypto'

const mtg = new BadgeTable( true )
const expect = [
    'ff89f26e5c5aacb96792d5371807b086',
    '2be1341b2abbfcc862ded9bec18b5cb4',
    'c501999222f4a8ceac1c8bc743805bbf',
    'ae5aed355cb9de5856c3d045e4d80eb3',
]

const check = []

const strs = Object
    .entries( examples )
    .map( ( a, index, all ) => {
        index === 0 ? console.log( "[" ) : ''
        const [ key, value ] = a
        const table = mtg.getTable( value )

        const md5Hash = crypto
            .createHash( 'md5' )
            .update( table )
            .digest( 'hex' )

        console.log( `  '${md5Hash}',`)
        check.push( expect[ index ] === md5Hash )
        all.length - 1 === index ? console.log( ']' ) : ''

        return table
    } )
    .join( "\n  \n  \n  <br>" )

// console.log( strs )
// fs.writeFileSync( 'test.md', strs, 'utf-8')

const success = check
    .every( a => a )

if( success ) {
    console.log( 'All Tests passed' )
    process.exit( 0 )
} else {
    console.log( `Failed! ${JSON.stringify( check )}`)
}