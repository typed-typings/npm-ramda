import { Morphism, Ordered } from '../ramda/dist/src/$types';
import R_ascend = require('../ramda/dist/src/ascend');

declare const get_order_from_object: Morphism<object, Ordered>;
declare const object_a: object;
declare const object_b: object;

// @dts-jest:pass:snap
R_ascend(get_order_from_object)(object_a)(object_b);
// @dts-jest:pass:snap
R_ascend(get_order_from_object, object_a)(object_b);
// @dts-jest:pass:snap
R_ascend(get_order_from_object, object_a, object_b);
