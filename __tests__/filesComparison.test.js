import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import gendiff from '../src/filesComparison.js'
import parseFile from '../src/fileParser.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFilePath = fileName => path.join(__dirname, '..', '__fixtures__', fileName)
const readFile = fileName => fs.readFileSync(getFilePath(fileName), 'utf-8')

// Обработка примитивных значений
const expectedData = { }

beforeAll(() => {
  expectedData.stylish = readFile('expected-stylish.txt')
})

test('generate difference between json files', () => {
  const firstFile = parseFile(getFilePath('file1.json'))
  const secondFile = parseFile(getFilePath('file2.json'))

  expect(gendiff(firstFile, secondFile)).toEqual(expectedData.stylish)
})

test('generate difference between yml files', () => {
  const firstFile = parseFile(getFilePath('file1.yml'))
  const secondFile = parseFile(getFilePath('file2.yml'))

  expect(gendiff(firstFile, secondFile)).toEqual(expectedData.stylish)
})

test('generate difference between empty objects', () => {
  expect(gendiff({}, {})).toEqual(`{\n\n}`)
})

test('generate difference if param is not a plain object', () => {
  expect(() => gendiff(10, true)).toThrow()
  expect(() => gendiff(undefined, 'string')).toThrow()
  expect(() => gendiff({}, null)).toThrow()
})

test('invalid format', () => {
  expect(() => gendiff({}, {}, 'invalid-format')).toThrow()
})
