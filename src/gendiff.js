import _ from 'lodash'
import formatData from './formatters/index.js'

const getDifferences = (object1, object2) => {
  if (!_.isPlainObject(object1) || !_.isPlainObject(object2)) throw new Error(`Invalid parameter passed`)

  const sortedUniqueObjectsKeys = _.sortBy(_.union(Object.keys(object1), Object.keys(object2)))

  const differences = sortedUniqueObjectsKeys.map((key) => {
    const keyValueInFirstObj = object1[key]
    const keyValueInSecondObj = object2[key]

    if (_.isPlainObject(keyValueInFirstObj) && _.isPlainObject(keyValueInSecondObj)) {
      return { key, status: 'nested', children: getDifferences(keyValueInFirstObj, keyValueInSecondObj) }
    }

    if (!Object.hasOwn(object1, key)) {
      return { key, value: keyValueInSecondObj, status: 'added' }
    }
    else if (!Object.hasOwn(object2, key)) {
      return { key, value: keyValueInFirstObj, status: 'deleted' }
    }
    else if (keyValueInFirstObj === keyValueInSecondObj) {
      return { key, value: keyValueInFirstObj, status: 'unchanged' }
    }
    else {
      return { key, oldValue: keyValueInFirstObj, newValue: keyValueInSecondObj, status: 'changed' }
    }
  })

  return differences
}

export default (object1, object2, format = 'stylish') => {
  const differences = getDifferences(object1, object2)
  const formattedDiff = formatData(differences, format)
  return formattedDiff
}
