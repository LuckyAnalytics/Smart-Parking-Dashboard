import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

export default function KPICard({ title, value, badge, color, trend }) {
    return (
        <div className="glass-panel kpi-card">
            <div className="kpi-content">
                <span className="kpi-title">{title}</span>
                <div className="kpi-value-container">
                    <span className="kpi-value" style={{ color: color }}>{value}</span>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span className="kpi-badge">{badge}</span>
                <div className="kpi-chart">
                    <LineChart width={70} height={32} data={trend} margin={{ top: 4, right: 2, bottom: 0, left: 2 }}>
                        <Line type="monotone" dataKey="val" stroke={color} strokeWidth={2} dot={false} isAnimationActive={false} />
                    </LineChart>
                </div>
            </div>
        </div>
    );
}