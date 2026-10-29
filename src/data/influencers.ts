import { CreatorCandidate } from '../types';

// ============================================================================
// 0. PRIORITY CREATOR — EL ZUZZAT
// ============================================================================
export const PRIORITY_CREATOR: CreatorCandidate = {
  id: 'el-zuzzat',
  nameAr: 'الزوزات — El Zuzzat',
  nameEn: 'El Zuzzat',
  handle: '@elzuzzat',
  tier: 'priority',
  platform: 'instagram',
  primaryLink: 'https://www.instagram.com/elzuzzat/',
  secondaryLink: 'https://www.facebook.com/elzuzzat/?_rdc=1&_rdr#',
  secondaryPlatform: 'facebook',
  roleAr: 'صناع محتوى تجارب طعام وضيافة عائلية',
  roleEn: 'Food Experience & Family Dining Creators',
  categoryAr: 'تجارب مطاعم وأكلات عائلية بأسلوب تلقائي تفاعلي محبب',
  categoryEn: 'Spontaneous food reviews, dining vlogs & family atmosphere',
  image: '/assets/influencers/el-zuzzat.jpg',
  isPriority: true,
  followers: 'مرشح رئيسي معتمد',
  isFollowerVerified: true,
  combinedAudience: 'حسابات رسمية معتمدة',
  combinedAudienceNoteAr: 'حسابات رسمية معتمدة دون أرقام معلنة افتراضية',
  combinedAudienceNoteEn: 'Verified official social destinations without unverified estimates',
  platforms: [
    {
      platform: 'instagram',
      url: 'https://www.instagram.com/elzuzzat/',
      count: 'حساب رسمي',
      isConfirmed: true
    },
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/elzuzzat/?_rdc=1&_rdr#',
      count: 'حساب رسمي',
      isConfirmed: true
    }
  ],
  tags: ['Featured Creator', 'Top Priority', 'Food Storytelling', 'High Engagement'],
  notesAr: 'مرشح ذو أولوية للحملة الافتتاحية نظراً للشعبية الكبيرة وأسلوب السرد التفاعلي التلقائي في تجارب الطعام.',
  notesEn: 'Top priority creator candidate for opening wave due to strong food storytelling and audience engagement.'
};

// ============================================================================
// 1. FEATURED FOOD INFLUENCERS (EXACTLY FOUR IN SPECIFIED ORDER)
// ============================================================================
export const FEATURED_FOOD_INFLUENCERS: CreatorCandidate[] = [
  // 01. El Zuzzat | الزوزات
  PRIORITY_CREATOR,

  // 02. Amr El Hady | عمرو الهادي
  {
    id: 'amr-el-hady',
    nameAr: 'عمرو الهادي',
    nameEn: 'Amr El Hady',
    handle: '@amrelhady__',
    tier: 'mega',
    platform: 'facebook',
    primaryLink: 'https://www.facebook.com/share/1DS9K4Ycfa/',
    secondaryLink: 'https://www.instagram.com/amrelhady__/',
    secondaryPlatform: 'instagram',
    roleAr: 'Food Blogger • مدون طعام',
    roleEn: 'Food Blogger & Dining Outings',
    categoryAr: 'مدون طعام متخصص في تقييم المطاعم وجولات التذوق وتجارب الخروج المميزة',
    categoryEn: 'Food Blogger specialized in restaurant tasting tours & dining reviews',
    image: '/assets/influencers/amr-el-hady.jpg',
    combinedAudience: '~855K+',
    combinedAudienceNoteAr: 'حوالي 855 ألف متابع معتمد على فيسبوك (المنصات الأخرى قيد التحديث)',
    combinedAudienceNoteEn: 'Approx. 855K verified Facebook audience (other platforms pending audit)',
    platforms: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/share/1DS9K4Ycfa/',
        count: '~855K',
        isConfirmed: true
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/amrelhady__/',
        count: 'حساب رسمي',
        isConfirmed: true
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@amrelhady_',
        count: 'حساب رسمي',
        isConfirmed: true
      },
      {
        platform: 'youtube',
        url: 'https://www.youtube.com/@amrelhadyy',
        count: 'حساب رسمي',
        isConfirmed: true
      }
    ],
    tags: ['Food Blogger', '~855K Facebook', 'Tasting Tours', 'Verified Identity']
  },

  // 03. Chef Mohamed Salah | الشيف محمد صلاح
  {
    id: 'chef-mohamed-salah',
    nameAr: 'الشيف محمد صلاح',
    nameEn: 'Chef Mohamed Salah',
    handle: '@m.sa_l_ah',
    tier: 'mega',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/m.sa_l_ah/',
    secondaryLink: 'https://www.facebook.com/thebloggerchef/?locale=ar_AR',
    secondaryPlatform: 'facebook',
    roleAr: 'Chef & Food Creator • ملاك اللحمة',
    roleEn: 'Chef & Food Creator — Malak El Lahma',
    categoryAr: 'شيف وصانع محتوى طعام متخصص في فنون اللحوم والطهي وتذوق الأطباق التوقيعية',
    categoryEn: 'Chef & Food Creator specialized in signature meats, culinary arts & dish styling',
    image: '/assets/influencers/chef-mohamed-salah.jpg',
    combinedAudience: '~297K+',
    combinedAudienceNoteAr: 'حوالي 297 ألف متابع معتمد على إنستجرام (المنصات الأخرى قيد التحديث)',
    combinedAudienceNoteEn: 'Approx. 297K verified Instagram audience (other platforms pending audit)',
    platforms: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/m.sa_l_ah/',
        count: '~297K',
        isConfirmed: true
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/thebloggerchef/?locale=ar_AR',
        count: 'حساب رسمي',
        isConfirmed: true
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@mohamedsalahofficial1',
        count: 'حساب رسمي',
        isConfirmed: true
      }
    ],
    tags: ['Chef & Creator', '~297K Instagram', 'Malak El Lahma', 'Meat & Culinary']
  },

  // 04. El Exlance | الإكسلانس
  {
    id: 'el-exlance',
    nameAr: 'الإكسلانس',
    nameEn: 'El Exlance',
    handle: '@elakelans',
    tier: 'mega',
    platform: 'facebook',
    primaryLink: 'https://www.facebook.com/ELAkelans/',
    secondaryLink: 'https://www.instagram.com/elakelans/?hl=ar',
    secondaryPlatform: 'instagram',
    roleAr: 'Food Reviews & Tours • جولات طعام وتقييم مطاعم',
    roleEn: 'Food Reviews & Popular Dining Tours',
    categoryAr: 'جولات طعام وتقييم مطاعم وتغطيات حية للأطباق والوجبات السريعة والشعبية',
    categoryEn: 'Food tours, restaurant reviews and high-reach viral food tastings',
    image: '/assets/influencers/el-exlance.jpg',
    combinedAudience: '3.878M',
    combinedAudienceNoteAr: 'إجمالي جمهور تقريبي عبر المنصات الثلاث، وليس أفراداً فريدين أو وصولاً مضموناً للحملة',
    combinedAudienceNoteEn: 'Approximate combined audience across these three platforms, not unique people or guaranteed campaign reach',
    platforms: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/ELAkelans/',
        count: '~2.7M',
        isConfirmed: true
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@akelans',
        count: '~750K',
        isConfirmed: true
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/elakelans/?hl=ar',
        count: '~428K',
        isConfirmed: true
      }
    ],
    tags: ['Mega Reach', '3.878M Combined', 'Food Tours', 'High Viral Presence']
  }
];

// Backwards-compatible aliases
export const MEGA_INFLUENCERS_TOP4 = FEATURED_FOOD_INFLUENCERS;
export const MEGA_CREATORS = FEATURED_FOOD_INFLUENCERS;

// ============================================================================
// 2. MINI INFLUENCERS (EXACTLY THREE IN SPECIFIED ORDER)
// ============================================================================
export const MINI_INFLUENCERS_TOP3: CreatorCandidate[] = [
  // 01. Nesma Khedr | نسمة خضر
  {
    id: 'nesma-khedr',
    nameAr: 'نسمة خضر',
    nameEn: 'Nesma Khedr',
    handle: '@nesma_khedr_',
    tier: 'mini',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/nesma_khedr_/?hl=ar',
    followers: '544K',
    isFollowerVerified: true,
    image: '/assets/influencers/nesma-khedr.jpg',
    roleAr: 'Culinary Recipes & Dining • فنون الطهي وتجارب الطعام',
    roleEn: 'Culinary Recipes & Dining Experiences',
    categoryAr: 'فنون الطهي وتجارب الطعام المميزة وتنسيق الأطباق والضيافة الراقية',
    categoryEn: 'Culinary recipes, dining experiences and refined hospitality aesthetics',
    combinedAudience: '544K',
    combinedAudienceNoteAr: '544 ألف متابع على إنستجرام',
    combinedAudienceNoteEn: '544K Instagram followers',
    platforms: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/nesma_khedr_/?hl=ar',
        count: '544K',
        isConfirmed: true
      }
    ],
    tags: ['Culinary Arts', '544K Followers', 'Food Styling', 'High Affinity']
  },

  // 02. Shaimaa & Masoud | شيماء ومسعود
  {
    id: 'shaimaa-masoud',
    nameAr: 'شيماء ومسعود',
    nameEn: 'Shaimaa & Masoud',
    handle: '@shimaaandmasoud',
    tier: 'mini',
    platform: 'tiktok',
    primaryLink: 'https://www.tiktok.com/@shimaaandmasoud',
    followers: '~1M',
    isFollowerVerified: true,
    image: '/assets/influencers/shaimaa-masoud.jpeg',
    roleAr: 'Family Dining Duo • ثنائي فلوجات طعام وأجواء عائلية',
    roleEn: 'Family Dining Duo & Couple Food Vlogs',
    categoryAr: 'فلوجات وتجارب مطاعم وأجواء عائلية عفوية تحقق مشاهدات مليونية',
    categoryEn: 'Dining vlogs, family restaurant visits and high-engagement short-form videos',
    combinedAudience: '~1M',
    combinedAudienceNoteAr: 'حوالي 1 مليون متابع على تيك توك',
    combinedAudienceNoteEn: '~1M TikTok followers',
    platforms: [
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@shimaaandmasoud',
        count: '~1M',
        isConfirmed: true
      }
    ],
    tags: ['TikTok Star', '~1M Followers', 'Couple Dining', 'Viral Vlogs']
  },

  // 03. Mahmoud Zizo | محمود زيزو
  {
    id: 'mahmoud-zizo',
    nameAr: 'محمود زيزو',
    nameEn: 'Mahmoud Zizo',
    handle: '@zizo.1907',
    tier: 'mini',
    platform: 'facebook',
    primaryLink: 'https://www.facebook.com/profile.php?id=100076735943229',
    secondaryLink: 'https://www.tiktok.com/@zizo.1907',
    secondaryPlatform: 'tiktok',
    followers: '~800K',
    isFollowerVerified: true,
    image: '/assets/influencers/mahmoud-zizo.jpg',
    roleAr: 'Food Reviews & Outings • استكشاف أكلات وتجارب مطاعم',
    roleEn: 'Food Reviews & Outing Exploration',
    categoryAr: 'استكشاف أكلات سريعة وتجارب مقاهٍ ومطاعم شبابية بجولات مصورة',
    categoryEn: 'Food outings, quick bites and youthful restaurant explorations',
    combinedAudience: '~800K',
    combinedAudienceNoteAr: 'إجمالي تقريبي ~800 ألف (فيسبوك ~400K + تيك توك ~400K مع تداخل محتمل)',
    combinedAudienceNoteEn: 'Approx. 800K combined (~400K Facebook + ~400K TikTok, potentially overlapping)',
    platforms: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/profile.php?id=100076735943229',
        count: '~400K',
        isConfirmed: true
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@zizo.1907',
        count: '~400K',
        isConfirmed: true
      }
    ],
    tags: ['Food Explorer', '~800K Combined', 'Facebook & TikTok', 'Youth Dining']
  }
];

// Backwards-compatible aliases
export const MINI_INFLUENCERS_TOP4 = MINI_INFLUENCERS_TOP3;
export const MINI_CREATORS = MINI_INFLUENCERS_TOP3;

// ============================================================================
// 3. UGC CREATORS (UP TO 10 REAL CREATORS FROM PROJECT DATA)
// ============================================================================
export const UGC_CREATORS: CreatorCandidate[] = [
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
    categoryAr: 'أسلوب حياة وتغذية وتجارب طعام اجتماعية',
    categoryEn: 'Lifestyle, Nutrition & Food Choices',
    tags: ['Facebook', 'Dining Out', '382K']
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
    categoryAr: 'محتوى نسائي وعائلي وتجارب مقاهٍ وتجمعات',
    categoryEn: 'Family & Female Social Experiences',
    tags: ['Instagram', 'Family Dining', 'Atmosphere']
  },
  {
    id: 'nadine-alaa',
    nameAr: 'نادين علاء — Cuisine de Nadine',
    nameEn: 'Nadine Alaa (Cuisine de Nadine)',
    handle: '@cuisine_de_nadine_',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/cuisine_de_nadine_?igsh=ZWtqb3BwaW9zaXU5',
    followers: '99K',
    categoryAr: 'فنون الطهي والضيافة والتنسيق الجمالي للأطباق',
    categoryEn: 'Culinary Recipes & Fine Hospitality Styling',
    tags: ['Instagram', 'Culinary Craft', '99K']
  },
  {
    id: 'amrs-kitchen',
    nameAr: 'مطبخ عمرو — Inside Amr\'s Kitchen',
    nameEn: 'Amr\'s Kitchen (Amr Selim)',
    handle: '@insideamrskitchen',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/insideamrskitchen?igsh=MWg0a3lrcjdzdnM1',
    followers: '99K',
    categoryAr: 'فنون الطهي وتذوق الأطباق المميزة وجماليات التقديم',
    categoryEn: 'Gourmet Cooking & Artistic Plating Focus',
    tags: ['Instagram', 'Taste Testing', '99K']
  },
  {
    id: 'cairo-couple-craves',
    nameAr: 'كايرو كابل كريفز — ميرنا ومحمد',
    nameEn: 'Cairo Couple Craves (Mirna & Mohamed)',
    handle: '@cairocouplecraves_',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/cairocouplecraves_?igsh=NzV1cTI4eHgxM28=',
    followers: '32K',
    categoryAr: 'أجواء عشاء ثنائية وتجارب كافيهات ومطاعم هادئة',
    categoryEn: 'Couples Dining & Romantic Aesthetic Spots',
    tags: ['Instagram', 'Couples Dining', '32K']
  },
  {
    id: 'dr-maya-szeizoun',
    nameAr: 'د. مايا سيزون',
    nameEn: 'Dr. Maya Szeizoun',
    handle: '@dr.mayaszeizoun',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/dr.mayaszeizoun/',
    image: '/assets/influencers/maya.jpg',
    categoryAr: 'نمط حياة راقٍ ووجهات سياحية وتجارب ضيافة متميزة',
    categoryEn: 'Premium Lifestyle & Elegant Venue Experiences',
    tags: ['Instagram', 'Verified Photo', 'Lifestyle']
  },
  {
    id: 'food-hunters',
    nameAr: 'فود هانترز — Food Hunters',
    nameEn: 'Food Hunters Egypt',
    handle: '@foodhuntersegy',
    tier: 'ugc',
    platform: 'instagram',
    primaryLink: 'https://www.instagram.com/foodhuntersegy?igsh=bTByNW0zNXg3Z3Jk',
    categoryAr: 'جولات استكشاف المطاعم الجديدة والأطباق العصرية',
    categoryEn: 'New restaurant discoveries & trending food reviews',
    tags: ['Instagram', 'Food Discovery', 'Trending']
  }
];

export const CREATORS_LIST = [
  ...FEATURED_FOOD_INFLUENCERS,
  ...MINI_INFLUENCERS_TOP3,
  ...UGC_CREATORS
];
