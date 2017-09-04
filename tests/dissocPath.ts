import { Path } from '../ramda/dist/src/$types';
import R_dissocPath = require('../ramda/dist/src/dissocPath');

declare const path: Path;
declare const object: object;
declare const a_b_c_d_e: { a: { b: { c: { d: { e: number } } } } };

// @dts-jest:pass:snap
R_dissocPath(path, object);
// @dts-jest:pass:snap
R_dissocPath(path)(object);

// @dts-jest:pass:snap
R_dissocPath(path, a_b_c_d_e);
// @dts-jest:pass:snap
R_dissocPath(path)(a_b_c_d_e);
