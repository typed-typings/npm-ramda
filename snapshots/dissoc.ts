import R_dissoc = require('../ramda/dist/src/dissoc');

declare const string_property: string;
declare const object: object;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass:snap -> Pick<object, any>
R_dissoc(string_property, object);
// @dts-jest:pass:snap -> Pick<object, any>
R_dissoc(string_property)(object);

// @dts-jest:pass:snap -> Pick<{ a: 1; b: 2; c: 3; }, "b" | "c">
R_dissoc('a', a_1_b_2_c_3);
// @dts-jest:pass:snap -> Pick<{ a: 1; b: 2; c: 3; }, "b" | "c">
R_dissoc('a')(a_1_b_2_c_3);
