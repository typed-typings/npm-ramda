import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap
R.zipObj(number_array);
// @dts-jest:pass:snap
R.zipObj(number_array)(string_array);
// @dts-jest:pass:snap
R.zipObj(number_array, string_array);

// @dts-jest:pass:snap
R.zipObj(['a', 'b']);
// @dts-jest:pass:snap
R.zipObj(['a', 'b'])(number_array);
// @dts-jest:pass:snap
R.zipObj(['a', 'b'], number_array);
