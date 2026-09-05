import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { parkingUsageOverTime } from '../data/mockData';

export default function ParkingUsageChart() {
    return (
        <div className="glass-panel card-flex">
            <div className="panel-title">Parking Usage over Time</div>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={parkingUsageOverTime}>
                        <defs>
                            <linearGradient id="colorV1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00f2fe" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#00f2fe" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} />
                        <YAxis hide />
                        <Tooltip contentStyle={{ backgroundColor: '#061221', borderColor: '#00f2fe' }} />
                        <ReferenceLine x="13:00" stroke="#00f2fe" strokeDasharray="3 3" label={{ value: '13:00', fill: '#00f2fe', fontSize: 10 }} />
                        <Area type="monotone" dataKey="v2" stroke="#4facfe" fillOpacity={0} strokeWidth={1.5} />
                        <Area type="monotone" dataKey="v1" stroke="#00f2fe" fillOpacity={1} fill="url(#colorV1)" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}