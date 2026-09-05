import React from 'react';
import { defaultLocations } from '../data/mockData';

export default function OccupancyChart({ data }) {
    const levels = data || defaultLocations[0].occupancyLevels;
    const size = 62;
    const strokeWidth = 5;
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="glass-panel card-flex">
            <div className="panel-title">
                Occupancy by Parking Level
                <span className="sub-text">Sub-Deck Telemetry</span>
            </div>
            <div className="occupancy-rings">
                {levels.map((lvl, index) => {
                    const strokeDashoffset = circumference - (lvl.percentage / 100) * circumference;
                    return (
                        <div key={index} className="occupancy-item">
                            <div className="circular-gauge-wrap">
                                <svg width={size} height={size} className="circular-gauge-svg">
                                    <circle
                                        stroke="rgba(255, 255, 255, 0.08)"
                                        fill="transparent"
                                        strokeWidth={strokeWidth}
                                        r={radius}
                                        cx={center}
                                        cy={center}
                                    />
                                    <circle
                                        stroke={lvl.color}
                                        fill="transparent"
                                        strokeWidth={strokeWidth}
                                        strokeDasharray={`${circumference} ${circumference}`}
                                        style={{ strokeDashoffset }}
                                        strokeLinecap="round"
                                        r={radius}
                                        cx={center}
                                        cy={center}
                                        className="gauge-circle-progress"
                                    />
                                </svg>
                                <div className="circular-gauge-val" style={{ color: lvl.color }}>
                                    {lvl.percentage}%
                                </div>
                            </div>
                            <span className="occupancy-lvl-name">{lvl.name}</span>
                            <span className="occupancy-lvl-sub">{lvl.slots}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}