import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { regionalAvailabilityData } from '../data/mockData';

export default function RegionalAvailability() {
    return (
        <div className="glass-panel card-flex">
            <div className="panel-title">Regional Space Availability</div>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regionalAvailabilityData} barGap={2}>
                        <XAxis dataKey="month" stroke="#64748b" fontSize={10} tickLine={false} />
                        <YAxis hide />
                        <Bar dataKey="total" fill="#00f2fe" radius={[2, 2, 0, 0]} />
                        <Bar dataKey="occupied" fill="#4facfe" radius={[2, 2, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}