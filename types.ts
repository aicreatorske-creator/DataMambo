
export enum Platform {
    Instagram = 'Instagram',
    Twitter = 'Twitter',
    Facebook = 'Facebook',
}

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
    engagementByType: ChartDataPoint[];
    topPosts: Post[];
    audienceDemographics: DemographicsData[];
}
