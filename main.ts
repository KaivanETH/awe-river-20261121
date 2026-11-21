// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600
// Writes one short relaxation text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, deterministic: every run writes the same bytes.
// Text: written to leave the reader unhurried; shown, never instructed (271 code points).
// Revision 2: header clarified; the closing cadence softened; images unchanged.
// The text below is fixed at build time: no clock, no randomness, no network.
// Revision 3: the closing line carries the whole piece; nothing else competes with it.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Create the target directory when it is missing, so a bare local run works too.

const TEXT =
  'The river holds the sky and asks nothing of you. ' +
  'It turns a slow green shoulder over the stones and goes on without hurry, ' +
  'carrying light to where the sea keeps widening. ' +
  'Nothing here is waiting. ' +
  'Stay as long as the light does; the water is patient, and you are not late.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);