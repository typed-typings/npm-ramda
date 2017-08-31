import R_tryCatch = require('../ramda/dist/src/tryCatch');

declare const T_to_T: <T>(x: T) => T;

// @dts-jest:pass:snap -> (catcher: <T>(x: T) => T) => <T>(x: T) => T
R_tryCatch(T_to_T);
// @dts-jest:pass:snap -> <T>(x: T) => T
R_tryCatch(T_to_T)(T_to_T);
// @dts-jest:pass:snap -> <T>(x: T) => T
R_tryCatch(T_to_T, T_to_T);
