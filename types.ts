
export enum Platform {
    Instagram = 'Instagram',
    Twitter = 'Twitter',
    Facebook = 'Facebook',
    LinkedIn = 'LinkedIn',
    TikTok = 'TikTok',
    YouTube = 'YouTube',
}

export type Theme = 'light' | 'dark' | 'bw';

export interface Metric {
    title: string;
    value: string;
    change: string;
    changeType: 'increase' | 'decrease';
}

export interface ChartDataPoint {
    name: string;
    value: number;
}

export interface Post {
    id: number;
    image: string;
    caption: string;
    likes: number;
    comments: number;
}

export interface DemographicsData {
    name: string;
    value: number;
}

export interface PlatformData {
    metrics: Metric[];
    followerGrowth: ChartDataPoint[];
    growthChartTitle: string;
    engagementByType: ChartDataPoint[];
    topPosts: Post[];
    audienceDemographics: DemographicsData[];
}

export interface UserActivity {
    id: number;
    action: string;
    timestamp: string;
    ipAddress: string;
}

export interface UserProfile {
    name: string;
    role: string;
    email: string;
    recentActivity: UserActivity[];
}

// A simplified placeholder for Firebase's User object
export interface FirebaseUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    isGuest?: boolean;
}