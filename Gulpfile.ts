import * as cp from 'child_process';
import * as path from 'path';
import gulp = require('gulp');
import * as insert from 'gulp-insert';
import del = require('del');
import merge2 = require('merge2');
const isWin = /^win/.test(process.platform);
// import { ts, normalizeSlashes } from 'typescript/src/compiler/core';
// import { normalizeSlashes } from 'typescript/scripts/ior';

const localBaseline = 'tests/baselines/local/';
const refBaseline = 'tests/baselines/reference/';

function normalizeSlashes(path: string): string {
    return path.replace(/\\/g, '/');
}

function getDiffTool() {
    const program = process.env['DIFF'];
    if (!program) {
        console.error('Add the "DIFF" environment variable to the path of the program you want to use.');
        process.exit(1);
    }
    return program;
}

function exec(cmd: string, args: string[], complete: Function, error: Function = () => {}) {
    console.log(`${cmd} ${args.join(' ')}`);
    const subshellFlag = isWin ? '/c' : '-c';
    const command = isWin ? [possiblyQuote(cmd), ...args] : [`${cmd} ${args.join(' ')}`];
    const ex = cp.spawn(isWin ? 'cmd' : '/bin/sh', [subshellFlag, ...command], { stdio: 'inherit' }); // , windowsVerbatimArguments: true
    ex.on('exit', (code: number) => code === 0 ? complete() : error(/*e*/ undefined, code));
    ex.on('error', error);
}

function possiblyQuote(cmd: string) {
    return cmd.indexOf(' ') >= 0 ? `'${cmd}'` : cmd;
}

function deleteTemporaryProjectOutput() {
    return del(path.join(localBaseline, 'projectOutput/'));
}

function getHarnessCompilerInputUnit(fileName: string): Harness.Compiler.TestFile {
  const unitName = normalizeSlashes(Harness.IO.resolvePath(fileName));
  let content //: string;
  try {
    content = Harness.IO.readFile(unitName);
  }
  catch (e) {
    content = Harness.IO.readFile(fileName);
  }
  return { unitName, content };
}

// set DIFF='C:/Program Files/SourceGear/Common/DiffMerge/sgdm.exe'
// from: https://github.com/Microsoft/TypeScript/blob/master/tests/cases/compiler/2dArrays.ts
// to: https://github.com/Microsoft/TypeScript/blob/master/tests/baselines/reference/2dArrays.js
// Diffs the compiler baselines using the diff tool specified by the 'DIFF' environment variable
gulp.task('diff', [], (done: ()=>void) => {
    let jsonPath = '.test.ts'; // ?
    let inputFiles = ['./test.ts']
        .map(getHarnessCompilerInputUnit);
    let files = inputFiles
        .filter(file => !!compilerResult.program.getSourceFile(file.unitName))
        .filter(e => !Harness.isDefaultLibraryFile(e.unitName))
    let currentDirectory: string = JSON.parse(Harness.IO.readFile(jsonPath)).currentDirectory;
    let compilerResult: Harness.Compiler.CompilerResult = Harness.Compiler.compileFiles(
        inputFiles,
        [], // otherFiles
        {}, // harnessOptions
        { noEmitOnError: false }, // opts.options
        currentDirectory
    ).result;
    const baseName = (<RegExpExecArray> /(.*)\/(.*).json/.exec(normalizeSlashes(jsonPath)))[2];
    const baselineOpts = {
        Subfolder: 'rwc',
        Baselinefolder: 'internal/baselines'
    };
    Harness.Compiler.doTypeAndSymbolBaseline(baseName, compilerResult, files, baselineOpts);
    exec(getDiffTool(), [refBaseline, localBaseline], done, done);
});

// Makes the most recent test results the new baseline, overwriting the old baseline
gulp.task('baseline-accept', [], () => {
    return baselineAccept('');
});

function baselineAccept(subfolder = '') {
    return merge2(baselineCopy(subfolder), baselineDelete(subfolder));
}

function baselineCopy(subfolder = '') {
    return gulp.src([`tests/baselines/local/${subfolder}/**`, `!tests/baselines/local/${subfolder}/**/*.delete`])
        .pipe(gulp.dest(refBaseline));
}

function baselineDelete(subfolder = '') {
    return gulp.src(['tests/baselines/local/**/*.delete'])
        .pipe(insert.transform((content, fileObj) => {
            const target = path.join(refBaseline, fileObj.relative.substr(0, fileObj.relative.length - '.delete'.length));
            del.sync(target);
            del.sync(fileObj.path);
            return '';
        }));
}

// // Runs 'local'
// gulp.task('default', [], ['local']);

// // Watches the src/ directory for changes and executes runtests-parallel.
// gulp.task('watch', [], [], () => {
//     gulp.watch('src/**/*.*', ['runtests-parallel']);
// });
