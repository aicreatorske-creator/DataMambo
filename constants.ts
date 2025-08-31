
import { Platform, PlatformData } from './types';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, TwitterIcon, YouTubeIcon } from './components/PlatformIcons';
import React from 'react';

export const platformIcons: Record<Platform, React.FC<{ className?: string }>> = {
    [Platform.Instagram]: InstagramIcon,
    [Platform.Twitter]: TwitterIcon,
    [Platform.Facebook]: FacebookIcon,
    [Platform.LinkedIn]: LinkedInIcon,
    [Platform.TikTok]: TikTokIcon,
    [Platform.YouTube]: YouTubeIcon,
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
        growthChartTitle: 'Follower Growth',
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
        growthChartTitle: 'Follower Growth',
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
        growthChartTitle: 'Page Like Growth',
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
    [Platform.LinkedIn]: {
        metrics: [
            { title: 'Connections', value: '15,2k', change: '+4.1%', changeType: 'increase' },
            { title: 'Post Impressions', value: '88k', change: '+9.7%', changeType: 'increase' },
            { title: 'Engagement Rate', value: '3.15%', change: '+0.5%', changeType: 'increase' },
            { title: 'Profile Views', value: '2,1k', change: '+11.2%', changeType: 'increase' },
        ],
        followerGrowth: [
            { name: 'Jan', value: 12000 },
            { name: 'Feb', value: 12500 },
            { name: 'Mar', value: 13100 },
            { name: 'Apr', value: 13900 },
            { name: 'May', value: 14500 },
            { name: 'Jun', value: 15200 },
        ],
        growthChartTitle: 'Connection Growth',
        engagementByType: [
            { name: 'Likes', value: 8000 },
            { name: 'Comments', value: 2500 },
            { name: 'Reposts', value: 1200 },
            { name: 'Clicks', value: 4000 },
        ],
        topPosts: [
            { id: 1, image: 'https://picsum.photos/seed/li1/200/200', caption: 'Excited to share insights from my latest article on the future of AI in business. #AI #BusinessStrategy', likes: 850, comments: 112 },
            { id: 2, image: 'https://picsum.photos/seed/li2/200/200', caption: 'Celebrating a successful quarter with the team! Proud of what we\'ve accomplished together. #Teamwork #Success', likes: 620, comments: 85 },
            { id: 3, image: 'https://picsum.photos/seed/li3/200/200', caption: 'Networking is key. Great discussion today at the tech summit about scaling startups. #Networking #Startups', likes: 450, comments: 65 },
        ],
        audienceDemographics: [
            { name: '18-24', value: 15 },
            { name: '25-34', value: 55 },
            { name: '35-44', value: 25 },
            { name: '45+', value: 5 },
        ],
    },
    [Platform.TikTok]: {
        metrics: [
            { title: 'Followers', value: '2.1M', change: '+25.8%', changeType: 'increase' },
            { title: 'Video Views (30d)', value: '55.2M', change: '+30.1%', changeType: 'increase' },
            { title: 'Engagement Rate', value: '15.8%', change: '-1.1%', changeType: 'decrease' },
            { title: 'Likes (30d)', value: '8.2M', change: '+22.3%', changeType: 'increase' },
        ],
        followerGrowth: [
            { name: 'Jan', value: 800000 },
            { name: 'Feb', value: 1100000 },
            { name: 'Mar', value: 1400000 },
            { name: 'Apr', value: 1600000 },
            { name: 'May', value: 1900000 },
            { name: 'Jun', value: 2100000 },
        ],
        growthChartTitle: 'Follower Growth',
        engagementByType: [
            { name: 'Likes', value: 8200000 },
            { name: 'Comments', value: 550000 },
            { name: 'Shares', value: 1200000 },
            { name: 'Saves', value: 950000 },
        ],
        topPosts: [
            { id: 1, image: 'https://picsum.photos/seed/tt1/200/200', caption: 'This dance challenge was harder than it looks! 😂 #DanceChallenge #Trending', likes: 1200000, comments: 8500 },
            { id: 2, image: 'https://picsum.photos/seed/tt2/200/200', caption: 'Trying the viral feta pasta recipe! 10/10 recommend. #ViralRecipe #FoodTok', likes: 950000, comments: 5400 },
            { id: 3, image: 'https://picsum.photos/seed/tt3/200/200', caption: 'Life hack you NEED to know! Wait for it... #LifeHack #DIY', likes: 800000, comments: 4200 },
        ],
        audienceDemographics: [
            { name: '13-17', value: 30 },
            { name: '18-24', value: 50 },
            { name: '25-34', value: 15 },
            { name: '35+', value: 5 },
        ],
    },
    [Platform.YouTube]: {
        metrics: [
            { title: 'Subscribers', value: '525k', change: '+3.5%', changeType: 'increase' },
            { title: 'Watch Time (Hours)', value: '2.1M', change: '+11.8%', changeType: 'increase' },
            { title: 'Views (28d)', value: '10.5M', change: '+8.2%', changeType: 'increase' },
            { title: 'Est. Revenue', value: '$15.2k', change: '+14.1%', changeType: 'increase' },
        ],
        followerGrowth: [
            { name: 'Jan', value: 450000 },
            { name: 'Feb', value: 465000 },
            { name: 'Mar', value: 480000 },
            { name: 'Apr', value: 495000 },
            { name: 'May', value: 510000 },
            { name: 'Jun', value: 525000 },
        ],
        growthChartTitle: 'Subscriber Growth',
        engagementByType: [
            { name: 'Likes', value: 1100000 },
            { name: 'Comments', value: 150000 },
            { name: 'Shares', value: 80000 },
        ],
        topPosts: [
            { id: 1, image: 'https://picsum.photos/seed/yt1/200/200', caption: 'I Built a SMART MIRROR! (Full DIY Guide)', likes: 250000, comments: 12000 },
            { id: 2, image: 'https://picsum.photos/seed/yt2/200/200', caption: 'The Ultimate Desk Setup Tour 2024', likes: 180000, comments: 9500 },
            { id: 3, image: 'https://picsum.photos/seed/yt3/200/200', caption: 'React vs. Vue vs. Svelte: The 2024 Showdown', likes: 150000, comments: 22000 },
        ],
        audienceDemographics: [
            { name: '18-24', value: 30 },
            { name: '25-34', value: 40 },
            { name: '35-44', value: 20 },
            { name: '45+', value: 10 },
        ],
    },
};