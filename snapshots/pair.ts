import * as R_pair from '../ramda/dist/src/pair';

declare const number: number;
declare const object: object;

// @dts-jest:pass -> <V>(value: V) => KeyValuePair<number, V>
R_pair(number);
// @dts-jest:pass -> KeyValuePair<number, object>
R_pair(number)(object);
// @dts-jest:pass -> KeyValuePair<number, object>
R_pair(number, object);
