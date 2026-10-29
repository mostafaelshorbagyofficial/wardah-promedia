import { CreatorCandidate } from '../types';

// ============================================================================
// 0. PRIORITY CANDIDATE — EL ZUZZAT (TOP OF INFLUENCER SHOWCASE)
// ============================================================================
export const PRIORITY_CREATOR: CreatorCandidate = {
  id: 'el-zuzzat',
  nameAr: 'الزوذات — El Zuzzat',
  nameEn: 'El Zuzzat (Priority Candidate)',
  handle: '@elzuzzat',
  tier: 'priority',
  platform: 'instagram',
  primaryLink: 'https://www.instagram.com/elzuzzat/',
  secondaryLink: 'https://www.facebook.com/elzuzzat/?_rdc=1&_rdr#',
  secondaryPlatform: 'facebook',
  followers: 'مرشح أولوية أولى',
  isFollowerVerified: true,
  categoryAr: 'صناع محتوى تجارب طعام وضيافة عائلية — أولوية ترشيح أولى',
  categoryEn: 'Food Experience & Restaurant Reviews — Top Priority Candidate',
  tags: ['Priority Placement', 'High Engagement', 'Restaurant Experience', 'Viral Reach'],
  image: '/assets/influencers/el-zuzzat.jpg',
  isPriority: true,
  notesAr: 'مرشح ذو أولوية للحملة الافتتاحية نظراً للشعبية الكبيرة وأسلوب السرد التفاعلي التلقائي',
  notesEn: 'Top priority creator candidate for opening wave due to strong food storytelling and audience engagement'
};

// ============================================================================
// 1. MEGA INFLUENCERS — EXACTLY FOUR (IN SPECIFIED ORDER)
// ============================================================================
export const MEGA_INFLUENCERS_TOP4: CreatorCandidate[] = [
  {
    id: 'adham-singer',
    nameAr: 'أدهم سنجر',
    nameEn: 'Adham Singer',
    handle: '@adham_singer_',
    tier: 'mega',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@adham_singer_',
    secondaryLink: 'https://www.instagram.com/adham_singer/',
    secondaryPlatform: 'instagram',
    roleAr: 'Food Blogger • مدون طعام وتجارب ترفيهية',
    roleEn: 'Food Blogger & Entertainment Outings',
    categoryAr: 'تجارب ترفيهية ومطاعم وأماكن شبابية ذات تفاعل هائل',
    categoryEn: 'Entertainment, Cafes & Youth Dining Vlogs',
    image: '/assets/influencers/adham-singer.jpg',
    combinedAudience: '5.3M+',
    combinedAudienceNoteAr: 'إجمالي الجمهور التقريبي عبر 4 منصات',
    combinedAudienceNoteEn: 'Approx. combined audience across 4 platforms',
    platforms: [
      { platform: 'tiktok', url: 'https://www.tiktok.com/@adham_singer_', count: '~2.14M', isConfirmed: true },
      { platform: 'facebook', url: 'https://www.facebook.com/iamadhamsinger', count: '~2.5M', isConfirmed: true },
      { platform: 'instagram', url: 'https://www.instagram.com/adham_singer/', count: '500K+', isConfirmed: true },
      { platform: 'youtube', url: 'https://www.youtube.com/@adham_singer_', count: '~196K', isConfirmed: true }
    ],
    tags: ['Food Blogger', '5.3M+ Combined', 'Mega Reach', 'Youth & Family']
  },
  {
    id: 'mohamed-ahmed',
    nameAr: 'محمد أحمد',
    nameEn: 'Mohamed Ahmed',
    handle: 'MohamedAhmed1214',
    tier: 'mega',
    platform: 'facebook',
    primaryLink: 'https://www.facebook.com/MohamedAhmed1214',
    secondaryLink: 'https://www.instagram.com/mohamed.ahmed14.official/',
    secondaryPlatform: 'instagram',
    roleAr: 'Food Reviews & Outings • مراجعات طعام وجولات خروج',
    roleEn: 'Food Reviews & Outings',
    categoryAr: 'مراجعات طعام وأماكن خروج وجولات تجربة في القاهرة والإسكندرية',
    categoryEn: 'Food Reviews & Dining Outings',
    image: '/assets/influencers/mohamed-ahmed.jpg',
    combinedAudience: '1.37M',
    combinedAudienceNoteAr: 'إجمالي الجمهور التقريبي عبر منصتين',
    combinedAudienceNoteEn: 'Approx. combined audience across 2 platforms',
    platforms: [
      { platform: 'facebook', url: 'https://www.facebook.com/MohamedAhmed1214', count: '~1.1M', isConfirmed: true },
      { platform: 'instagram', url: 'https://www.instagram.com/mohamed.ahmed14.official/', count: '~270K', isConfirmed: true }
    ],
    tags: ['Food Reviewer', '1.37M Combined', 'High Trust', 'Dining Tours']
  },
  {
    id: 'hany-food',
    nameAr: 'هاني فود — Hany Samiir',
    nameEn: 'Hany Food (Hany Samiir)',
    handle: '@hanyfood',
    tier: 'mega',
    platform: 'facebook',
    primaryLink: 'https://www.facebook.com/hanysamiirr',
    secondaryLink: 'https://www.tiktok.com/@hanyfood',
    secondaryPlatform: 'tiktok',
    roleAr: 'Food Tours & Tastings • جولات مطاعم وتقييم وجبات',
    roleEn: 'Food Tours & Restaurant Reviews',
    categoryAr: 'جولات مطاعم وتقييم وجبات وتغطيات واسعة لأشهى الأطباق',
    categoryEn: 'Food Tours & In-Depth Restaurant Reviews',
    image: '/assets/influencers/hany-food.jpg',
    combinedAudience: '7.28M',
    combinedAudienceNoteAr: 'إجمالي الجمهور التقريبي عبر 4 منصات',
    combinedAudienceNoteEn: 'Approx. combined audience across 4 platforms',
    platforms: [
      { platform: 'facebook', url: 'https://www.facebook.com/hanysamiirr', count: '~4.2M', isConfirmed: true },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@hanyfood', count: '~1.6M', isConfirmed: true },
      { platform: 'youtube', url: 'https://www.youtube.com/@hanyfood1', count: '~1.12M', isConfirmed: true },
      { platform: 'instagram', url: 'https://www.instagram.com/hany__food', count: '~360K', isConfirmed: true }
    ],
    tags: ['Mega Reach', '7.28M Combined', 'Food Tours', 'Viral Videos']
  },
  {
    id: 'hesham-taha',
    nameAr: 'هشام محمد طه — د. هشام طه',
    nameEn: 'Hesham M. Taha (Dr. Hesham Taha)',
    handle: '@drheshamtaha',
    tier: 'mega',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@drheshamtaha',
    secondaryLink: 'https://www.instagram.com/dr_hesham_m_taha/',
    secondaryPlatform: 'instagram',
    roleAr: 'Short-Form Viral Food • تجارب سريعة وأسلوب حياة راقٍ',
    roleEn: 'Short-Form Viral Food & Lifestyle',
    categoryAr: 'فيديوهات قصيرة سريعة الانتشار وتجارب أماكن مميزة وراقية',
    categoryEn: 'Short-Form Viral Video & Dining Exploration',
    image: '/assets/influencers/hesham-taha.jpg',
    combinedAudience: '3.86M+',
    combinedAudienceNoteAr: 'إجمالي الجمهور المعلوم (باستثناء فيسبوك لعدم تأكيده)',
    combinedAudienceNoteEn: 'Known combined audience (excl. unconfirmed Facebook)',
    platforms: [
      { platform: 'tiktok', url: 'https://www.tiktok.com/@drheshamtaha', count: '~1.9M', isConfirmed: true },
      { platform: 'youtube', url: 'https://www.youtube.com/@heshamtaha', count: '~1.76M', isConfirmed: true },
      { platform: 'instagram', url: 'https://www.instagram.com/dr_hesham_m_taha/', count: '~198K', isConfirmed: true },
      { platform: 'facebook', url: 'https://www.facebook.com/HeshamTahaOfficial', count: 'غير مؤكد', isConfirmed: false }
    ],
    tags: ['Short-Form Viral', '3.86M+ Known', 'TikTok Leader', 'Aesthetic Outings']
  }
];

// Alias for backwards compatibility
export const MEGA_CREATORS = MEGA_INFLUENCERS_TOP4;

// ============================================================================
// 2. MINI INFLUENCERS — EXACTLY FOUR (HIGH-AFFINITY DINING & LIFESTYLE)
// ============================================================================
export const MINI_INFLUENCERS_TOP4: CreatorCandidate[] = [
  {
    id: 'nadine-alaa',
    nameAr: 'نادين علاء — Cuisine de Nadine',
    nameEn: 'Nadine Alaa (Cuisine de Nadine)',
    handle: '@cuisine_de_nadine_',
    tier: 'mini',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/cuisine_de_nadine_?igsh=ZWtqb3BwaW9zaXU5',
    followers: '99K',
    isFollowerVerified: true,
    roleAr: 'Culinary Recipes & Hospitality • فنون الطهي والضيافة',
    roleEn: 'Culinary Recipes & Hospitality',
    categoryAr: 'فنون الطهي والضيافة والتنسيق الجمالي الراقي للأطباق والديكور',
    categoryEn: 'Culinary Recipes & Fine Hospitality Styling',
    platforms: [
      { platform: 'instagram', url: 'https://www.instagram.com/cuisine_de_nadine_?igsh=ZWtqb3BwaW9zaXU5', count: '99K', isConfirmed: true }
    ],
    tags: ['Culinary', 'Food Styling', 'Refined Hospitality', '99K']
  },
  {
    id: 'amrs-kitchen',
    nameAr: 'مطبخ عمرو — Inside Amr\'s Kitchen',
    nameEn: 'Amr\'s Kitchen (Amr Selim)',
    handle: '@insideamrskitchen',
    tier: 'mini',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/insideamrskitchen?igsh=MWg0a3lrcjdzdnM1',
    followers: '99K',
    isFollowerVerified: true,
    roleAr: 'Gourmet Cooking & Plating • فنون الطهي وتذوق الأطباق',
    roleEn: 'Gourmet Cooking & Plating Focus',
    categoryAr: 'فنون الطهي وتذوق الأطباق المميزة وجماليات التقديم للمطاعم',
    categoryEn: 'Gourmet Cooking & Artistic Plating Focus',
    platforms: [
      { platform: 'instagram', url: 'https://www.instagram.com/insideamrskitchen?igsh=MWg0a3lrcjdzdnM1', count: '99K', isConfirmed: true }
    ],
    tags: ['Kitchen Craft', 'Food Styling', 'Taste Testing', '99K']
  },
  {
    id: 'cairo-couple-craves',
    nameAr: 'كايرو كابل كريفز — ميرنا ومحمد',
    nameEn: 'Cairo Couple Craves (Mirna & Mohamed)',
    handle: '@cairocouplecraves_',
    tier: 'mini',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/cairocouplecraves_?igsh=NzV1cTI4eHgxM28=',
    followers: '32K',
    isFollowerVerified: true,
    roleAr: 'Couples Dining & Date Nights • تجارب عشاء ثنائية',
    roleEn: 'Couples Dining & Atmospheric Spots',
    categoryAr: 'أجواء عشاء ثنائية وأماكن رومانسية وتجارب كافيهات ومطاعم هادئة',
    categoryEn: 'Couples Dining & Romantic Aesthetic Spots',
    platforms: [
      { platform: 'instagram', url: 'https://www.instagram.com/cairocouplecraves_?igsh=NzV1cTI4eHgxM28=', count: '32K', isConfirmed: true }
    ],
    tags: ['Couples Dining', 'Atmospheric Spots', 'Date Nights', '32K']
  },
  {
    id: 'dr-maya-szeizoun',
    nameAr: 'د. مايا سيزون',
    nameEn: 'Dr. Maya Szeizoun',
    handle: '@dr.mayaszeizoun',
    tier: 'mini',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/dr.mayaszeizoun/',
    followers: 'مرجع معتمد',
    isFollowerVerified: true,
    image: '/assets/influencers/maya.jpg',
    roleAr: 'Premium Lifestyle & Spaces • نمط حياة راقٍ ووجهات ضيافة',
    roleEn: 'Premium Lifestyle & Dining Spaces',
    categoryAr: 'نمط حياة راقٍ ووجهات سياحية وتجارب ضيافة متميزة تناسب زوار الخليج',
    categoryEn: 'Premium Lifestyle & Elegant Venue Experiences',
    platforms: [
      { platform: 'instagram', url: 'https://www.instagram.com/dr.mayaszeizoun/', count: 'Verified Profile', isConfirmed: true }
    ],
    tags: ['Premium Lifestyle', 'Fine Hospitality', 'GCC Friendly', 'Verified Photo']
  }
];

export const MINI_CREATORS = MINI_INFLUENCERS_TOP4;

// ============================================================================
// 3. UGC CREATORS & EXTENDED ROSTER (LINKS-FIRST DIRECTORY)
// ============================================================================
export const UGC_CREATORS: CreatorCandidate[] = [
  // Additional high-reach & local discovery candidates
  {
    id: 'akl-w-b7la2a',
    nameAr: 'أكل وبحلقة',
    nameEn: 'Akl w B7la2a',
    handle: '@aklwba7la2a_',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/aklwba7la2a_?igsh=MWMxeGZkNTBlMDByOQ==',
    followers: '261K',
    categoryAr: 'استكشاف أكلات وتجارب مطاعم جديدة وفلوجات طعام',
    categoryEn: 'Food Exploration & Restaurant Vlogs',
    tags: ['Instagram', 'Foodie Vlogs', '261K']
  },
  {
    id: 'karim-effat',
    nameAr: 'كريم عفت — KE Coach',
    nameEn: 'Karim Effat (KEcoach)',
    handle: 'KEcoach',
    tier: 'ugc',
    platform: 'facebook',
    primaryLink: 'https://www.facebook.com/KEcoach?mibextid=LQQJ4d',
    followers: '382K',
    categoryAr: 'أسلوب حياة وصحة وتغذية وتجارب طعام اجتماعية',
    categoryEn: 'Lifestyle, Nutrition & Food Choices',
    tags: ['Facebook', 'Dining Out', '382K']
  },
  {
    id: 'el-exlance',
    nameAr: 'الأكسلانس — El Akelans',
    nameEn: 'El Exlance (El Akelans)',
    handle: 'ELAkelans',
    tier: 'ugc',
    platform: 'facebook',
    primaryLink: 'https://www.facebook.com/ELAkelans?mibextid=ZbWKwL',
    categoryAr: 'أكلات شعبية وتجارب طعام مصرية وتغطيات مطاعم حية',
    categoryEn: 'Authentic Egyptian Food Tours',
    tags: ['Facebook', 'Street Food & Dining']
  },
  {
    id: 'amr-ezzat',
    nameAr: 'عمرو عزت',
    nameEn: 'Amr Ezzat',
    handle: 'AmrEzzat111',
    tier: 'ugc',
    platform: 'facebook',
    primaryLink: 'https://www.facebook.com/AmrEzzat111?mibextid=LQQJ4d',
    categoryAr: 'تقييم مطاعم وزيارات ميدانية وتجارب ضيافة',
    categoryEn: 'Restaurant Tasting & Outing Reviews',
    tags: ['Facebook', 'Hospitality Reviews']
  },
  {
    id: 'noha-shukry',
    nameAr: 'نهى شكري',
    nameEn: 'Nuha Shukry',
    handle: '@nuha_shukry',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/nuha_shukry?igsh=MXBuczR3NTNpdzdj',
    categoryAr: 'أسلوب حياة وأماكن راقية وضيافة عائلية',
    categoryEn: 'Lifestyle & Refined Dining',
    tags: ['Instagram', 'Lifestyle', 'Hospitality']
  },
  {
    id: 'marwa-nagiib',
    nameAr: 'مروة نجيب',
    nameEn: 'Marwa Nagiib',
    handle: '@marwa_najiib',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/marwa_najiib?igsh=enJzbXpiemx3aWF3',
    categoryAr: 'محتوى نسائي وعائلي وتجارب مقاهي وتجمعات',
    categoryEn: 'Family & Female Social Experiences',
    tags: ['Instagram', 'Family Dining', 'Atmosphere']
  },
  {
    id: 'lolla-el-zamzamy',
    nameAr: 'لولا الزمزمي',
    nameEn: 'Lolla El Zamzamy',
    handle: '@lollaelzamzamy',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@lollaelzamzamy?_t=ZS-8utWL5aMDdn&_r=1',
    categoryAr: 'يوميات وفيديوهات تجارب تفاعلية وخروجات ترفيهية',
    categoryEn: 'TikTok Vlogs & Food Experiences',
    tags: ['TikTok', 'Short-form', 'Trendy']
  },
  {
    id: 'shimaa-and-masoud',
    nameAr: 'شيماء ومسعود',
    nameEn: 'Shimaa and Masoud',
    handle: '@shimaaandmasoud',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@shimaaandmasoud',
    categoryAr: 'ثنائيات ومقاطع خفيفة وأماكن ترفيه وخروجات كافيهات',
    categoryEn: 'Couple Food Vlogs & Entertaining Spots',
    tags: ['TikTok', 'Couples', 'Viral']
  },
  {
    id: 'heba-fayed',
    nameAr: 'هبة فايد',
    nameEn: 'Heba Fayed',
    handle: '@heba.fayedd',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/heba.fayedd?igsh=cnIwNDNod2RrcnJ6',
    categoryAr: 'محتوى جمال وتنسيق وجلسات مقاهي هادئة',
    categoryEn: 'Aesthetics, Coffee Spots & Leisure',
    tags: ['Instagram', 'Coffee Culture', 'Visuals']
  },

  // 32 UGC Dining Experience Creators
  {
    id: 'foodies-rs',
    nameAr: 'رنا — Foodies RS',
    nameEn: 'Rana (Foodies RS)',
    handle: '@foodiesrs',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/foodiesrs?igsh=MXR0Y3RmeWM4NXFhMA',
    categoryAr: 'مراجعات مطاعم وتفاصيل أطباق وتصوير زوايا حية',
    categoryEn: 'Micro Foodie Reviews & Dish Spotlights',
    tags: ['Instagram', 'Foodie', 'UGC Experience']
  },
  {
    id: 'hoba-reviews',
    nameAr: 'هوبا — Hoba Reviews',
    nameEn: 'Hoba (Hoba Reviews)',
    handle: '@hoba.reviews',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/hoba.reviews/',
    categoryAr: 'تقييم مطاعم وتجارب شخصية عفوية ومراجعة قائمة الطعام',
    categoryEn: 'Authentic Restaurant Reviews',
    tags: ['Instagram', 'Reviews', 'UGC Candidate']
  },
  {
    id: 'foodie-dentists',
    nameAr: 'نور — Foodie Dentists',
    nameEn: 'Noor (Foodie Dentists)',
    handle: '@foodiedentists_noor',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/foodiedentists_noor/',
    categoryAr: 'استكشاف أماكن وتصوير أطعمة احترافي ولمسات تقديم',
    categoryEn: 'Food Exploration & Cafe Photography',
    tags: ['Instagram', 'Cafe Focus', 'Photography']
  },
  {
    id: 'basmala',
    nameAr: 'بسملة',
    nameEn: 'Basmala',
    handle: '@basmmlaa',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@basmmlaa?_r=1&_t=ZS-96LxAH4UOhN',
    categoryAr: 'فيديوهات قصيرة لأماكن التجمع والحلويات والمشروبات',
    categoryEn: 'TikTok Trends, Desserts & Outings',
    tags: ['TikTok', 'UGC Candidate', 'Trends']
  },
  {
    id: 'salma-foodcai4',
    nameAr: 'سلمى — Foodcai4',
    nameEn: 'Salma (Foodcai4)',
    handle: '@foodcai4',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@foodcai4?_r=1&_t=ZS-96LwVffjcyf',
    categoryAr: 'أماكن خروج القاهرة ومقاهي جديدة وتجارب شبابية',
    categoryEn: 'Cairo Outings & Fresh Cafe Spots',
    tags: ['TikTok', 'Cairo Vlogs', 'Gen Z']
  },
  {
    id: 'habiba-foods-by-b0',
    nameAr: 'حبيبة — Foods by B0',
    nameEn: 'Habiba (Foods by B0)',
    handle: '@foodsbyb0',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@foodsbyb0?_r=1&_t=ZS-96LxFBBe7dp',
    categoryAr: 'تجارب طعام ومشروبات منعشة وريلز تصويرية حية',
    categoryEn: 'Foodie Tastings & Beverage Reels',
    tags: ['TikTok', 'Beverages', 'UGC']
  },
  {
    id: 'lilian-gamal',
    nameAr: 'ليليان جمال',
    nameEn: 'Lilian Gamal',
    handle: '@lilianegamal',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@lilianegamal',
    categoryAr: 'يوميات وفيديوهات خروجات شبابية وأجواء حيوية',
    categoryEn: 'Outings Vlogs & Youth Social Spots',
    tags: ['TikTok', 'Youth Outing', 'UGC']
  },
  {
    id: 'jouryyy',
    nameAr: 'جوري — Jouryyy',
    nameEn: 'Jouryyy (Jury El Midany)',
    handle: '@juryelmidany',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@juryelmidany',
    categoryAr: 'مقاطع خفيفة واستكشاف كافيهات وتغطيات عفوية',
    categoryEn: 'Cafe Discovery & Casual Reels',
    tags: ['TikTok', 'Discovery', 'UGC']
  },
  {
    id: 'sama-reviews',
    nameAr: 'سما ريفيوز',
    nameEn: 'Sama Reviews',
    handle: '@reviewsbysamasemo',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@reviewsbysamasemo',
    categoryAr: 'مراجعات مفصلة وتجربة أطباق مميزة وجودة الخدمة',
    categoryEn: 'Detailed Tastings & Item Reviews',
    tags: ['TikTok', 'Food Review', 'UGC']
  },
  {
    id: 'radwa-khaled',
    nameAr: 'رضوى خالد',
    nameEn: 'Radwa Khaled',
    handle: '@radwakhaliidd',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@radwakhaliidd',
    categoryAr: 'فيديوهات أجواء وموسيقى وتجمعات اجتماعية راقية',
    categoryEn: 'Atmospheric Video & Aesthetic Vibe',
    tags: ['TikTok', 'Atmosphere', 'UGC']
  },
  {
    id: 'suethereals',
    nameAr: 'Suethereals',
    nameEn: 'Suethereals',
    handle: '@suethereals',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@suethereals',
    categoryAr: 'محتوى تجارب ومشروبات ومقاهي ذات طابع خاص',
    categoryEn: 'Lifestyle & Creative Outings',
    tags: ['TikTok', 'Cafe Culture', 'UGC']
  },
  {
    id: 'amr-jeep',
    nameAr: 'عمرو',
    nameEn: 'Amr',
    handle: '@aammrr_jeeppccii',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/aammrr_jeeppccii?rpxt=bmpmdDJkaDdrOGQ=',
    categoryAr: 'تجارب شبابية وأماكن غير تقليدية وخروجات جماعية',
    categoryEn: 'Youth Hangouts & Adventure Spots',
    tags: ['Instagram', 'Casual Outing']
  },
  {
    id: 'ser-el-5alta',
    nameAr: 'سر الخلطة',
    nameEn: 'Ser El 5alta',
    handle: '@ser.el5alta',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@ser.el5alta',
    categoryAr: 'أسرار الوصفات ومكونات المطاعم وتفاصيل النكهات',
    categoryEn: 'Secret Recipes & Flavor Breakdowns',
    tags: ['TikTok', 'Culinary Secrets', 'Food Focus']
  },
  {
    id: 'toka-salem',
    nameAr: 'تقى سالم',
    nameEn: 'Toka Salem',
    handle: '@tokasalem3',
    tier: 'ugc',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@tokasalem3',
    categoryAr: 'خروجات بنات ومشروبات وأجواء مرحة',
    categoryEn: 'Girls Outings & Social Cafe Moments',
    tags: ['TikTok', 'Girls Hangouts', 'UGC']
  },
  {
    id: 'youmnas-world',
    nameAr: 'عالم يمنى — Yomna\'s World',
    nameEn: 'Yomna\'s World',
    handle: '@yomnasworld_',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/yomnasworld_?igsh=anZ3azg5dm90amNp',
    categoryAr: 'عائلات، جلسات دافئة وريلز تصويرية أنيقة',
    categoryEn: 'Cozy Family Spots & Aesthetic Reels',
    tags: ['Instagram', 'Family Focus', 'Cozy']
  },
  {
    id: 'taste-busters',
    nameAr: 'ياسمين الشرقاوي — Taste Busters',
    nameEn: 'Yassmen El Sharkawy (Taste Busters)',
    handle: '@tastebusterss',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/tastebusterss?igsh=Y3NjbGlkYjA3M3Rx',
    categoryAr: 'تقييم أطباق المطاعم ومذاقات جديدة ونقد بناء',
    categoryEn: 'Food Tasting & Creative Palates',
    tags: ['Instagram', 'Taste Testing', 'Foodie']
  },
  {
    id: 'ahmed-el-bably',
    nameAr: 'أحمد البابلي — مودك في فودك',
    nameEn: 'Ahmed El Bably (Moodk Fe Foodk)',
    handle: '@moodk.fe.foodk',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/moodk.fe.foodk?igsh=MThlbXN5d3c0bjc5',
    categoryAr: 'ربط المزاج بالأطباق والحلويات والمشروبات وتجارب كافيهات',
    categoryEn: 'Comfort Food, Desserts & Mood Pairings',
    tags: ['Instagram', 'Comfort Food', 'UGC']
  },
  {
    id: 'double-the-trouble',
    nameAr: 'سمر ومحمد — Double the Trouble',
    nameEn: 'Samar & Mohamed (Double the Trouble)',
    handle: '@doublethetrouble_sm',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/doublethetrouble_sm?igsh=MWwwcHpkdnZ2Y3U1Yg%3D%3D&utm_source=qr',
    categoryAr: 'ثنائيات وتجارب أطباق مشتركة وخروجات مميزة',
    categoryEn: 'Couples Food Vlogs & Dining Dates',
    tags: ['Instagram', 'Couples', 'UGC Candidate']
  },
  {
    id: 'lef-w-do2',
    nameAr: 'لف ودوق — Lef w Do2',
    nameEn: 'Lef w Do2',
    handle: '@lefwdo2',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/lefwdo2?igsh=MW40aml6N28xNTdzZA==',
    categoryAr: 'جولات تذوق وتجول بالمطاعم وسرد سريع',
    categoryEn: 'Street & Restaurant Tasting Tours',
    tags: ['Instagram', 'Tasting Tour', 'UGC']
  },
  {
    id: 'foodwiez',
    nameAr: 'إنجي فوزي — Foodwiez',
    nameEn: 'Enjy Fawzy (Foodwiez)',
    handle: '@foodwiez',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/foodwiez?igsh=MXNsbzNtaDA2MmV2cw==',
    categoryAr: 'تصوير احترافي للأطباق والديكورات وجلسات الضيافة',
    categoryEn: 'Culinary Styling & Ambience Focus',
    tags: ['Instagram', 'Food Styling', 'Visual UGC']
  },
  {
    id: 'tokhy',
    nameAr: 'طوخي — Tokhy',
    nameEn: 'Tokhy',
    handle: '@tokhy.1',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/tokhy.1?igsh=MWoxOXlobWkyaHpweA==',
    categoryAr: 'سرد قصصي شبابي وخروجات عفوية ومراجعة مشروبات',
    categoryEn: 'Youth Stories & Hangout Spots',
    tags: ['Instagram', 'Youth', 'Casual']
  },
  {
    id: 'foodie-egy',
    nameAr: 'أحمد — Foodie Egy',
    nameEn: 'Ahmed (Foodie Egy)',
    handle: '@foodiee.egy',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/foodiee.egy?igsh=MXR4Y2diazlpcGp5cw==',
    categoryAr: 'استكشاف الأطباق الصاعدة والمقاهي الفريدة والجلسات الراقية',
    categoryEn: 'Rising Dishes & Unique Spots',
    tags: ['Instagram', 'Foodie Guide', 'UGC']
  },
  {
    id: 'karimovic-reviews',
    nameAr: 'كريم — Karimovic Reviews',
    nameEn: 'Kareem (Karimovic Reviews)',
    handle: '@karimovic.reviews',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/karimovic.reviews?igsh=MW1kYWpjM2VyOHBhcg==',
    categoryAr: 'تقييم موضوعي ومفصل لقوائم الطعام وتجربة التقديم',
    categoryEn: 'Objective & Menu Analysis',
    tags: ['Instagram', 'Menu Reviews', 'UGC']
  },
  {
    id: 'kabeka-eats',
    nameAr: 'مهاب درويش — Kabeka Eats',
    nameEn: 'Mohab Darwiesh (Kabeka Eats)',
    handle: '@kabeka.eats',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/kabeka.eats/',
    categoryAr: 'أكلات دسمة وتجارب وجبات مميزة وساندوتشات مبتكرة',
    categoryEn: 'Gourmet Bites & Rich Flavors',
    tags: ['Instagram', 'Comfort Food', 'UGC']
  },
  {
    id: 'aya-adel',
    nameAr: 'آية عادل',
    nameEn: 'Aya Adel',
    handle: '@ayaaadel___',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/ayaaadel___?igsh=bWF2eG15aXIycDMw',
    categoryAr: 'جلسات تصوير أنيقة وأجواء هادئة وتفاصيل الديكور',
    categoryEn: 'Elegant Photo Spots & Chill Vibes',
    tags: ['Instagram', 'Photo Corner Focus', 'UGC']
  },
  {
    id: 'esraa-sobhy',
    nameAr: 'إسراء صبحي',
    nameEn: 'Esraa Sobhy',
    handle: '@esraasobhhy',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/esraasobhhy?igsh=MTliMHR5MDJmbXFheA==',
    categoryAr: 'محتوى نسائي وجمال وتجارب قهوة وأماكن استرخاء',
    categoryEn: 'Women Lifestyle & Coffee Aesthetics',
    tags: ['Instagram', 'Coffee Lover', 'UGC']
  },
  {
    id: 'hungry-girl',
    nameAr: 'ميرنا — The Hungry Girl',
    nameEn: 'Mirna (The Hungry Girl)',
    handle: '@thehungrygirll',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/thehungrygirll?igsh=MWxremR3djlvc3RncA==',
    categoryAr: 'أطباق مبتكرة وحلويات ومطاعم جديدة وتجارب عشاء',
    categoryEn: 'Signature Treats & Desserts',
    tags: ['Instagram', 'Signature Dishes', 'UGC']
  },
  {
    id: 'stuffed-ayad',
    nameAr: 'عياد — Stuffed',
    nameEn: 'Ayad (Stuffed)',
    handle: '@stuffedddd.ayad',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/stuffedddd.ayad/',
    categoryAr: 'سندوتشات وأطباق محشوة وتجارب مبتكرة ووجبات سريعة',
    categoryEn: 'Sandwiches & Loaded Specialties',
    tags: ['Instagram', 'Bites & Sandwiches', 'UGC']
  },
  {
    id: 'engy-abdo',
    nameAr: 'إنجي عبده',
    nameEn: 'Enjy Abdo',
    handle: '@engyyabdo',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/engyyabdo?psln=a3o1c2lxejNtN3I0',
    categoryAr: 'أجواء عائلية وتنسيق طاولات وضيافة وأطباق تقليدية',
    categoryEn: 'Table Setup, Hospitality & Family Dining',
    tags: ['Instagram', 'Hospitality', 'UGC']
  },
  {
    id: 'day-with-well',
    nameAr: 'وليد علام — Day With Well',
    nameEn: 'Walid Allam (Day With Well)',
    handle: '@daywithwell',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/daywithwell?rpxt=MXgwbXgyMnI4Y2g3cg==',
    categoryAr: 'يوميات وفلوجات استكشاف أماكن حصرية ومقاهي ومطاعم',
    categoryEn: 'Vlog Adventures & Venue Spotlights',
    tags: ['Instagram', 'Venue Vlogs', 'UGC']
  },
  {
    id: 'mesh-reviewers',
    nameAr: 'مش ريفيورز — Mesh Reviewers',
    nameEn: 'Mesh Reviewers',
    handle: '@mesh.reviewers',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/mesh.reviewers?cplk=bXZpN3hqbGpjdmdl',
    categoryAr: 'تقييمات واقعية غير تقليدية وتجارب غير مدفوعة وصريحة',
    categoryEn: 'Unfiltered Impressions & Real Consumer View',
    tags: ['Instagram', 'Raw Feedback', 'Authentic UGC']
  },
  {
    id: 'mahmoud-zizo',
    nameAr: 'محمود زيزو',
    nameEn: 'Mahmoud Zizo',
    handle: '@mahmoudd.zizo',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/mahmoudd.zizo?rpxt=MTRuMWlyNmRseWhvdg==',
    categoryAr: 'مقاطع شبابية وتجمعات اجتماعية وخروجات ليلية',
    categoryEn: 'Social Gatherings & Youth Energy',
    tags: ['Instagram', 'Social Nights Focus', 'UGC']
  }
];

export const CREATORS_LIST: CreatorCandidate[] = [
  ...MEGA_INFLUENCERS_TOP4,
  ...MINI_INFLUENCERS_TOP4,
  ...UGC_CREATORS
];
