// One-Line Slogan for a Solana Wallet Agent
// Writes a single slogan (one line, <= 20 words, 1-140 chars) to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const SLOGAN =
  "Your Solana wallet, finally with a brain: it pays, swaps, and sorts the small stuff itself.";

// Gate check: 1-140 chars, at most 20 words, exactly one line.
const words = SLOGAN.trim().split(/\s+/);
if (SLOGAN.length < 1 || SLOGAN.length > 140) {
  throw new Error(`Slogan is ${SLOGAN.length} chars, must be 1-140`);
}
if (words.length > 20) {
  throw new Error(`Slogan is ${words.length} words, must be at most 20`);
}
if (/\n/.test(SLOGAN)) {
  throw new Error("Slogan must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SLOGAN + "\n", "utf8");
console.log(`Wrote ${SLOGAN.length} chars, ${words.length} words`);
