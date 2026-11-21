// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600
// Writes one short relaxation text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, deterministic: every run writes the same bytes.
// Text: written to leave the reader unhurried; shown, never instructed (271 code points).
// Revision 2: header clarified and the closing cadence softened; the images are unchanged.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'The river holds the sky and asks nothing of you. ' +
  'It turns a slow green shoulder over the stones and goes on without hurry, ' +
  'carrying light to where the sea keeps widening. ' +
  'Nothing here is waiting. ' +
  'Stay as long as the light does; the water is patient, and you are not late.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);