import sharp from 'sharp';
import toIco from 'to-ico';
import { writeFileSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const src = resolve(root, 'public/logo.webp');

// 32x32 PNG — used directly as icon.png fallback
const png32 = await sharp(src).resize(32, 32).png().toBuffer();
writeFileSync(resolve(root, 'public/icon.png'), png32);
console.log('✓ public/icon.png (32×32)');

// Proper ICO wrapping the 32x32 PNG
const ico = await toIco([png32]);
writeFileSync(resolve(root, 'public/favicon.ico'), ico);
console.log('✓ public/favicon.ico (32×32, ICO)');

// Next.js App Router picks up app/favicon.ico automatically — keep it in sync
copyFileSync(resolve(root, 'public/favicon.ico'), resolve(root, 'app/favicon.ico'));
console.log('✓ app/favicon.ico (synced)');

// 180x180 PNG for Apple touch icon
await sharp(src)
  .resize(180, 180)
  .png()
  .toFile(resolve(root, 'public/apple-touch-icon.png'));
console.log('✓ public/apple-touch-icon.png (180×180)');
