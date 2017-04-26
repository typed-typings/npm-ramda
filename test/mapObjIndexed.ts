import mapObjIndexed = require('ramda/src/mapObjIndexed');
import { equal } from 'assert';
import { typeFail } from '../type-fail';

type nestedX = { x: number };

const obj = { a: 1, b: 2, c: 3};
//const objWithList = { a: [{ c: 0 }, { c: 1 }] };

describe('mapObjIndexed', () => {
  // it('path with two props', () => {
  //   const value: number = 42;
  //   const mapFn = (x: number) => x.toString()   
  //   const res = mapObjIndexed(mapFn, obj)
  //   equal(res, value);
  // });
});
