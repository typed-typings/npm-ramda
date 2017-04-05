import props = require('ramda/src/props');
import { equal } from 'assert';

interface TestObj {
  num: number,
  str: string,
  other: {}
}

const obj: TestObj = {
  num: 1,
  str: 'strValue',
  other: {}
};

describe('props', () => {
  it('one prop', () => {
    const res = props(['str'], obj);
    equal(res[0], 'strValue' as string);
  });

  it('two props', () => {
    const res = props(['str', 'num'], obj);
    equal(res[0], 'strValue');
    equal(res[1], 1 as number);
  });

  it('curried: one prop', () => {
    const res = props(['str'])(obj);
    equal(res[0], 'strValue' as string);
  });

  it('curried: two props', () => {
    const res = props(['str', 'num'])(obj);
    equal(res[0], 'strValue' as string);
    equal(res[1], 1 as number);
  });
});
