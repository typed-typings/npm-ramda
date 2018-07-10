import * as R from '../ramda/dist/index';

declare const get_order_from_object: R.Morphism<object, R.Ordered>;
declare const object_a: object;
declare const object_b: object;

// @dts-jest:pass:snap
R.descend(get_order_from_object)(object_a)(object_b);
// @dts-jest:pass:snap
R.descend(get_order_from_object, object_a)(object_b);
// @dts-jest:pass:snap
R.descend(get_order_from_object, object_a, object_b);
