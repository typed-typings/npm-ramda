import { List } from '../ramda/dist/src/$types';
import R_slice = require('../ramda/dist/src/slice');

declare const number: number;
declare const string: string;
declare const object_list: List<object>;

// @dts-jest:pass:snap
R_slice(number)(number)(string);
// @dts-jest:pass:snap
R_slice(number, number, string);

// @dts-jest:pass:snap
R_slice(number)(number)(object_list);
// @dts-jest:pass:snap
R_slice(number, number, object_list);
