import stylish from './stylish.js'
import plain from './plain.js'

const getFunForFormatting = (format) => {
  if (format === 'stylish') return stylish
  if (format === 'plain') return plain
}

export default (data, format) => {
  const formatData = getFunForFormatting(format)
  if (!formatData) throw new Error(`Format "${format}" is invalid. Supported formats: stylish!`)
  return formatData(data)
}
