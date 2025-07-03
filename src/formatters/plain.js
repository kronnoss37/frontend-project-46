import _ from 'lodash'

const formatValue = (value) => {
  if (_.isPlainObject(value)) return `[complex value]`
  if (typeof value === 'string') return `'${value}'`
  return `${value}`
}

export default (differences) => {
  const iter = (currDiff, path = '') => {
    const formattedDiff = currDiff.flatMap((data) => {
      const currPath = `${path}${data.key}`

      if (data.status === 'nested') {
        return [iter(data.children, `${currPath}.`)]
      }

      if (data.status === 'changed') {
        const newValue = formatValue(data.newValue)
        const oldValue = formatValue(data.oldValue)
        return [`Property '${currPath}' was updated. From ${oldValue} to ${newValue}`]
      }
      if (data.status === 'unchanged') {
        return []
      }
      if (data.status === 'added') {
        const currValue = formatValue(data.value)
        return [`Property '${currPath}' was added with value: ${currValue}`]
      }
      if (data.status === 'deleted') {
        return [`Property '${currPath}' was removed`]
      }
      return []
    })

    return formattedDiff.join(`\n`)
  }

  return iter(differences)
}

// const obj1 = {
//   a: 1,
//   b: 'first',
//   c: true,
//   e: {
//     value: 'sfsd',
//     case: 10,
//   },
//   f: 12,
// }

// const obj2 = {
//   a: 1,
//   b: 'second',
//   d: 777,
//   e: {
//     value: 'fdsfds',
//   },
//   f: {
//     value: 366,
//   },
// }

// const diff = getDifferences(obj1, obj2)
// console.log(fun(diff))
// {
//   if (data.status === 'nested') {
//     return [`${currIndent}  ${data.key}: ${iter(data.children, depth + 1)}`];
//   }

//   const currValue = formatValue(data.value, depth + 1);

//   if (data.status === 'unchanged') {
//     // Никакой информации не выводится
//   }
//   if (data.status === 'changed') {
//     `Property ${} was updated. From ${data.oldValue} to ${data.newValue}`;
//   }
//   if (data.status === 'added') {
//     `Property ${} was added with value: ${data.value}`;
//   }
//   if (data.status === 'deleted') {
//     `Property ${} was removed`;
//   }
// }
