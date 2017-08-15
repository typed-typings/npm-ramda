import * as R_omit from '../ramda/dist/src/omit';

declare const object: object;
declare const string: string;

// @dts-jest:pass -> object
R_omit([string])(object);
// @dts-jest:pass -> object
R_omit([string], object);

// @dts-jest:pass -> object
R_omit([string])(object);
// @dts-jest:pass -> object
R_omit([string], object);
