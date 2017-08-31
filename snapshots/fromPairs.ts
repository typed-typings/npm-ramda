import R_fromPairs = require('../ramda/dist/src/fromPairs');

declare const number_object_tuple: [number, object];

// @dts-jest:pass:snap -> Dictionary<object>
R_fromPairs([number_object_tuple]);
