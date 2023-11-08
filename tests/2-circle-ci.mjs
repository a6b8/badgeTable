import fs from 'fs'
import { BadgeTables } from '../src/BadgeTables.mjs'
import { examples } from './data/examples.mjs'
import crypto from 'crypto'

const mtg = new BadgeTables( true )
const expect = [
    'c8e43ceb6e5e04b17ebb152c99500391',
    '4488e577bc0c6dbb25e52f3d2ca6093f',
    'edd0790849e6e8cf7b8bb80609342978',
    '1697e6219567c160296ac3f284e95822',
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