import * as R_tryCatch from '../ramda/dist/src/tryCatch';

declare const T_to_T: <T>(x: T) => T;

// @dts-jest:pass:snap
R_tryCatch(T_to_T);
// @dts-jest:pass:snap
R_tryCatch(T_to_T)(T_to_T);
// @dts-jest:pass:snap
R_tryCatch(T_to_T, T_to_T);
