import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { examples } from './data/examples.mjs'
import crypto from 'crypto'

const bt = new BadgeTable( true )
const expect = [
    '3331edbd1bc25661177cf4a45c673597',
    '9d718ccf9f6638231cd260b5e621e490',
    '3c8d12d09e3e69c4fcc9f5a200ab96e9',
]

const check = []

const strs = Object
    .entries( examples )
    .map( ( a, index, all ) => {
        index === 0 ? console.log( "[" ) : ''
        const [ key, value ] = a
        const table = bt.getTable( value )

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