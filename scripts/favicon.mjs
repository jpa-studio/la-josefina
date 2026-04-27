import sharp from 'sharp';

// Generate a crisp 32x32 favicon with higher quality
await sharp('public/logo.webp')
  .resize(64, 64, { kernel: sharp.kernel.lanczos3 })
  .resize(32, 32, { kernel: sharp.kernel.lanczos3 })
  .png({ quality: 100, compressionLevel: 9 })
  .toFile('public/icon.png');

// Also generate a 192x192 for better quality on high-res screens
await sharp('public/logo.webp')
  .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
  .png({ quality: 100 })
  .toFile('public/icon-192.png');

await sharp('public/logo.webp')
  .resize(180, 180, { kernel: sharp.kernel.lanczos3 })
  .png({ quality: 100 })
  .toFile('public/apple-touch-icon.png');

console.log('Done');
