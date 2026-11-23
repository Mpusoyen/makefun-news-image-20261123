// Copies the finished poster image to the grader's output directory.
// The image is built ahead of time (see poster.html) and shipped in the repo;
// this program does no network and no drawing, it just places the file.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
