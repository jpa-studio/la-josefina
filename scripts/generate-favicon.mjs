import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const src = resolve(root, 'public/logo.webp');

// 32x32 PNG for favicon.ico (ICO wrapping a PNG is widely supported)
const ico32 = await sharp(src).resize(32, 32).png().toBuffer();
writeFileSync(resolve(root, 'public/favicon.ico'), ico32);
console.log('✓ public/favicon.ico (32×32)');

// 180x180 PNG for Apple touch icon
await sharp(src)
  .resize(180, 180)
  .png()
  .toFile(resolve(root, 'public/apple-touch-icon.png'));
console.log('✓ public/apple-touch-icon.png (180×180)');
