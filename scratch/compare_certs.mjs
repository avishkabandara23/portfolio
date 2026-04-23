import fs from 'node:fs';
import path from 'node:path';

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, fileList);
    } else {
      fileList.push(name);
    }
  }
  return fileList;
}

const srcDir = 'src/certifications';
const pubDir = 'public/certifications';

if (fs.existsSync(srcDir)) {
    const srcFiles = getFiles(srcDir).map(f => path.relative(srcDir, f));
    const pubFiles = fs.existsSync(pubDir) ? getFiles(pubDir).map(f => path.relative(pubDir, f)) : [];

    const onlyInSrc = srcFiles.filter(f => !pubFiles.includes(f));
    const onlyInPub = pubFiles.filter(f => !srcFiles.includes(f));

    console.log('Only in src:', onlyInSrc.length);
    if (onlyInSrc.length > 0) console.log(onlyInSrc.slice(0, 5));
    console.log('Only in pub:', onlyInPub.length);
    if (onlyInPub.length > 0) console.log(onlyInPub.slice(0, 5));
} else {
    console.log('src/certifications does not exist');
}
