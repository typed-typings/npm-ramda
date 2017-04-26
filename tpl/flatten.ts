import {
  declareFunction,
  makeParamStringNumbers,
  defineType, docs
} from '../gen';

const nestedListLevels = makeParamStringNumbers(5).reverse();

const desc = `Returns a new list by pulling every item out 
of it (and all its sub-arrays) and putting them in a new array, depth-first.`;

const typeName = 'NestedArray';

module.exports = [
  nestedListLevels
    .map((levels, i) => defineType(typeName + levels.length + '<T>',
      levels.reduce((prev) => `(T | ${prev})[]`, 'T[]')
    )).join('\n'),
  ...nestedListLevels.map((levels) =>
    docs(desc) +
    declareFunction('flatten',
      ['T'],
      [{ list: typeName + levels.length + '<T>' }],
      `T[]`
    ))
];
