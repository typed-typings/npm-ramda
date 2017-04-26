import assocPath = require('ramda/src/assocPath');
import { equal } from 'assert';
import { itFailsType, typeFail } from '../type-fail';

type nestedX = { x: number };

const obj = { a: { b: { c: 0 } } };
const objWithList = { a: [{ c: 0 }, { c: 1 }] };
describe('assocPath', () => {
  // it('path with two props', () => {
  //   const value: number = 42;
  //   const res = assocPath(['a', 'b'], { c: value }, obj).a.b.c;
  //   equal(res, value);
  // });

  // it('object with list inside', () => {
  //   const value: number = 42;
  //   const res = assocPath(['a', 1], { c: value }, objWithList).a[1].c;
  //   equal(res, value);
  // });

  // it('curried 2-1: object with list inside', () => {
  //   const value: number = 42;
  //   const res = assocPath(['a', 1], { c: value })
  //     (objWithList).a[1].c;
  //   equal(res, value);
  // });

  // it('curried 1-2: object with list inside', () => {
  //   const value: number = 42;
  //   const res = assocPath(['a', 1])({ c: value },
  //     objWithList).a[1].c;
  //   equal(res, value);
  // });

  // it('curried 1-1-1: object with list inside', () => {
  //   const value: number = 42;
  //   const res = assocPath(['a', 1])({ c: value })
  //     (objWithList).a[1].c;    
  //   equal(res, value);
  // });

  // it('ts error: incorrect type for value not allowed', () => {
  //   typeFail(`
  //   import assocPath = require('ramda/src/assocPath');
  //   assocPath(['a', 'b'], '42', {a: {b: 0}})    
  // `, /is not assignable/);
  // });
});
