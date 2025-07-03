import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import compare from '../src/filesComparison.js'
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

test('compare json files', () => {
  const firstFile = parseFile(getFilePath('file1.json'))
  const secondFile = parseFile(getFilePath('file2.json'))

  expect(compare(firstFile, secondFile)).toEqual(expectedData.stylish)
})

test('compare yml files', () => {
  const firstFile = parseFile(getFilePath('file1.yml'))
  const secondFile = parseFile(getFilePath('file2.yml'))

  expect(compare(firstFile, secondFile)).toEqual(expectedData.stylish)
})

test('compare empty objects', () => {
  expect(compare({}, {})).toEqual(`{\n\n}`)
})

test('compare if param is not a plain object', () => {
  expect(() => compare(10, true)).toThrow()
  expect(() => compare(undefined, 'string')).toThrow()
  expect(() => compare({}, null)).toThrow()
})
