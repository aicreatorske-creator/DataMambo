import React from 'react';
import { Metric } from '../types';

const ArrowUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>;
const ArrowDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>;

const MetricCard: React.FC<Metric> = ({ title, value, change, changeType }) => {
    const isIncrease = changeType === 'increase';
    const changeColor = isIncrease ? 'text-success' : 'text-danger';

    return (
        <div className="bg-surface p-6 rounded-xl shadow-lg">
            <h3 className="text-on-surface-secondary text-md font-medium">{title}</h3>
            <div className="flex justify-between items-end mt-2">
                <p className="text-3xl font-bold text-on-surface">{value}</p>
                <div className={`flex items-center space-x-1 font-semibold ${changeColor}`}>
                    {isIncrease ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    <span>{change}</span>
                </div>
            </div>
        </div>
    );
};

export default MetricCard;