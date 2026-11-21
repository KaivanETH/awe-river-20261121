// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600
// Writes one short relaxation text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, deterministic: every run writes the same bytes.
// Round 2 text: 273 code points; geological deep time, no stock starlight motif.
// Revision 2: header clarified; the closing cadence softened; images unchanged.
// The text below is fixed at build time: no clock, no randomness, no network.
// Revision 3: the closing line carries the whole piece; nothing else competes with it.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Create the target directory when it is missing, so a bare local run works too.

const TEXT =
  "The river holds the sky and asks nothing of you. " +
  "Beneath it, stones the hill let go before there were hills " +
  "are turning a little rounder each year, in no hurry at all. " +
  "Nothing down there waits. Nothing is late. " +
  "The light stays on the water a while; stay as long as it does.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);