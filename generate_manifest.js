const fs = require('fs');
const path = require('path');

const picDir = path.join(__dirname, 'pictograms');
const manifest = {};

const words = fs.readdirSync(picDir).filter(f =>
  fs.statSync(path.join(picDir, f)).isDirectory()
);

for (const word of words) {
  const wordDir = path.join(picDir, word);
  const pngs = fs.readdirSync(wordDir)
    .filter(f => f.endsWith('.png'))
    .map(f => f.replace('.png', ''));
  if (pngs.length > 0) {
    manifest[word] = pngs;
  }
}

const outPath = path.join(picDir, 'manifest.json');
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2));
console.log(`Manifest written: ${Object.keys(manifest).length} words, ${Object.values(manifest).flat().length} images`);
