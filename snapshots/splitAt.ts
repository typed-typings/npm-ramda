import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;
declare const object_list: R.List<object>;

// @dts-jest:pass:snap -> [string, string]
R.splitAt(number)(string);
// @dts-jest:pass:snap -> [string, string]
R.splitAt(number, string);

// @dts-jest:pass:snap -> [object[], object[]]
R.splitAt(number)(object_list);
// @dts-jest:pass:snap -> [object[], object[]]
R.splitAt(number, object_list);
