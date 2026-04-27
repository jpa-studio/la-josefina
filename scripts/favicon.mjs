import sharp from 'sharp';

await sharp('public/logo.webp')
  .resize(32, 32)
  .png()
  .toFile('public/icon.png');

await sharp('public/logo.webp')
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('Done');
