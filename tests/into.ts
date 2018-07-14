import * as R from '../ramda/dist/index';

declare const object: object;
declare const str_obj_transformer: R.Transformer<string, object, object>;
declare const str_obj_transformer_to_obj_str_to_obj: (
  x: R.Transformer<string, object, object>,
) => (x: object, y: string) => object;

declare const string: string;
declare const num_str_transformer: R.Transformer<number, string, string>;
declare const num_str_transformer_to_str_num_to_str: (
  x: R.Transformer<number, string, string>,
) => (x: string, y: number) => string;

// @dts-jest:pass:snap
R.into(object, str_obj_transformer_to_obj_str_to_obj);
// @dts-jest:pass:snap
R.into(object)(str_obj_transformer_to_obj_str_to_obj);
// @dts-jest:pass:snap
R.into(str_obj_transformer, str_obj_transformer_to_obj_str_to_obj);
// @dts-jest:pass:snap
R.into(str_obj_transformer)(str_obj_transformer_to_obj_str_to_obj);

// @dts-jest:skip
R.into(string, num_str_transformer_to_str_num_to_str);
// @dts-jest:pass:snap
R.into(string)(num_str_transformer_to_str_num_to_str);
// @dts-jest:skip
R.into(num_str_transformer, num_str_transformer_to_str_num_to_str);
// @dts-jest:pass:snap
R.into(num_str_transformer)(num_str_transformer_to_str_num_to_str);
