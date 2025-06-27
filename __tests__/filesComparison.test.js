import { fileURLToPath } from 'url'
import path from 'path'
import compare from '../src/filesComparison.js'
import parseFile from '../src/fileParser.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFilePath = fileName => path.join(__dirname, '..', '__fixtures__', fileName)

let result
beforeAll(() => {
  result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`
})

test('compare json files', () => {
  const firstFile = parseFile(getFilePath('file1.json'))
  const secondFile = parseFile(getFilePath('file2.json'))

  expect(compare(firstFile, secondFile)).toEqual(result)
})

test('compare yml files', () => {
  const firstFile = parseFile(getFilePath('file1.yml'))
  const secondFile = parseFile(getFilePath('file2.yml'))

  expect(compare(firstFile, secondFile)).toEqual(result)
})

test('compare empty objects', () => {
  expect(compare({}, {})).toEqual(`{\n\n}`)
})

test('compare if param is not a plain object', () => {
  expect(() => compare({}, null)).toThrow()
})
