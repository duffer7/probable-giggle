import * as fs from 'fs';
import * as path from 'path';

async function copyDirectory(src: string, dest: string) {
  // Check if the source directory exists.
  if (!fs.existsSync(src)) {
    throw new Error(`Directory does not exist: ${src}`);
  }

  // Create the destination directory if it does not exist.
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read the contents of the directory.
  const entries = fs.readdirSync(src);

  // Run through all the elements.
  for (const entry of entries) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);

    // Check if iterable is directory or file.
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      // Copy directories recursively.
      await copyDirectory(srcPath, destPath);
    } else {
      // Copy files.
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Example
const sourceDir = 'source';
const destinationDir = 'destination';

copyDirectory(sourceDir, destinationDir)
  .then(() => console.log('Copy completed!'))
  .catch((err) => console.error('Error during copy:', err));
