import { Platform, PlatformData } from './types';

export const platformIcons: Record<Platform, string> = {
    [Platform.Instagram]: 'https://raw.githubusercontent.com/tandpfun/skill-icons/65d131d61633538f61286a8b3353597d341d3b38/icons/Instagram.svg',
    [Platform.Twitter]: 'https://raw.githubusercontent.com/tandpfun/skill-icons/65d131d61633538f61286a8b3353597d341d3b38/icons/Twitter.svg',
    [Platform.Facebook]: 'https://raw.githubusercontent.com/tandpfun/skill-icons/65d131d61633538f61286a8b3353597d341d3b38/icons/Facebook.svg',
};

export const MOCK_DATA: Record<Platform, PlatformData> = {
    [Platform.Instagram]: {
        metrics: [
            { title: 'Followers', value: '125,6k', change: '+12.5%', changeType: 'increase' },
            { title: 'Engagement Rate', value: '2.57%', change: '-0.2%', changeType: 'decrease' },
            { title: 'Impressions', value: '1.2M', change: '+8.3%', changeType: 'increase' },
            { title: 'Reach', value: '850k', change: '+5.1%', changeType: 'increase' },
        ],
        followerGrowth: [
            { name: 'Jan', value: 80000 },
            { name: 'Feb', value: 95000 },
            { name: 'Mar', value: 105000 },
            { name: 'Apr', value: 110000 },
            { name: 'May', value: 118000 },
            { name: 'Jun', value: 125600 },
        ],
        engagementByType: [
            { name: 'Likes', value: 75000 },
            { name: 'Comments', value: 12000 },
            { name: 'Shares', value: 8000 },
            { name: 'Saves', value: 15000 },
        ],
        topPosts: [
            { id: 1, image: 'https://picsum.photos/seed/insta1/200/200', caption: 'Exploring the mountainside. What a view!', likes: 12500, comments: 342 },
            { id: 2, image: 'https://picsum.photos/seed/insta2/200/200', caption: 'New recipe alert! Check out my stories for more.', likes: 9800, comments: 210 },
            { id: 3, image: 'https://picsum.photos/seed/insta3/200/200', caption: 'City lights and late night vibes.', likes: 8500, comments: 180 },
        ],
        audienceDemographics: [
            { name: '18-24', value: 35 },
            { name: '25-34', value: 45 },
            { name: '35-44', value: 15 },
            { name: '45+', value: 5 },
        ],
    },
    [Platform.Twitter]: {
        metrics: [
            { title: 'Followers', value: '82,3k', change: '+8.1%', changeType: 'increase' },
            { title: 'Engagement Rate', value: '1.82%', change: '+0.1%', changeType: 'increase' },
            { title: 'Impressions', value: '2.5M', change: '+15.2%', changeType: 'increase' },
            { title: 'Profile Visits', value: '45k', change: '+3.4%', changeType: 'increase' },
        ],
        followerGrowth: [
            { name: 'Jan', value: 65000 },
            { name: 'Feb', value: 68000 },
            { name: 'Mar', value: 72000 },
            { name: 'Apr', value: 75000 },
            { name: 'May', value: 79000 },
            { name: 'Jun', value: 82300 },
        ],
        engagementByType: [
            { name: 'Likes', value: 45000 },
            { name: 'Retweets', value: 22000 },
            { name: 'Replies', value: 6000 },
            { name: 'Clicks', value: 18000 },
        ],
        topPosts: [
            { id: 1, image: 'https://picsum.photos/seed/tweet1/200/200', caption: 'Breaking down the latest trends in tech. A thread... 🧵', likes: 2300, comments: 150 },
            { id: 2, image: 'https://picsum.photos/seed/tweet2/200/200', caption: 'Quick poll: What feature should we build next?', likes: 1800, comments: 540 },
            { id: 3, image: 'https://picsum.photos/seed/tweet3/200/200', caption: 'Just launched our new update! So excited to share it with you all.', likes: 1500, comments: 95 },
        ],
        audienceDemographics: [
            { name: '18-24', value: 25 },
            { name: '25-34', value: 50 },
            { name: '35-44', value: 20 },
            { name: '45+', value: 5 },
        ],
    },
    [Platform.Facebook]: {
        metrics: [
            { title: 'Page Likes', value: '210,4k', change: '+5.2%', changeType: 'increase' },
            { title: 'Post Reach', value: '950k', change: '-2.1%', changeType: 'decrease' },
            { title: 'Engagement', value: '88k', change: '+1.8%', changeType: 'increase' },
            { title: 'Video Views', value: '3.1M', change: '+22.5%', changeType: 'increase' },
        ],
        followerGrowth: [
            { name: 'Jan', value: 180000 },
            { name: 'Feb', value: 185000 },
            { name: 'Mar', value: 192000 },
            { name: 'Apr', value: 199000 },
            { name: 'May', value: 205000 },
            { name: 'Jun', value: 210400 },
        ],
        engagementByType: [
            { name: 'Likes', value: 40000 },
            { name: 'Comments', value: 9000 },
            { name: 'Shares', value: 15000 },
            { name: 'Clicks', value: 24000 },
        ],
        topPosts: [
            { id: 1, image: 'https://picsum.photos/seed/fb1/200/200', caption: 'Our community event was a huge success! Thanks to everyone who came out.', likes: 5400, comments: 450 },
            { id: 2, image: 'https://picsum.photos/seed/fb2/200/200', caption: 'Go behind the scenes with our team in this new video feature!', likes: 4100, comments: 230 },
            { id: 3, image: 'https://picsum.photos/seed/fb3/200/200', caption: 'Weekly Q&A happening this Friday. Post your questions below!', likes: 3200, comments: 890 },
        ],
        audienceDemographics: [
            { name: '18-24', value: 20 },
            { name: '25-34', value: 35 },
            { name: '35-44', value: 25 },
            { name: '45+', value: 20 },
        ],
    },
};