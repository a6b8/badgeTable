import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { examples } from './data/examples.mjs'
import crypto from 'crypto'

const bt = new BadgeTable( true )
const expect = [
    '9278f3c2ff183438938c334c6c8113ae',
    '88f5c2ea2351818ca28240f2c65bdb33',
    '282e2e966c51501f6a9ba8b87ce0baba',
    '7e476f24c31e03bc56d36ce3e7d6c94f',
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