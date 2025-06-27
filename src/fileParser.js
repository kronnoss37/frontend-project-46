import fs from 'fs'
import path from 'path'

const getFileFormat = filePath => filePath.split('.').at(-1)

export default (filePath) => {
  // const fileFormat = getFileFormat(filePath)
  getFileFormat(filePath)
  // console.log(fileFormat);

  fs.accessSync(filePath, fs.constants.R_OK)
  const fileData = fs.readFileSync(path.resolve(filePath), 'utf-8')
  return JSON.parse(fileData)
}
