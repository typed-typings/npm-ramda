// import lensPath = require('ramda/src/lensPath');
// import { equal } from 'assert';
// import { typeFail } from '../type-fail';

// interface Obj {
//   p1: number;
//   p2: string;
//   p3: boolean;
//   p4: string;
// }

// const obj: Obj = {
//   p1: 33,
//   p2: 'Jake',
//   p3: true,
//   p4: 'some'
// };

// describe('lensPath', () => {
//   it('one prop', () => {
//     const res = lensPath(['p2'], obj);
//     equal(res[0], obj.p2);
//   });
  
//   //var xHeadYLens = lensPath(['x', 0, 'y']);

//   // it('ts error: unkonwn props not allowed', () => {
//   //   typeFail(`
//   //     import props = require('ramda/src/props');
//   //     props(['p1', 'other'], {p1: 1})    
//   //   `, /not assignable/);
//   // });
// });
