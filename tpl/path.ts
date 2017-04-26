import {
  //importInterfaces,
  //declareFunction,
  //arrowFunction,
  makeParamStringNumbers,
  methodSignature,
  makeParamStringNumberCombinations,
  makeNestedObjPath,
  makeTuple, docs
} from '../gen';

const maxPathDepth = 5;

const propsParams =
  makeParamStringNumberCombinations(maxPathDepth);
//const propsParams = makeParamStringNumbers(maxPathDepth)

const desc = `Retrieve the value at a given path. 
Note: Tuples are not supported by typings. 
Max path depth typed is ${maxPathDepth}.`;

module.exports = {
  signatures: [
    methodSignature(desc + '\nFallback signature.',
      ['T'], [{ path: '(string | number)[]' }, { obj: 'any' }],
      'T'),
    methodSignature(desc + '\nFallback signature.',
      ['T'], [{ path: '(string | number)[]' }],
      methodSignature('', [], [{ obj: 'any' }],
        'T')
    ),
    ...propsParams.map((props) =>
      methodSignature(desc,
        props.map(n => `P${n} extends ${typeof n}`)
          .concat(`T`), [
          { path: makeTuple(props) },
          { obj: makeNestedObjPath(props, 'T') }
        ],
        `T`
      )),
    ...propsParams.map((props) =>
      methodSignature(desc,
        props.map(n => `P${n} extends ${typeof n}`)
          .concat(`T`), [
          { path: makeTuple(props) }
        ],
        [methodSignature('', [`T`], [
          { obj: makeNestedObjPath(props, 'T') }
        ], 'T')]
      )),
      
    
  ].reverse()
}

// module.exports = [
//   ...propsParams.map((props) =>
//     docs(desc) +
//     declareFunction('path',
//       props.map(n => `P${n} extends ${typeof n}`)
//         .concat(`T`),
//       [
//         { path: makeTuple(props, props.length) },
//         {
//           obj: makeNestedObjPath(props, 'T')
//         }
//       ],
//       `T`
//     )),
//   `// curried`,
//   ...propsParams.map((props) =>
//     docs(desc) +
//     declareFunction('path',
//       props.map(n => `P${n} extends ${typeof n}`)
//         .concat(`T`),
//       [
//         { path: makeTuple(props, props.length) }
//       ],
//       arrowFunction([`T`], [
//         {
//           obj: makeNestedObjPath(props, 'T')
//         }
//       ], 'T'
//       )
//     ))
// ];
