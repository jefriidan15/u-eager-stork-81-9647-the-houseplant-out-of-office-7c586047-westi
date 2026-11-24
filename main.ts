import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office: I haven't been watered since March and I've unionized. The cactus is covering — he thrives on neglect."; // 1–120 chars, houseplant voice

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
