import * as R from '../ramda/dist/index';

declare const path: R.Path;
declare const object: object;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass:snap
R.path(path);

// @dts-jest:pass:snap
R.path(path)(object);
// @dts-jest:pass:snap
R.path(path, object);

// @dts-jest:pass:snap
R.path(['a', 'b', 'c'])(a_1_b_2_c_3);
// @dts-jest:pass:snap
R.path(['a', 'b', 'c'], a_1_b_2_c_3);
