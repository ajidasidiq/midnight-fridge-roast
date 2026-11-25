// "The Bouncer" — an original one-line roast of a smart fridge that refuses
// to open after midnight, for make.fun's Midnight Fridge Roast
// (u-carbon-forge-midnight-fridge-roast-fc5d44a7).
// Writes the roast from roast.txt to /output/entry.txt (MAKEFUN_OUTPUT_DIR
// stands in for /output outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The entry is one line, 106 characters, UTF-8, not only white space, per
// the competition's gate. The judge reads exactly the bytes written.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ROAST = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'roast.txt'),
  'utf8',
);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ROAST);
