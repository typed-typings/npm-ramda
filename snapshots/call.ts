import * as R from '../ramda/dist/index';

declare const number_and_string_to_boolean: (a: number, b: string) => boolean;
declare const number_and_string: [number, string];

// @dts-jest:pass:snap -> boolean
R.call(number_and_string_to_boolean, ...number_and_string);
