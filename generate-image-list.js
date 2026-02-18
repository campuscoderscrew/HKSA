import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, 'public', 'gallery', 'egg-waffle-gbm');

// Read all files in the directory
const files = fs.readdirSync(galleryDir);

// Filter for image files and create the array
const imageArray = files
  .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
  .map(file => `/gallery/egg-waffle-gbm/${file}`);

// Output the array
console.log('const imageArray = [');
imageArray.forEach((img, i) => {
  console.log(`  '${img}'${i < imageArray.length - 1 ? ',' : ''}`);
});
console.log('];');

console.log(`\n// Total images: ${imageArray.length}`);