// Entry for make.fun's "Make the AI Judge Laugh: Office Jokes".
//
// The whole program is one job: put a single one-line office joke into
// entry.txt inside the output directory, byte for byte the same on every
// run. The grader points MAKEFUN_OUTPUT_DIR at its own scratch output
// folder; on a plain machine the fallback is /output, the path the
// competition reads.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and the joke lands in out/entry.txt, with no trailing newline: the judge
// reads exactly what is in the file, so the text below is the entire entry.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The joke itself. It is aimed at the office moment everyone recognises:
// the reply-all chain. The setup asks the whole office to stop doing the
// very thing the punchline then does again — the complaint becomes the
// offence, and 47 colleagues agreeing only makes the pile-up worse.
const JOKE =
  "I replied-all asking everyone to stop replying-all, and 47 colleagues agreed, also by replying-all.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
