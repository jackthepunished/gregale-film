#!/usr/bin/env node
// Syntax-check every source file as an ES module: node tools/check.mjs
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..', 'src');
const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : p.endsWith('.js') ? [p] : []; });
let bad = 0;
for (const file of walk(root)) {
  try { new vm.SourceTextModule(readFileSync(file, 'utf8'), { identifier: file }); }
  catch (e) { bad++; console.log(`${file}\n  ${e.message}`); }
}
console.log(bad ? `${bad} file(s) with errors` : 'all files parse');
process.exit(bad ? 1 : 0);
