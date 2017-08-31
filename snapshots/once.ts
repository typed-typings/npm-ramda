import R_once = require('../ramda/dist/src/once');

declare const T_to_T: <T>(value: T) => T;

// @dts-jest:pass:snap -> <T>(value: T) => T
R_once(T_to_T);
