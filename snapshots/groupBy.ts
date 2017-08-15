import * as R_groupBy from '../ramda/dist/src/groupBy';

declare const object_to_string: (x: object) => string;
declare const object_array: object[];

// @dts-jest:pass -> (list: object[] | ArrayLike<object>) => Dictionary<object[]>
R_groupBy(object_to_string);
// @dts-jest:pass -> Dictionary<object[]>
R_groupBy(object_to_string)(object_array);
// @dts-jest:pass -> Dictionary<object[]>
R_groupBy(object_to_string, object_array);
