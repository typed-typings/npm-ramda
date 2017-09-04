import { List } from '../ramda/dist/src/$types';
import R_splitAt = require('../ramda/dist/src/splitAt');

declare const number: number;
declare const string: string;
declare const object_list: List<object>;

// @dts-jest:pass:snap -> [string, string]
R_splitAt(number)(string);
// @dts-jest:pass:snap -> [string, string]
R_splitAt(number, string);

// @dts-jest:pass:snap -> [object[], object[]]
R_splitAt(number)(object_list);
// @dts-jest:pass:snap -> [object[], object[]]
R_splitAt(number, object_list);
