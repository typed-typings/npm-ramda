import { Chain } from '../ramda/dist/src/$types';
import * as R_composeK from '../ramda/dist/src/composeK';

declare const chain_boolean_to_chain_number: (
  x: Chain<boolean>,
) => Chain<number>;
declare const chain_boolean_to_chain_string: (
  x: Chain<boolean>,
) => Chain<string>;
declare const chain_number_to_chain_boolean: (
  x: Chain<number>,
) => Chain<boolean>;
declare const chain_number_to_chain_string: (x: Chain<number>) => Chain<string>;
declare const chain_string_to_chain_boolean: (
  x: Chain<string>,
) => Chain<boolean>;
declare const chain_string_to_chain_number: (x: Chain<string>) => Chain<number>;

// @dts-jest:pass:snap
R_composeK(chain_boolean_to_chain_number);
// @dts-jest:pass:snap
R_composeK(chain_boolean_to_chain_number, chain_string_to_chain_boolean);
// @dts-jest:pass:snap
R_composeK(
  chain_boolean_to_chain_number,
  chain_string_to_chain_boolean,
  chain_number_to_chain_string,
);
// @dts-jest:pass:snap
R_composeK(
  chain_boolean_to_chain_number,
  chain_string_to_chain_boolean,
  chain_number_to_chain_string,
  chain_string_to_chain_number,
);
// @dts-jest:pass:snap
R_composeK(
  chain_boolean_to_chain_number,
  chain_string_to_chain_boolean,
  chain_number_to_chain_string,
  chain_string_to_chain_number,
  chain_boolean_to_chain_string,
);
// @dts-jest:pass:snap
R_composeK(
  chain_boolean_to_chain_number,
  chain_string_to_chain_boolean,
  chain_number_to_chain_string,
  chain_string_to_chain_number,
  chain_boolean_to_chain_string,
  chain_number_to_chain_boolean,
);
