export type Language = 'ar' | 'en';

export interface PortfolioItem {
  id: string;
  nameAr: string;
  nameEn: string;
  handle: string;
  categoryAr: string;
  categoryEn: string;
  locationAr: string;
  locationEn: string;
  followers: string;
  posts: string;
  bioAr: string;
  bioEn: string;
  image: string;
  link: string;
  linkType: 'instagram' | 'facebook' | 'website';
  highlightsAr: string[];
  highlightsEn: string[];
  isVerified?: boolean;
}

export type CreatorTier = 'priority' | 'mega' | 'mini' | 'ugc' | 'micro_ugc';
export type CreatorPlatform = 'instagram' | 'facebook' | 'tiktok';

export interface CreatorCandidate {
  id: string;
  nameAr: string;
  nameEn: string;
  handle: string;
  tier: CreatorTier;
  platform: CreatorPlatform;
  secondaryLink?: string;
  secondaryPlatform?: CreatorPlatform;
  primaryLink: string;
  followers?: string; // Clearly labeled as user-provided reference or verified
  isFollowerVerified?: boolean;
  categoryAr: string;
  categoryEn: string;
  tags: string[];
  isPriority?: boolean;
  notesAr?: string;
  notesEn?: string;
}

export interface NavItem {
  id: string;
  labelAr: string;
  labelEn: string;
}
