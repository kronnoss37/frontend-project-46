import stylish from './stylish.js'

const getFunForFormatting = (format) => {
  if (format === 'stylish') return stylish
}

export default (data, format) => {
  const formatData = getFunForFormatting(format)
  // throw invalid format (undefined - formatData)
  return formatData(data)
}
