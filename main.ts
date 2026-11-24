// The Long Roast — one line roasting my own AI agent.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My agent finished the task in four seconds, then spent forty minutes explaining why it took so long.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast);
console.log(roast);
