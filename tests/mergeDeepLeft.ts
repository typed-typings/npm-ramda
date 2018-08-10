import * as R from '../ramda/dist/index';

declare const a_1: { a: 1 };
declare const b_2: { b: 2 };
declare const a_1_x_y_1: { a: 1; x: { y: 1 } };
declare const b_1_x_z_1: { b: 1; x: { z: 1 } };

// @dts-jest:pass:snap
R.mergeDeepLeft(a_1);

// @dts-jest:pass:snap
R.mergeDeepLeft(a_1)(b_2);
// @dts-jest:pass:snap
R.mergeDeepLeft(a_1, b_2);

// @dts-jest:pass:snap
R.mergeDeepLeft(a_1_x_y_1, b_1_x_z_1);
