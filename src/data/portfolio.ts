export interface ClientBrand {
  id: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  logo: string;
  destinationUrl: string;
  platform: 'instagram' | 'facebook';
  statusNoteAr?: string;
  statusNoteEn?: string;
  highlightsAr: string[];
  highlightsEn: string[];
}

export const FB_CLIENTS: ClientBrand[] = [
  {
    id: 'five-roosters',
    nameAr: 'فايف روستر — 5 Roosters',
    nameEn: '5 Roosters Fried Chicken',
    categoryAr: 'سلاسل الفرايد تشيكن والوجبات السريعة',
    categoryEn: 'Fast Casual Fried Chicken Chain',
    logo: '/assets/clients/five-roosters-logo.jpg',
    destinationUrl: 'https://www.instagram.com/5roostersfriedchicken?srtk=dTczODVkbWNkM2ll',
    platform: 'instagram',
    highlightsAr: [
      'استراتيجية المحتوى البصري للأطباق المقرمشة',
      'إدارة حملات إعلانية مستهدفة للشباب والعائلات',
      'نمو متسارع للمتابعين والمبيعات المباشرة'
    ],
    highlightsEn: [
      'Visual content strategy for signature crispy meals',
      'High-conversion targeted social campaigns',
      'Rapid follower and direct delivery order growth'
    ]
  },
  {
    id: 'mawlay',
    nameAr: 'مطعم وكافيه مولاي — Mawlay',
    nameEn: 'Mawlay Lounge & Dining',
    categoryAr: 'مطاعم ولاونج ضيافة راقية',
    categoryEn: 'Fine Dining & Hospitality Lounge',
    logo: '/assets/clients/mawlay-logo.jpg',
    destinationUrl: 'https://www.facebook.com/share/1CoRa9zqY8/',
    platform: 'facebook',
    highlightsAr: [
      'صناعة هوية بصرية متميزة تعكس الفخامة',
      'تغطيات سينمائية للأجواء والجلسات المسائية',
      'استقطاب العائلات والزوار من مختلف المحافظات'
    ],
    highlightsEn: [
      'Refined visual identity reflecting hospitality elegance',
      'Cinematic evening atmosphere & dining showcases',
      'Engaging family dining and destination traffic'
    ]
  },
  {
    id: 'omar-effendi',
    nameAr: 'عمر أفندي للمأكولات البحرية',
    nameEn: 'Omar Effendi Seafood Restaurant',
    categoryAr: 'مأكولات بحرية طازجة وأسماك عائلية',
    categoryEn: 'Fresh Seafood & Family Dining',
    logo: '/assets/clients/omar-effendi-logo.jpg',
    destinationUrl: 'https://www.facebook.com/share/19YfRawSWe/',
    platform: 'facebook',
    highlightsAr: [
      'فيديوهات ريلز تجاوزت مئات آلاف المشاهدات',
      'تسويق مواسم الأسماك الطازجة وعروض الوجبات',
      'حضور قوي بفروع الإسكندرية والقاهرة'
    ],
    highlightsEn: [
      'Viral reels generating hundreds of thousands of views',
      'Seasonal catch marketing and signature platters',
      'Robust brand presence across Alexandria & Cairo'
    ]
  },
  {
    id: 'el-prince',
    nameAr: 'أسماك البرنس — El Prince',
    nameEn: 'Asmak El Prince Seafood',
    categoryAr: 'مطاعم أسماك ومأكولات بحرية بالإسكندرية',
    categoryEn: 'Authentic Alexandria Seafood Dining',
    logo: '/assets/clients/el-prince-logo.jpg',
    destinationUrl: 'https://www.facebook.com/share/185UXAaw19/',
    platform: 'facebook',
    highlightsAr: [
      'تسويق الطواجن والولائم البحرية التراثية',
      'صناعة محتوى رقمي تفاعلي عزز من شهرة البراند',
      'إدارة المجتمع الرقمي والتواصل المباشر مع الزبائن'
    ],
    highlightsEn: [
      'Heritage seafood tajines and feast promotions',
      'High-impact social engagement strengthening reputation',
      'Community management and direct customer touchpoints'
    ]
  },
  {
    id: 'costa-blanca',
    nameAr: 'كوستا بلانكا — Costa Bianca',
    nameEn: 'Costa Bianca Mediterranean Dining',
    categoryAr: 'مطاعم متوسطية وسهرات راقية بالشيخ زايد',
    categoryEn: 'Mediterranean Dining & Lounge',
    logo: '/assets/clients/costa-blanca-logo.jpg',
    destinationUrl: 'https://www.instagram.com/costablanca.eg/',
    platform: 'instagram',
    highlightsAr: [
      'سهرات عشاء متوسطية وأجواء راقية بالشيخ زايد',
      'إبراز فنون الطهي والتقديم الفندقي المتميز',
      'استقطاب العائلات ونخبة رواد المطاعم'
    ],
    highlightsEn: [
      'Atmospheric Mediterranean evening dining in Zayed',
      'Spotlight on chef craft and fine presentation',
      'Attracting discerning diners and social gatherings'
    ]
  },
  {
    id: 'puka',
    nameAr: 'بوكا — PUKA',
    nameEn: 'PUKA Coastal Lounge & Dining',
    categoryAr: 'مطاعم ساحلية وإطلالة بحرية بجليم باي',
    categoryEn: 'Coastal Dining & Mediterranean Lounge',
    logo: '/assets/clients/puka-logo.jpg',
    destinationUrl: 'https://www.instagram.com/puka_restaurant/',
    platform: 'instagram',
    highlightsAr: [
      'موقع ساحلي بانورامي على البحر بجليم باي',
      'تسويق قهوة الصباح وسهرات الغروب الهادئة',
      'محتوى تفاعلي عزز حضور المكان كوجهة أولى'
    ],
    highlightsEn: [
      'Panoramic coastal setting at Gleem Bay Alexandria',
      'Morning coffee & sunset social destination marketing',
      'Engaging visual content driving footfall and visits'
    ]
  },
  {
    id: 'folk',
    nameAr: 'مطعم فولك — Folk',
    nameEn: 'Folk Restaurant & Hospitality',
    categoryAr: 'مطاعم ومأكولات عالمية راقية',
    categoryEn: 'Artisan Dining & International Cuisine',
    logo: '/assets/clients/folk-logo.jpg',
    destinationUrl: 'https://www.instagram.com/folk.restaurant/',
    platform: 'instagram',
    highlightsAr: [
      'تصميم هوية بصرية ومحتوى يعكس الدفء والابتكار',
      'تسويق أطباق مبتكرة وتجارب تذوق عصرية',
      'تفاعل رقمي متنامٍ مع مجتمع عشاق الطعام'
    ],
    highlightsEn: [
      'Visual identity and storytelling conveying warmth',
      'Showcasing signature artisan culinary creations',
      'High social engagement with gastronomy enthusiasts'
    ]
  },
  {
    id: 'oliver',
    nameAr: 'أوليفر كافيه — Oliver Cafe & More',
    nameEn: 'Oliver Cafe & More',
    categoryAr: 'كافيهات ومشروبات مختصة وحلويات',
    categoryEn: 'Specialty Coffee & Artisan Cafe',
    logo: '/assets/clients/oliver-logo.jpg',
    destinationUrl: 'https://www.instagram.com/olivercafe.eg/',
    platform: 'instagram',
    highlightsAr: [
      'تسويق القهوة المختصة والمخبوزات الطازجة',
      'جلسات مريحة وتجارب صباحية ومسائية مميزة',
      'بناء مجتمع وفيّ للبراند وحملات ترويجية مستمرة'
    ],
    highlightsEn: [
      'Specialty coffee and freshly baked pastry promotions',
      'Cozy social atmosphere for morning and evening visits',
      'Growing loyal community and active promotional campaigns'
    ]
  }
];

// Retain legacy export for backward compatibility if imported elsewhere
export const PORTFOLIO_ITEMS = FB_CLIENTS;
