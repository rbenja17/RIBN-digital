const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Fix path to point to root/public/projects, since this script runs from root
const publicDir = path.join(process.cwd(), 'public', 'projects');

async function convertImage(filename) {
  const inputPath = path.join(publicDir, filename);
  const outputPath = path.join(publicDir, filename.replace('.png', '.webp'));
  
  if (!fs.existsSync(inputPath)) {
    console.log(`File not found: ${inputPath}`);
    return;
  }

  const statsBefore = fs.statSync(inputPath);
  console.log(`\nProcessing ${filename}...`);
  console.log(`Original size: ${(statsBefore.size / (1024 * 1024)).toFixed(2)} MB`);

  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
      
    const statsAfter = fs.statSync(outputPath);
    console.log(`New size: ${(statsAfter.size / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Reduction: -${((1 - statsAfter.size/statsBefore.size) * 100).toFixed(1)}%`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
  }
}

async function run() {
  await convertImage('cecilia.png');
  await convertImage('vircassino.png');
}

run();
