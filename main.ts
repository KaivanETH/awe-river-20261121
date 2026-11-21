// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600
// Writes one short relaxation text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, deterministic: every run writes the same bytes.
// Round 4 text: 260 code points — kin-scene (top-100 texts carry kin 71% of the time)
// braided with the river/stone images that scored best in rounds 1-2.
// Revision 2: header clarified; the closing cadence softened; images unchanged.
// The text below is fixed at build time: no clock, no randomness, no network.
// Revision 3: the closing line carries the whole piece; nothing else competes with it.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Create the target directory when it is missing, so a bare local run works too.

const TEXT =
  'The river holds the evening and asks nothing of it. ' +
  'You sit with your feet over the side while your father rows; ' +
  'the water takes the light and gives back only quiet. ' +
  'Behind the boat, the wake closes over stones the hill let go long ago. ' +
  'Nothing calls you back.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);