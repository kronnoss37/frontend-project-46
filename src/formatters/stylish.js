import _ from 'lodash'

const replacer = ' '
const spacesCount = 4
const symbolOffset = 2

const formatValue = (value, depth) => {
  if (!_.isPlainObject(value)) return `${value}`
  const indentSize = depth * spacesCount

  const entries = Object.entries(value).map(([key, value]) => {
    return `${replacer.repeat(indentSize)}${key}: ${formatValue(value, depth + 1)}`
  })
  return `{\n${entries.join(`\n`)}\n${replacer.repeat(indentSize - spacesCount)}}`
}

export default (differences) => {
  const iter = (currDiff, depth) => {
    const indentSize = depth * spacesCount
    const currIndent = replacer.repeat(indentSize - symbolOffset)

    const formattedDiff = currDiff.flatMap((data) => {
      if (data.status === 'nested') {
        return [`${currIndent}  ${data.key}: ${iter(data.children, depth + 1)}`]
      }

      const currValue = formatValue(data.value, depth + 1)

      if (data.status === 'changed') {
        const oldValue = formatValue(data.oldValue, depth + 1)
        const newValue = formatValue(data.newValue, depth + 1)
        return [`${currIndent}- ${data.key}: ${oldValue}`, `${currIndent}+ ${data.key}: ${newValue}`]
      }
      if (data.status === 'unchanged') {
        return [`${currIndent}  ${data.key}: ${currValue}`]
      }
      if (data.status === 'added') {
        return [`${currIndent}+ ${data.key}: ${currValue}`]
      }
      if (data.status === 'deleted') {
        return [`${currIndent}- ${data.key}: ${currValue}`]
      }
    })
    return `{\n${formattedDiff.join(`\n`)}\n${replacer.repeat(indentSize - spacesCount)}}`
  }
  return iter(differences, 1)
}
