import * as R from '../ramda/dist/index';

declare const a_1: { a: 1 };
declare const b_2: { b: 2 };
declare const a_1_x_y_1: { a: 1; x: { y: 1 } };
declare const b_1_x_z_1: { b: 1; x: { z: 1 } };

// @dts-jest:pass:snap -> <U extends object>(right: U) => { "0": Pick<{ a: 1; }, Exclude<"a", keyof U>> & Pick<U, Exclude<keyof U, "a">> & { [K in Extract<"a", keyof U>]: any[{ a: 1; }[K] extends object ? U[K] extends object ? 0 : 1 : 1]; }; "1": U; }[U extends object ? 0 : 1]
R.mergeDeepRight(a_1);

// @dts-jest:pass:snap -> Pick<{ a: 1; }, "a"> & Pick<{ b: 2; }, "b"> & {}
R.mergeDeepRight(a_1)(b_2);
// @dts-jest:pass:snap -> Pick<{ a: 1; }, "a"> & Pick<{ b: 2; }, "b"> & {}
R.mergeDeepRight(a_1, b_2);

// @dts-jest:pass:snap -> Pick<{ a: 1; x: { y: 1; }; }, "a"> & Pick<{ b: 1; x: { z: 1; }; }, "b"> & { x: Pick<{ y: 1; }, "y"> & Pick<{ z: 1; }, "z"> & any; }
R.mergeDeepRight(a_1_x_y_1, b_1_x_z_1);
