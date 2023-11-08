
import fs from 'fs'
import { BadgeTables } from '../src/BadgeTables.mjs'
import { examples } from './data/examples.mjs'

const btg = new BadgeTables( true )
const result = btg
    .getTable( examples['docs'] )

console.log( result )
