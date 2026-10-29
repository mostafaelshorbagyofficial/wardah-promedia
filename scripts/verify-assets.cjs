const fs = require('fs');
const path = require('path');

const publicDir = 'D:/mhare3/pro/Wardah/public';
const requiredAssets = [
  'assets/logo/promedia-logo.png',
  'assets/logo/wardah-logo.png',
  'assets/promo/promedia-promo.mp4',
  'assets/clients/five-roosters-logo.jpg',
  'assets/clients/mawlay-logo.jpg',
  'assets/clients/omar-effendi-logo.jpg',
  'assets/clients/el-prince-logo.jpg',
  'assets/influencers/el-zuzzat.jpg',
  'assets/influencers/amr-el-hady.jpg',
  'assets/influencers/chef-mohamed-salah.jpg',
  'assets/influencers/el-exlance.jpg',
  'assets/influencers/nesma-khedr.jpg',
  'assets/influencers/shaimaa-masoud.jpeg',
  'assets/influencers/mahmoud-zizo.jpg',
  'assets/influencers/maya.jpg'
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
