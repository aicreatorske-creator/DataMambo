
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Cell } from 'recharts';
import { ChartDataPoint } from '../types';

interface ChartCardProps {
    title: string;
    data: ChartDataPoint[];
    chartType: 'line' | 'bar';
    yAxisLabel?: string;
}

const COLORS = ['#6366F1', '#8B5CF6', '#10B981', '#EF4444', '#F59E0B'];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-surface/80 backdrop-blur-sm p-2 border border-gray-600 rounded-lg shadow-lg">
                <p className="label text-on-surface-secondary">{`${label}`}</p>
                <p className="intro text-on-surface">{`${payload[0].name} : ${payload[0].value.toLocaleString()}`}</p>
            </div>
        );
    }
    return null;
};


const ChartCard: React.FC<ChartCardProps> = ({ title, data, chartType, yAxisLabel }) => {
    return (
        <div className="bg-surface p-6 rounded-xl shadow-lg h-full">
            <h3 className="text-xl font-bold text-on-surface mb-4">{title}</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    {chartType === 'line' ? (
                        <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--color-on-surface) / 0.2)" />
                            <XAxis dataKey="name" stroke="rgb(var(--color-on-surface-secondary))" />
                            <YAxis stroke="rgb(var(--color-on-surface-secondary))" />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgb(var(--color-primary))', strokeWidth: 1, strokeDasharray: '3 3' }} />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="rgb(var(--color-primary))" strokeWidth={2} activeDot={{ r: 8 }} name={yAxisLabel || "Value"} dot={{ stroke: 'rgb(var(--color-primary))', strokeWidth: 1, r: 4}} />
                        </LineChart>
                    ) : (
                        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--color-on-surface) / 0.2)" />
                            <XAxis dataKey="name" stroke="rgb(var(--color-on-surface-secondary))" />
                            <YAxis stroke="rgb(var(--color-on-surface-secondary))" />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgb(var(--color-on-surface) / 0.1)' }} />
                            <Bar dataKey="value" name="Engagement">
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ChartCard;
