import * as R_always from '../ramda/dist/src/always';

declare const string: string;

// @dts-jest:pass
R_always(string);
// @dts-jest:pass
R_always(string)();
