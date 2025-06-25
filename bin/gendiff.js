#!/usr/bin/env node

import { program } from 'commander'
import parseFile from '../src/fileParser.js'
import compare from '../src/filesComparison.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => { // options
    const firstFileData = parseFile(filepath1)
    const secondFileData = parseFile(filepath2)
    const result = compare(firstFileData, secondFileData)
    // console.log(`file1: ${JSON.stringify(firstFileData)}`);
    // console.log(`file2: ${JSON.stringify(secondFileData)}`);
    console.log(result)
  })

program.parse()
