import stylish from './stylish.js'

const getFunForFormatting = (format) => {
  if (format === 'stylish') return stylish
}

export default (data, format) => {
  const formatData = getFunForFormatting(format)
  if (!formatData) throw new Error(`Format "${format}" is invalid. Supported formats: stylish!`)
  return formatData(data)
}
