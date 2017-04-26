import path = require('ramda/src/path');
import { nth, prop } from 'ramda';
import { equal } from 'assert';
import { itFailsType, typeFail } from '../type-fail';

type nestedX = { x: number };


const obj = { a: { b: { c: 42 } } };
const objWithList = { a: [{ c: 42 }, { c: 43 }] };
const objWithNestedList = { a: [{ c: [{ d: 42 }] }, { c: [{ d: 43 }] }] };
const list = [{ c: 42 }, { c: 43 }];
const tuple = [{ c: 42 }, { d: 43 }];

describe('path', () => {
  it('path tree deep', () => {
    const value: number = 42;
    const c = 'c' as string;
    const res = path(['a', 'b', c], obj);
    equal(res, value);
  });

  it('curried: path tree deep', () => {
    const value: number = 42;
    const res = path(['a', 'b', 'c'])(obj);
    equal(res, value);
  });

  it('object with list inside', () => {
    const value: number = 43;
    const res = path(['a', 1, 'c'], objWithList);
    equal(res, value);
  });

  it('list with object inside', () => {
    const value: number = 43;
    const res = path([1, 'c'], list);
    equal(res, value);
  });

  it('object with list inside', () => {
    const value: number = 43;
    const res = path(['a', 1, 'c', 0, 'd'], objWithNestedList);
    equal(res, value);
  });

  it('generic path sting[]', () => {
    const value: number = 42;
    const f = <T>(p: string[]) => {
      return path<T>(p, obj);
    };
    const res = f<number>(['a', 'b', 'c']);
    equal(res, value);
  });

  // it.skip('ts error: incorrect type for value not allowed', () => {
  //   typeFail(`
  //   import assocPath = require('ramda/src/assocPath');
  //   assocPath(['a', 'b'], '42', {a: {b: 0}})
  // `, /incompatible with index signature/);
  // });
});
