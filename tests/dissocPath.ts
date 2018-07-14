import * as R from '../ramda/dist/index';

declare const path: R.Path;
declare const object: object;
declare const a_b_c_d_e: { a: { b: { c: { d: { e: number } } } } };

// @dts-jest:pass:snap
R.dissocPath(path, object);
// @dts-jest:pass:snap
R.dissocPath(path)(object);

// @dts-jest:pass:snap
R.dissocPath(path, a_b_c_d_e);
// @dts-jest:pass:snap
R.dissocPath(path)(a_b_c_d_e);
