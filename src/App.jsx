import React, { useState } from 'react';
import Header from './components/Header';
import KPICard from './components/KPICard';
import VehicleTypeChart from './components/VehicleTypeChart';
import ParkingUsageChart from './components/ParkingUsageChart';
import RegionalAvailability from './components/RegionalAvailability';
import Globe from './components/Globe';
import TrafficAvailability from './components/TrafficAvailability';
import OccupancyChart from './components/OccupancyChart';
import WeeklyPerformance from './components/WeeklyPerformance';
import ActivityCard from './components/ActivityCard';
import { getLocationData, searchGeocodeLocation } from './data/mockData';
import './styles/dashboard.css';

export default function App() {
    const [currentLocationData, setCurrentLocationData] = useState(() => getLocationData('Mumbai'));

    const handleSelectLocation = async (query) => {
        if (!query) return;
        const data = await searchGeocodeLocation(query);
        setCurrentLocationData(data);
    };

    return (
        <div className="dashboard-container">
            {/* Header with Cyber Search Bar under title */}
            <Header
                currentLocation={currentLocationData}
                onSelectLocation={handleSelectLocation}
            />

            {/* Dynamic KPI Row */}
            <div className="kpi-row">
                {currentLocationData.kpiData.map((item, index) => (
                    <KPICard key={`${currentLocationData.city}-${index}`} {...item} />
                ))}
            </div>

            {/* Main Grid */}
            <div className="dashboard-grid">
                <div className="left-column">
                    <VehicleTypeChart data={currentLocationData.vehicleTypeData} />
                    <ParkingUsageChart />
                    <RegionalAvailability />
                </div>

                {/* 3D Map Globe with Geographically Accurate Smooth Rotation, Glowing Pin & Floating Label */}
                <Globe
                    currentLocation={currentLocationData}
                    onSelectLocation={handleSelectLocation}
                />

                <div className="right-column">
                    <TrafficAvailability data={currentLocationData.trafficLegendData} />
                    <OccupancyChart data={currentLocationData.occupancyLevels} />
                    <ActivityCard />
                    <WeeklyPerformance />
                </div>
            </div>
        </div>
    );
}