import * as R_tap from '../ramda/dist/src/tap';

declare const string_to_void: (x: string) => void;
declare const string: string;

// @dts-jest:pass
R_tap(string_to_void);
// @dts-jest:pass
R_tap(string_to_void, string);
