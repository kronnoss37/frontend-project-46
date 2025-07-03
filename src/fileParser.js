import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const getFileFormat = filePath => filePath.split('.').at(-1)

const getFunForParsing = (format) => {
  if (format === 'json') return JSON.parse
  if (format === 'yml' || format === 'yaml') return yaml.load
}
export default (filePath) => {
  const fileFormat = getFileFormat(filePath)

  fs.accessSync(filePath, fs.constants.R_OK)

  const fileData = fs.readFileSync(path.resolve(filePath), 'utf-8')
  const parse = getFunForParsing(fileFormat)
  if (!parse) throw new Error(`File format "${fileFormat}". Supported formats: json and yml(yaml)!`) // typeof parse === 'undefined'
  return parse(fileData)
}
