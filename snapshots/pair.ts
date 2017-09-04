import R_pair = require('../ramda/dist/src/pair');

declare const number: number;
declare const object: object;

// @dts-jest:pass:snap -> <V>(value: V) => KeyValuePair<number, V>
R_pair(number);
// @dts-jest:pass:snap -> KeyValuePair<number, object>
R_pair(number)(object);
// @dts-jest:pass:snap -> KeyValuePair<number, object>
R_pair(number, object);
