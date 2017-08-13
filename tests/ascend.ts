import { Morphism, Ordered } from '../ramda/dist/src/$types';
import * as R_ascend from '../ramda/dist/src/ascend';

declare const get_order_from_object: Morphism<object, Ordered>;
declare const object_a: object;
declare const object_b: object;

// @dts-jest:pass
R_ascend(get_order_from_object)(object_a)(object_b);
// @dts-jest:pass
R_ascend(get_order_from_object, object_a)(object_b);
// @dts-jest:pass
R_ascend(get_order_from_object, object_a, object_b);
