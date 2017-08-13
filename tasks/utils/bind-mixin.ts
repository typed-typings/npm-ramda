import * as dts from 'dts-element';

export const bind_mixin = (
  members: dts.ITopLevelMember[],
  function_types: dts.IFunctionType[],
) => {
  const main_type_declaration = members.find(
    dts.is_type_declaration,
  ) as dts.ITypeDeclaration;

  const type = main_type_declaration.type as dts.IObjectType;
  type.members!.splice(
    1,
    0,
    ...function_types.map(function_type =>
      dts.create_object_member({
        owned: dts.create_function_declaration({
          name: undefined,
          type: function_type,
        }),
      }),
    ),
  );
};
