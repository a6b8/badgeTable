
import fs from 'fs'
import { BadgeTable } from '../src/BadgeTable.mjs'
import { examples } from './data/examples.mjs'

const btg = new BadgeTable( true )
const result = btg
    .getTable( examples['documentation'] )

console.log( result )
