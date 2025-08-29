
import React from 'react';
import { Platform, PlatformData } from '../types';
import Header from '../components/Header';
import AudienceDemographics from '../components/AudienceDemographics';

interface AudienceProps {
    platformData: PlatformData;
    selectedPlatform: Platform;
    onPlatformChange: (platform: Platform) => void;
}

const Audience: React.FC<AudienceProps> = ({ platformData, selectedPlatform, onPlatformChange }) => {
    return (
        <div className="p-6">
            <Header title="Audience Insights" selectedPlatform={selectedPlatform} onPlatformChange={onPlatformChange} />
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                 <div className="lg:col-span-1">
                    <AudienceDemographics data={platformData.audienceDemographics} />
                </div>
            </div>
        </div>
    );
};

export default Audience;
