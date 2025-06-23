#!/usr/bin/env node

import { program } from 'commander';
import parseFile from '../src/fileParser.js'

program
	.name('gendiff')
	.description('Compares two configuration files and shows a difference.')
	.version('1.0.0')
	.arguments('<filepath1> <filepath2>')
	.option('-f, --format [type]', 'output format')
	.action((filepath1, filepath2, options) => {
    const firstFileData = parseFile(filepath1);
    const secondFileData = parseFile(filepath2);
		console.log(`file1: ${JSON.stringify(firstFileData)}`);
		console.log(`file2: ${JSON.stringify(secondFileData)}`);
	});

program.parse();
