import * as R_indexBy from '../ramda/dist/src/indexBy';

declare const object_to_string: (x: object) => string;
declare const object_array: object[];

// @dts-jest:pass -> (list: object[] | ArrayLike<object>) => Dictionary<object>
R_indexBy(object_to_string);
// @dts-jest:pass -> Dictionary<object>
R_indexBy(object_to_string)(object_array);
// @dts-jest:pass -> Dictionary<object>
R_indexBy(object_to_string, object_array);
