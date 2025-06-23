//forParsing

import fs from 'fs';
import path from "path";

export default (filePath) => {
  const fileFormat = filePath.split('.').at(-1);
  console.log(fileFormat);
  const fileData = fs.readFileSync(path.resolve(filePath));
  return JSON.parse(fileData);
};