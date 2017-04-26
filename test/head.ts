import head = require('ramda/src/head');
import { equal } from 'assert';
import { typeFail } from '../type-fail';

const list = [1, 2, 3, 4, 5];

const tuple = ['1', 2, 3];

describe('flatten', () => {
  it('takes list', () => {
    const res = head(list);
    equal(res, list[0]);
  });

  it('takes tuple', () => {
    const res = head(tuple);
    equal(res, tuple[0]);
  });
});
