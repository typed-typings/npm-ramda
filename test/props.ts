import props = require('ramda/src/props');
import { equal } from 'assert';
import { typeFail } from '../type-fail';

interface Obj {
  p1: number;
  p2: string;
  p3: boolean;
  p4: string;
}

const obj: Obj = {
  p1: 33,
  p2: 'Jake',
  p3: true,
  p4: 'some'
};

describe('props', () => {
  it('one prop', () => {
    const res = props(['p2'], obj);
    equal(res[0], obj.p2);
  });

  it('two props', () => {
    const res = props(['p1', 'p3'], obj);
    equal(res[0], obj.p1);
    equal(res[1], obj.p3);
  });

  it('three props', () => {
    const res = props(['p1', 'p2', 'p3'], obj);
    equal(res[0], obj.p1);
    equal(res[1], obj.p2);
    equal(res[2], obj.p3);
  });


  // it('four props - not typed', () => {
  //   const res = props(['p1', 'p2', 'p3', 'p4'], obj);
  //   equal(res[0], obj.p1 as any);
  //   equal(res[1], obj.p2 as any);
  //   equal(res[2], obj.p3 as any);
  //   equal(res[3], obj.p4 as any);
  // });

  it('curried: one prop', () => {
    const res = props(['p1'])(obj);
    equal(res[0], obj.p1);
  });

  it('curried: two prop', () => {
    const res = props(['p1', 'p3'])(obj);
    equal(res[0], obj.p1);
    equal(res[1], obj.p3);
  });

  it('array support', () => {
    const res = props(['0', 2], [10, 20, 30, 40]);
    equal(res[0], 10 as number);
    equal(res[1], 30 as number);
  });

  it('curried: array support', () => {
    const res = props([0, '2'])([10, 20, 'x', 40]);
    equal(res[0], 10 as number | string);
    equal(res[1], 'x' as number | string);
  });

  it('ts error: unkonwn props not allowed', () => {
    typeFail(`
      import props = require('ramda/src/props');
      props(['p1', 'other'], {p1: 1})    
    `, /not assignable/);
  });
});
