import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { weeklyPerformanceData } from '../data/mockData';

export default function WeeklyPerformance() {
    return (
        <div className="glass-panel card-flex">
            <div className="panel-title">Weekly Performance Stats</div>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyPerformanceData}>
                        <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} />
                        <YAxis hide />
                        <Bar dataKey="s1" fill="#00d2ff" radius={[2, 2, 0, 0]} />
                        <Bar dataKey="s2" fill="#4facfe" radius={[2, 2, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}