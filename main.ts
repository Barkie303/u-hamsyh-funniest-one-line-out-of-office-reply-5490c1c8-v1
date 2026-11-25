// My away message and my laptop agreed on one thing: neither of us is answering today.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "Out of office until Monday. My laptop stayed home too — we're both ignoring you together.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
