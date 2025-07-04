import stylish from './stylish.js'
import plain from './plain.js'
import json from './json.js'

const getFunForFormatting = (format) => {
  if (format === 'stylish') return stylish
  if (format === 'plain') return plain
  if (format === 'json') return json
}

export default (data, format) => {
  const formatData = getFunForFormatting(format)
  if (!formatData) throw new Error(`Format "${format}" is invalid. Supported formats: stylish, plain and json!`)
  return formatData(data)
}
