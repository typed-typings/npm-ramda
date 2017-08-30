import { Transformer } from '../ramda/dist/src/$types';
import * as R_transduce from '../ramda/dist/src/transduce';

declare const number_object_transformer_identity: (
  x: Transformer<number, object, object>,
) => Transformer<number, object, object>;
declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;

// @dts-jest:pass:snap
R_transduce(
  number_object_transformer_identity,
  object_number_to_object,
  object,
);
// @dts-jest:pass:snap
R_transduce(number_object_transformer_identity)(object_number_to_object)(
  object,
)(number_array);
// @dts-jest:pass:snap
R_transduce(
  number_object_transformer_identity,
  object_number_to_object,
  object,
  number_array,
);
