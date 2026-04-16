import { readFile, writeFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

async function* walk(dir) {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith(".jsx") || entry.name.endsWith(".js") || entry.name.endsWith(".tsx")) yield p;
  }
}

const replacements = [
  [/https:\/\/d22po4pjz3o32e\.cloudfront\.net\/relume-icon\.svg/g, "/laima-star.svg"],
  [/https:\/\/d22po4pjz3o32e\.cloudfront\.net\/logo-image\.svg/g, "/laima-star.svg"],
];

let total = 0;
for await (const file of walk(".")) {
  let src = await readFile(file, "utf8");
  let changed = false;
  for (const [from, to] of replacements) {
    if (from.test(src)) {
      src = src.replace(from, to);
      changed = true;
    }
  }
  if (changed) {
    await writeFile(file, src);
    total++;
    console.log(`✓ ${file}`);
  }
}
console.log(`patched ${total} files`);
