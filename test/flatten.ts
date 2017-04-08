import flatten = require('ramda/src/flatten');
import { equal } from 'assert';
import { itFailsType, typeFail } from '../type-fail';

type nestedX = { x: number };


const obj = { a: { b: { c: 42 } } };
const objWithList = { a: [{ c: 42 }, { c: 43 }] };

const flat = [1, 2, 3, 4, 5];

const oneLevel = [[1, 2], [3, 4], [5]];

const twoLevel = [[1, [2]], [3, 4], [5]];

const twoAndThreeLevel = [[1, [2]], [[3, [4]]], [5]];

describe('flatten', () => {
  it('one level nested array', () => {    
    const res = flatten(oneLevel)[0];
    equal(res, flat);
  });

  it('two level nested array', () => {
    const res = flatten(twoLevel)[0];
    const flat = [1, 2, 3, 4, 5]
  });

  it('two and tree level nested array', () => {
    const res = flatten(twoAndThreeLevel)[0];
    const flat = [1, 2, 3, 4, 5]
  });

  it.skip('ts error: incorrect type for value not allowed', () => {
    typeFail(`
    import assocPath = require('ramda/src/assocPath');
    assocPath(['a', 'b'], '42', {a: {b: 0}})    
  `, /incompatible with index signature/);
  });
});
