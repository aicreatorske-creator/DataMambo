
import React from 'react';
import { Platform, PlatformData } from '../types';
import Header from '../components/Header';
import ChartCard from '../components/ChartCard';

interface AnalyticsProps {
    platformData: PlatformData;
    selectedPlatform: Platform;
    onPlatformChange: (platform: Platform) => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ platformData, selectedPlatform, onPlatformChange }) => {
    return (
        <div className="p-6">
            <Header title="Analytics" selectedPlatform={selectedPlatform} onPlatformChange={onPlatformChange} />
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2">
                    <ChartCard title="Follower Growth" data={platformData.followerGrowth} chartType="line" />
                </div>
                <div>
                    <ChartCard title="Engagement by Type" data={platformData.engagementByType} chartType="bar" />
                </div>
            </div>
        </div>
    );
};

export default Analytics;
