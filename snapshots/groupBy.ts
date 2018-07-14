import * as R from '../ramda/dist/index';

declare const object_to_string: (x: object) => string;
declare const object_array: object[];

// @dts-jest:pass:snap -> (list: R.List<object>) => R.Dictionary<object[]>
R.groupBy(object_to_string);
// @dts-jest:pass:snap -> R.Dictionary<object[]>
R.groupBy(object_to_string)(object_array);
// @dts-jest:pass:snap -> R.Dictionary<object[]>
R.groupBy(object_to_string, object_array);
