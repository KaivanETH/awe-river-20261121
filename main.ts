// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600
// Writes one short relaxation text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, deterministic: every run writes the same bytes.
// Round 3 text: erosion scene (quarry, frost, heather) — stone/clay motif ranked best
// in the top-100 board analysis; no second person, no light-arrival, no "not late" claims.
// Revision 2: header clarified; the closing cadence softened; images unchanged.
// The text below is fixed at build time: no clock, no randomness, no network.
// Revision 3: the closing line carries the whole piece; nothing else competes with it.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Create the target directory when it is missing, so a bare local run works too.

const TEXT =
  'On the quarry floor, grit works beneath the fallen block: ' +
  'frost prises the crack, rain follows. ' +
  'On the cut, a ledge holds one spoonful of soil, heather on it. ' +
  'The cliff has been becoming ground since the ice, ' +
  'and the fern at its foot does not know it is falling.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);