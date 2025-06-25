// forParsing

import fs from 'fs'
import path from 'path'

const getFileFormat = filePath => filePath.split('.').at(-1)

export default (filePath) => {
  // const fileFormat = getFileFormat(filePath)
  getFileFormat(filePath)
  // console.log(fileFormat);
  const fileData = fs.readFileSync(path.resolve(filePath))
  return JSON.parse(fileData)
}
