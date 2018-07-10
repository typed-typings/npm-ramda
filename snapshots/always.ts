import * as R from '../ramda/dist/index';

declare const string: string;

// @dts-jest:pass:snap -> () => string
R.always(string);
// @dts-jest:pass:snap -> string
R.always(string)();
