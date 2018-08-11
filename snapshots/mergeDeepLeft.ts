import * as R from '../ramda/dist/index';

declare const a_1: { a: 1 };
declare const b_2: { b: 2 };
declare const a_1_x_y_1: { a: 1; x: { y: 1 } };
declare const b_1_x_z_1: { b: 1; x: { z: 1 } };

// @dts-jest:pass:snap -> <U extends object>(right: U) => { "0": Pick<U, Exclude<keyof U, "a">> & Pick<{ a: 1; }, Exclude<"a", keyof U>> & { [K in Extract<keyof U, "a">]: any[U[K] extends object ? { a: 1; }[K] extends object ? 0 : 1 : 1]; }; "1": { a: 1; }; }[U extends object ? 0 : 1]
R.mergeDeepLeft(a_1);

// @dts-jest:pass:snap -> Pick<{ b: 2; }, "b"> & Pick<{ a: 1; }, "a"> & {}
R.mergeDeepLeft(a_1)(b_2);
// @dts-jest:pass:snap -> Pick<{ b: 2; }, "b"> & Pick<{ a: 1; }, "a"> & {}
R.mergeDeepLeft(a_1, b_2);

// @dts-jest:pass:snap -> Pick<{ b: 1; x: { z: 1; }; }, "b"> & Pick<{ a: 1; x: { y: 1; }; }, "a"> & { x: Pick<{ z: 1; }, "z"> & Pick<{ y: 1; }, "y"> & any; }
R.mergeDeepLeft(a_1_x_y_1, b_1_x_z_1);
