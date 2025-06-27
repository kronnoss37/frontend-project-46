import { fileURLToPath } from 'url'
import path from 'path'
import parseFile from '../src/fileParser.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFilePath = fileName => path.join(__dirname, '..', '__fixtures__', fileName)

test('parse json and yml files', () => {
  const result = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  }

  const jsonFilePath = getFilePath('file2.json')
  const ymlFilePath = getFilePath('file2.yml')
  expect(parseFile(jsonFilePath)).toEqual(result)
  expect(parseFile(ymlFilePath)).toEqual(result)
})

test('parse non-existent file', () => {
  const nonExistentPath = getFilePath('no-existent-file.json')
  expect(() => parseFile(nonExistentPath)).toThrow()
})

test('parse file with invalid format', () => {
  const filePathWithInvalidFormat = getFilePath('fileWithInvalidFormat.txt')
  expect(() => parseFile(filePathWithInvalidFormat)).toThrow()
})
