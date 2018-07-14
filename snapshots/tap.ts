import * as R from '../ramda/dist/index';

declare const string_to_void: (x: string) => void;
declare const string: string;

// @dts-jest:pass:snap -> (value: string) => string
R.tap(string_to_void);
// @dts-jest:pass:snap -> string
R.tap(string_to_void, string);
