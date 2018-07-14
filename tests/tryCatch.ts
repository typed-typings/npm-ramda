import * as R from '../ramda/dist/index';

declare const T_to_T: <T>(x: T) => T;

// @dts-jest:pass:snap
R.tryCatch(T_to_T);
// @dts-jest:pass:snap
R.tryCatch(T_to_T)(T_to_T);
// @dts-jest:pass:snap
R.tryCatch(T_to_T, T_to_T);
