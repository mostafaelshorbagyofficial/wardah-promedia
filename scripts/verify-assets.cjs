const fs = require('fs');
const path = require('path');

const publicDir = 'D:/mhare3/pro/Wardah/public';
const requiredAssets = [
  'assets/logo/promedia-logo.png',
  'assets/logo/wardah-logo.png',
  'assets/promo/promedia-promo.mp4',
  'assets/portfolio/omar-effendi-seafood.jpeg',
  'assets/portfolio/asmak-el-prince.jpeg',
  'assets/portfolio/il-campo.jpeg',
  'assets/portfolio/5-roosters.jpeg',
  'assets/portfolio/blueview-cafe.jpeg',
  'assets/portfolio/oliver-cafe.jpeg',
  'assets/portfolio/folk-restaurant.jpeg',
  'assets/portfolio/mawlay-restaurant.jpeg',
  'assets/portfolio/costa-blanca.jpeg',
  'assets/portfolio/puka-restaurant.jpeg',
  'assets/influencers/el-zuzzat.jpg'
];

let allExist = true;
console.log('--- Checking Public & Dist Assets ---');
for (const rel of requiredAssets) {
  const pPath = path.join(publicDir, rel);
  const dPath = path.join('D:/mhare3/pro/Wardah/dist', rel);
  const pExists = fs.existsSync(pPath);
  const dExists = fs.existsSync(dPath);
  if (!pExists || !dExists) {
    console.error(`MISSING: ${rel} (public: ${pExists}, dist: ${dExists})`);
    allExist = false;
  } else {
    const size = fs.statSync(pPath).size;
    console.log(`✓ ${rel} (${size} bytes)`);
  }
}

if (allExist) {
  console.log('✅ ALL REQUIRED LOCAL ASSETS EXIST AND ARE IN PLACE IN BOTH PUBLIC AND DIST.');
} else {
  console.error('❌ SOME ASSETS ARE MISSING.');
  process.exit(1);
}
