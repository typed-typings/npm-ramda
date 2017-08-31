import { List } from '../ramda/dist/src/$types';
import R_reverse = require('../ramda/dist/src/reverse');

declare const string: string;
declare const number_list: List<number>;

// @dts-jest:pass:snap
R_reverse(string);
// @dts-jest:pass:snap
R_reverse(number_list);
