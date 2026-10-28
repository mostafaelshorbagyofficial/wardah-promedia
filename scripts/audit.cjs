const fs = require('fs');
const path = require('path');

let issues = 0;

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (
      line.includes('src="http') ||
      line.includes("src='http") ||
      line.includes('url(http') ||
      (line.includes('href="http') && line.includes('<link')) ||
      line.includes('@import url')
    ) {
      console.warn(`[EXTERNAL MEDIA DETECTED] ${filePath}:${i + 1} -> ${line.trim()}`);
      issues++;
    }
  });
}

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (/\.(html|css|js|ts|tsx)$/.test(entry.name)) {
      scanFile(full);
    }
  }
}

scanDir('D:/mhare3/pro/Wardah/src');
scanFile('D:/mhare3/pro/Wardah/index.html');
scanFile('D:/mhare3/pro/Wardah/dist/index.html');

if (issues === 0) {
  console.log('✅ AUDIT PASSED: ZERO external media URLs, remote assets, or CDN calls found in codebase.');
} else {
  console.error(`❌ AUDIT FAILED: ${issues} external media dependencies found.`);
  process.exit(1);
}
