import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'typed-promisify';

export const importInterfaces = (names: string[]) =>
  `import { ${names.join(', ')} } from '../interfaces';`;

export type FunParams = { [name: string]: string }[];

export const parseFunParams = (params: FunParams) =>
  params.map(p => `${Object.keys(p)[0]}: ${p[Object.keys(p)[0]]}`).join(', ');

export const arrowFunction = (
  typeParams: string[],
  params: FunParams,
  result: string) => {
  return `<\n${typeParams.join(',\n')}>\n(${parseFunParams(params)}) => \n${result}`;
};

export const docs = (description: string) =>
  ('/**\n' + description.trim()).split('\n').join('\n * ') + '\n */\n';


export const declareFunction = (name: string,
  typeParams: string[],
  params: FunParams,
  result: string
) => `declare function ${name}` +
  //`<\n${typeParams.join(',\n')}>\n(${parseFunParams(params)}): \n${result}`;
  `<${typeParams.join(', ')}>(${parseFunParams(params)}): ${result}`;


export function getParamsNums(max: number) {
  return Array.from(Array(max + 1).keys()).map(i =>
    Array.from(Array(i + 1).keys()).slice(1)
  ).slice(1);
}

export const makeNestedObjPath = (props: string[], init: string) =>
  props.concat([]).reverse().reduce<string>((prev, prop, index) =>
    `{[K${props.length - index} in ${prop}]: ${prev}}`
    , init);

export const defineType = (type: string, def: string) =>
  `type ${type} = ${def};`;
;

const tplFiles = fs.readdirSync(__dirname + '/tpl');

const g = (global as any);
g.genFileCache = g.genFileCache || {};

describe('Generation', () => {
  tplFiles.forEach(tplFile => {
    const name = tplFile.replace(/\.ts$/, '');
    it(name, () => {
      const src = require(__dirname + '/tpl/' + tplFile)
        .concat(`export = ${name}`)
        .join('\n\n')
        .concat('\n');

      if (g.genFileCache[name] !== src) {
        fs.writeFileSync(__dirname + `/src/${name}.d.ts`, src);
        g.genFileCache[name] = src;
      }
    });
  });
});
