import * as fs from 'fs';

export const importInterfaces = (names: string[]) =>
  `import { ${names.join(', ')} } from '../interfaces';`

export type FunParams = { [name: string]: string }[]

export const parseFunParams = (params: FunParams) =>
  params.map(p => `${Object.keys(p)[0]}: ${p[Object.keys(p)[0]]}`).join(', ')

export const arrowFunction = (
  typeParams: string[],
  params: FunParams,
  result: string) => {
  return `<\n${typeParams.join(',\n')}>\n(${parseFunParams(params)}) => \n${result}`
}

export const declareFunction = (name: string,
  typeParams: string[],
  params: FunParams,
  result: string
) => `declare function ${name}` +
  `<\n${typeParams.join(',\n')}>\n(${parseFunParams(params)}): \n${result}`


export function getParamsNums(max: number) {
  return Array.from(Array(max + 1).keys()).map(i =>
    Array.from(Array(i + 1).keys()).slice(1)
  ).slice(1)
}



const tplFiles = fs.readdirSync(__dirname + '/tpl')

describe('Generation', () => {
  tplFiles.forEach(tplFile => {
    const name = tplFile.replace(/\.ts$/, '')
    it(name, () => {
      const src = require(__dirname + '/tpl/' + tplFile)
        .concat(`export = ${name}`)
        .join('\n\n')
        .concat('\n')
      fs.writeFileSync(__dirname + `/src/${name}.d.ts`, src)
    })
  })
})