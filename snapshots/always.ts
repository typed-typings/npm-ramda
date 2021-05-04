import * as R from '../ramda/dist/index';

declare const string: string;

// @dts-jest:pass:snap -> (...args: any[]) => string
R.always(string);
// @dts-jest:pass:snap -> string
R.always(string)();
// @dts-jest:pass:snap -> string
R.always(string)('a', 'b');
