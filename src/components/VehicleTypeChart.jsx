import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { vehicleTypeData as defaultData } from '../data/mockData';

export default function VehicleTypeChart({ data }) {
    const chartData = data || defaultData;
    return (
        <div className="glass-panel card-flex">
            <div className="panel-title">Usage by vehicle type</div>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={125} minHeight={125}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            innerRadius={28}
                            outerRadius={45}
                            paddingAngle={4}
                            dataKey="value"
                            isAnimationActive={false}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}