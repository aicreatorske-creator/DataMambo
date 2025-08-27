
import React, { useState } from 'react';
import { Platform } from '../types';
import { MOCK_DATA } from '../constants';
import Header from './Header';
import MetricCard from './MetricCard';
import ChartCard from './ChartCard';
import TopPosts from './TopPosts';
import AudienceDemographics from './AudienceDemographics';
import AISuggestions from './AISuggestions';

const Dashboard: React.FC = () => {
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>(Platform.Instagram);

    const data = MOCK_DATA[selectedPlatform];
    const topPostTopic = data.topPosts.length > 0 ? data.topPosts[0].caption.substring(0, 50) + '...' : 'general topics';

    return (
        <div className="p-6">
            <Header selectedPlatform={selectedPlatform} onPlatformChange={setSelectedPlatform} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4">
                {data.metrics.map(metric => (
                    <MetricCard key={metric.title} {...metric} />
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2">
                    <ChartCard title="Follower Growth" data={data.followerGrowth} chartType="line" />
                </div>
                <div>
                    <ChartCard title="Engagement by Type" data={data.engagementByType} chartType="bar" />
                </div>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                 <div className="lg:col-span-1">
                    <AudienceDemographics data={data.audienceDemographics} />
                </div>
                <div className="lg:col-span-1">
                    <TopPosts posts={data.topPosts} />
                </div>
                <div className="lg:col-span-1">
                    <AISuggestions topic={topPostTopic} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
