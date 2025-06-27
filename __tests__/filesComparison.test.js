import { fileURLToPath } from 'url'
import path from 'path'
import compare from '../src/filesComparison.js'
import parseFile from '../src/fileParser.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFilePath = fileName => path.join(__dirname, '..', '__fixtures__', fileName)

test('compare files', () => {
  const firstFile = parseFile(getFilePath('file1.json'))
  const secondFile = parseFile(getFilePath('file2.json'))
  const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

  expect(compare(firstFile, secondFile)).toEqual(result)
  expect(compare({}, {})).toEqual(`{\n\n}`)
  expect(() => compare({}, null)).toThrow()
})
