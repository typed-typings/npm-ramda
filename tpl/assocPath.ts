import {
  importInterfaces,
  declareFunction,
  arrowFunction,
  makeParamStringNumberCombinations,
  makeParamStringNumbers,
  makeNestedObjPath,
  methodSignature,
  makeTuple,
  Template,
  docs
} from '../gen';

const maxPathDepth = 5;

const desc = `
Makes a shallow clone of an object, setting or overriding 
the nodes required to create the given path, and placing the specific 
value at the tail end of that path.
Note: Tuples are not supported by typings.
Max path depth typed is ${maxPathDepth}.
`;

const propsLists =
  makeParamStringNumbers(maxPathDepth);

const orBrackets = (...items: string[]) =>
  `(${items.join(') | (')})`;


const generic = [
  methodSignature(desc,
    ['T', 'O'],
    [{ path: 'Path' }, { val: 'T' }, { obj: 'O' }],
    'O'
  ),
  methodSignature(desc, ['T'],
    [{ path: 'Path' }, { val: 'T' }],
    methodSignature('', ['O'], [{ obj: 'O' }], 'O')
  ),
  methodSignature('', [],
    [{ path: 'Path' }], [
      methodSignature('',
        ['T', 'O'],
        [{ val: 'T' }, { obj: 'O' }],
        'O'
      ),
      methodSignature('',
        ['T'], [{ val: 'T' }],
        methodSignature('', ['O'], [{ obj: 'O' }], 'O')
      )
    ]
  )
];

const template: Template = {
  imports: ['Path'],
  signatures: [
    ...generic
    // ...propsLists.map(props => [
    //   methodSignature(desc,
    //     props.map(n => `P${n} extends ${typeof n}`)
    //       .concat([
    //         `T`, 'O extends ' + makeNestedObjPath(props, 'T')
    //       ]), [
    //       { path: makeTuple(props, props.length) },
    //       { value: 'T' },
    //       { obj: 'O' }
    //     ], 'O'
    //   )
    // ]),
    // // curry 2-1
    // ...propsLists.map(props => [
    //   methodSignature(desc,
    //     props.map(n => `P${n} extends ${typeof n}`).concat(`T`), [
    //       { path: makeTuple(props, props.length) },
    //       { value: 'T' }
    //     ], [
    //       methodSignature('',
    //         ['O extends ' + makeNestedObjPath(props, 'T')],
    //         [{ obj: 'O' }],
    //         `O`
    //       )]
    //   )
    // ]),
    // // curry 1-(1,2)
    // ...propsLists.map(props => [
    //   methodSignature(desc,
    //     props.map(n => `P${n} extends ${typeof n}`)
    //       .concat(`T`), [
    //       { path: makeTuple(props, props.length) }
    //     ], [
    //       methodSignature('', ['T'],
    //         [{ value: 'T' }], [
    //           methodSignature('',
    //             ['O extends ' + makeNestedObjPath(props, 'T')],
    //             [{ obj: 'O' }],
    //             `O`
    //           )]
    //       ), methodSignature('',
    //         [`T`, 'O extends ' + makeNestedObjPath(props, 'T')],
    //         [{ value: 'T' }, { obj: 'O' }],
    //         `O`
    //       )]
    //   )
    // ]),
    //generic
  ]
};

module.exports = template;
