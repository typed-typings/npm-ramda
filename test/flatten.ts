import flatten = require('ramda/src/flatten');
import { equal, deepEqual } from 'assert';
import { typeFail } from '../type-fail';

const flat = [1, 2, 3, 4, 5];
const oneLevel = [[1, 2], [3, 4], [5]];
const oneLevelNoType = [['1', 2], [3, 4], [5]];
const twoLevel = [[1, [2]], [3, 4], [5]];
const twoAndThreeLevel = [[1, [2]], [[3, [4]]], [5]];

describe('flatten', () => {
  it('one level nested array', () => {
    const res = flatten(oneLevel);
    deepEqual(res, flat);
  });

  it('two level nested array', () => {
    const res = flatten(twoLevel);
    deepEqual(res, flat);
  });

  it('two and tree level nested array', () => {
    const res = flatten(twoAndThreeLevel);
    deepEqual(res, flat);
  });

  it('string | number type array', () => {
    const res = flatten(oneLevelNoType);
    deepEqual(res, ['1', 2, 3, 4, 5]);
  });

  // it.skip('ts error: incorrect type for value not allowed', () => {
  //   typeFail(`
  //   import assocPath = require('ramda/src/flatten');
  //   assocPath(['a', 'b'], '42', {a: {b: 0}})    
  // `, /incompatible with index signature/);
  // });
});
