import React from 'react';
import { defaultLocations } from '../data/mockData';

export default function TrafficAvailability({ data }) {
    const legendData = data || defaultLocations[0].trafficLegendData;

    return (
        <div className="glass-panel card-flex">
            <div className="panel-title">
                Traffic & Availability
                <span className="sub-text">4WK Realtime</span>
            </div>
            <div className="traffic-container">
                <div className="radar-visual">
                    <div className="radar-sweep"></div>
                    <div className="radar-ring ring-1"></div>
                    <div className="radar-ring ring-2"></div>
                    <div className="radar-ring ring-3"></div>
                    <div className="radar-crosshair-h"></div>
                    <div className="radar-crosshair-v"></div>
                    <div className="radar-blip blip-1"></div>
                    <div className="radar-blip blip-2"></div>
                    <div className="radar-blip blip-3"></div>
                </div>
                <div className="traffic-legend">
                    {legendData.map((item, i) => (
                        <div key={i} className="legend-item">
                            <div className="legend-label-wrap">
                                <span className="legend-bullet"></span>
                                <span className="legend-name">{item.label}</span>
                            </div>
                            <div className="legend-bar-wrap">
                                <div
                                    className="legend-progress-bar"
                                    style={{ width: item.val }}
                                ></div>
                            </div>
                            <span className="legend-val">{item.val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}