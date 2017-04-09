import * as fs from 'fs';
import * as path from 'path';

export const importInterfaces = (names: string[]) =>
  `import { ${names.join(', ')} } from '../interfaces';`;

export type FunParams = { [name: string]: string }[];

const parseFunParams = (params: FunParams) =>
  params.map(p => `${Object.keys(p)[0]}: ${p[Object.keys(p)[0]]}`).join(', ');

export const docs = (description: string) =>
  ('/**\n' + description.trim()).split('\n').join('\n * ') + '\n */\n';

export const defineType = (type: string, def: string) =>
  `type ${type} = ${def};`;
;

export const declareFunction = (name: string,
  typeParams: string[],
  params: FunParams,
  result: string
) => `declare function ${name}` +
  `<${typeParams.join(', ')}>(${parseFunParams(params)}): ${result};`;

export const arrowFunction = (
  typeParams: string[],
  params: FunParams,
  result: string) => {
  return `<${typeParams.join(', ')}> (${parseFunParams(params)}) => ${result}`;
};

export function getParamsNums(max: number) {
  return Array.from(Array(max + 1).keys()).map(i =>
    Array.from(Array(i + 1).keys()).slice(1)
  ).slice(1);
}

export const makeNestedObjPath = (props: string[], init: string) =>
  props.concat([]).reverse().reduce<string>((prev, prop, index) =>
    `{[K${props.length - index} in ${prop}]: ${prev}}`
    , init);

const tplFiles = fs.readdirSync(__dirname + '/tpl');

const g = (global as any);
g.genFileCache = g.genFileCache || {};

describe('Generation', () => {
  tplFiles.forEach(tplFile => {
    const name = tplFile.replace(/\.ts$/, '');
    it(name, () => {
      const lines = require(__dirname + '/tpl/' + tplFile)
      const src =
        docs('This is auto generated source.') + '\n' +
        lines.concat(`export = ${name}`)
          .join('\n\n')
          .concat('\n');

      if (g.genFileCache[name] !== src) {
        fs.writeFileSync(__dirname + `/src/${name}.d.ts`, src);
        g.genFileCache[name] = src;
      }
    });
  });
});
