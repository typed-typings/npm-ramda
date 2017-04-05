import * as R from 'ramda';

() => {
  // $ExpectType Dictionary<any>
  R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
  // => { 'name': 'fred', 'age': 40 }
  let resetToDefault = R.flip(R.merge)({ x: 0 });
  // $ExpectType Dictionary<number>
  resetToDefault({ x: 5, y: 2 }); // => {x: 0, y: 2}
};