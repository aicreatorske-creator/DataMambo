import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { DemographicsData } from '../types';

interface AudienceDemographicsProps {
    data: DemographicsData[];
}

const COLORS = ['#6366F1', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-surface p-2 border border-gray-600 rounded-lg shadow-lg">
                <p className="label text-on-surface">{`${payload[0].name} : ${payload[0].value}%`}</p>
            </div>
        );
    }
    return null;
};

const AudienceDemographics: React.FC<AudienceDemographicsProps> = ({ data }) => {
    return (
        <div className="bg-surface p-6 rounded-xl shadow-lg h-full">
            <h3 className="text-xl font-bold text-on-surface mb-4">Audience Demographics</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
                                const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                                const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                                return (
                                    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                                        {`${(percent * 100).toFixed(0)}%`}
                                    </text>
                                );
                            }}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AudienceDemographics;