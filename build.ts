import * as fs from 'fs';
import * as path from 'path';
import { exit } from 'process';

import {ScriptTarget, createProgram, ModuleKind, JsxEmit} from 'typescript'

const program = createProgram(['./src/main.tsx'], {
  target: ScriptTarget.ES2017,
  module: ModuleKind.CommonJS,
  //jsx: JsxEmit.Preserve,
  jsxFactory: "h"
});

const emitResult = program.emit();
console.log(emitResult);

if (!emitResult.emittedFiles) exit(1);

if (emitResult.emittedFiles.length > 0) {
  const outputFile = path.join(__dirname, 'output.html');
  fs.writeFileSync(outputFile, emitResult.emittedFiles[0]);
  console.log('TSX converted to HTML successfully');
} else {
  console.error('No output files were emitted.');
}