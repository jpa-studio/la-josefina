import { mkdirSync, renameSync, existsSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(import.meta.url), "..", "..");
const IMAGES = resolve(ROOT, "public", "images");

const moves = [
  ["IMG_9195.jpg", "hero/hero.jpg"],
  ["IMG_9210.PNG", "dishes/chivito-josefina.jpg"],
  ["IMG_9204.PNG", "dishes/chivito-estandar.jpg"],
  ["IMG_9209.PNG", "dishes/chivito-criollo.jpg"],
  ["IMG_9207.PNG", "dishes/milanesa-napolitana.jpg"],
  ["IMG_9203.PNG", "dishes/hamburguesa-doble.jpg"],
  ["IMG_9201.PNG", "dishes/tabla-milanesas.jpg"],
  ["IMG_9197.PNG", "local/ciudad-vieja.jpg"],
  ["IMG_9198.PNG", "local/ambiente.jpg"],
];

let moved = 0;
let skipped = 0;
for (const [from, to] of moves) {
  const src = resolve(IMAGES, from);
  const dst = resolve(IMAGES, to);

  if (existsSync(dst)) {
    console.log(`skip (exists): ${to}`);
    skipped++;
    continue;
  }
  if (!existsSync(src)) {
    console.warn(`skip (missing source): ${from}`);
    skipped++;
    continue;
  }

  mkdirSync(dirname(dst), { recursive: true });
  renameSync(src, dst);
  const size = (statSync(dst).size / 1024).toFixed(0);
  console.log(`moved: ${from} -> ${to}  (${size} KB)`);
  moved++;
}

console.log(`\nDone. Moved ${moved}, skipped ${skipped}.`);
