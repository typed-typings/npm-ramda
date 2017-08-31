import R_memoize = require('../ramda/dist/src/memoize');

declare const T_to_T: <T>(value: T) => T;

// @dts-jest:pass:snap -> <T>(value: T) => T
R_memoize(T_to_T);
