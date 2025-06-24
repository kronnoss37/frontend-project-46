//forCompare
import _ from 'lodash'

export default (object1, object2) => {
  if (!_.isPlainObject(object1) && !_.isPlainObject(object2)) return; //`Invalid parameter passed`

  const sortedUniqueObjectsKeys = _.sortBy(_.union(Object.keys(object1), Object.keys(object2)));

  const formattedKeys = sortedUniqueObjectsKeys.reduce((acc, key) => {
    if (!Object.hasOwn(object1, key)) {
      acc.push(`  + ${key}: ${object2[key]}`);
    } else if (!Object.hasOwn(object2, key)) {
      acc.push(`  - ${key}: ${object1[key]}`);
    } else if (object1[key] === object2[key]) {
      acc.push(`    ${key}: ${object1[key]}`);
    } else {
      acc.push(`  - ${key}: ${object1[key]}`);
      acc.push(`  + ${key}: ${object2[key]}`);
    }
    return acc;
  }, []);

  return `{\n${formattedKeys.join('\n')}\n}`;
}