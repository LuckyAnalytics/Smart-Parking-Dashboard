import React, { useState, useEffect } from 'react';
import { Activity, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { liveActivityLogs } from '../data/mockData';

export default function ActivityCard() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % liveActivityLogs.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const currentItem = liveActivityLogs[activeIndex];

    const getIcon = (type) => {
        switch (type) {
            case 'ev':
                return <Zap size={15} className="text-cyan" />;
            case 'exit':
                return <CheckCircle2 size={15} className="text-blue" />;
            default:
                return <ArrowUpRight size={15} className="text-cyan" />;
        }
    };

    return (
        <div className="activity-card glass-panel-sm">
            <div className="activity-icon-box">
                {getIcon(currentItem.type)}
            </div>
            <div className="activity-info">
                <div className="activity-title">{currentItem.text}</div>
                <div className="activity-sub">{currentItem.detail}</div>
            </div>
            <div className="activity-time-badge">{currentItem.time}</div>
        </div>
    );
}