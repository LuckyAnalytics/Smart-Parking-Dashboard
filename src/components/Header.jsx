import React, { useState, useEffect, useRef } from 'react';
import { Wifi, Bell, Settings, ShieldCheck, Search, X, MapPin } from 'lucide-react';
import { defaultLocations } from '../data/mockData';

export default function Header({ currentLocation, onSelectLocation }) {
    const [currentTime, setCurrentTime] = useState(() => new Date());
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Close search dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const timeStr = currentTime.toTimeString().split(' ')[0];
    const dateStr = currentTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const handleSearchSubmit = (e) => {
        if (e) e.preventDefault();
        if (searchTerm.trim()) {
            onSelectLocation(searchTerm.trim());
            setIsOpen(false);
        }
    };

    const handleSelectSuggestion = (locationName) => {
        setSearchTerm(locationName);
        onSelectLocation(locationName);
        setIsOpen(false);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setIsOpen(false);
    };

    // Filter default suggestions
    const matchingSuggestions = defaultLocations.filter(loc =>
        loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <header className="glass-panel dashboard-header-wrap">
            <div className="dashboard-header-top">
                <div className="header-time">
                    <div className="digital-clock">{timeStr}</div>
                    <div className="date-stamp">{dateStr}</div>
                </div>

                <div className="header-title-box">
                    <span className="title-bracket">[</span>
                    <div className="title-stack">
                        <h1 className="header-title">Smart Parking Data Platform</h1>
                        <div className="header-sub">CENTRAL INTELLIGENCE & TELEMETRY HUB</div>
                    </div>
                    <span className="title-bracket">]</span>
                </div>

                <div className="header-status-group">
                    <div className="system-pill">
                        <span className="live-dot"></span>
                        <ShieldCheck size={14} className="status-icon" />
                        <span>SYSTEM ONLINE</span>
                    </div>
                    <div className="header-icons">
                        <div className="icon-btn" title="Network Telemetry">
                            <Wifi size={17} />
                        </div>
                        <div className="icon-btn" title="Live Alerts">
                            <Bell size={17} />
                            <span className="badge-notification">3</span>
                        </div>
                        <div className="icon-btn" title="Terminal Settings">
                            <Settings size={17} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Cyber Search Bar Section (Placed directly under Smart Parking Data Platform) */}
            <div className="header-search-bar-section">
                <form className="search-form" onSubmit={handleSearchSubmit} ref={searchRef}>
                    <div className="search-input-wrapper">
                        <Search size={16} className="search-icon-cyan" />
                        <input
                            type="text"
                            className="cyber-search-input"
                            placeholder="SEARCH CITY OR COUNTRY (e.g. Tokyo, Paris, New York, Delhi, London)..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setIsOpen(true);
                            }}
                            onFocus={() => setIsOpen(true)}
                        />
                        {searchTerm && (
                            <button type="button" className="search-clear-btn" onClick={clearSearch}>
                                <X size={14} />
                            </button>
                        )}
                    </div>
                    <button type="submit" className="cyber-search-submit-btn">
                        <Search size={14} />
                        <span>SEARCH TELEMETRY</span>
                    </button>

                    {/* Cyber Dropdown Menu */}
                    {isOpen && (
                        <div className="search-dropdown-menu">
                            <div className="dropdown-header-label">PRE-CONFIGURED GLOBAL HUBS</div>
                            {matchingSuggestions.length > 0 ? (
                                matchingSuggestions.map((loc) => (
                                    <div
                                        key={loc.id}
                                        className="dropdown-item"
                                        onClick={() => handleSelectSuggestion(loc.city)}
                                    >
                                        <MapPin size={13} className="text-cyan" />
                                        <span className="dropdown-city">{loc.city}</span>
                                        <span className="dropdown-country">{loc.country}</span>
                                        <span className="dropdown-status">{loc.occupancy} Occupied</span>
                                    </div>
                                ))
                            ) : null}

                            {searchTerm.trim() && (
                                <div
                                    className="dropdown-item custom-query-item"
                                    onClick={() => handleSelectSuggestion(searchTerm)}
                                >
                                    <Search size={13} className="text-cyan" />
                                    <span>Query Global Radar for "<strong>{searchTerm}</strong>"</span>
                                </div>
                            )}
                        </div>
                    )}
                </form>

                {/* Popular Quick Select Hubs */}
                <div className="quick-hubs-bar">
                    <span className="quick-label">POPULAR HUBS:</span>
                    {['Mumbai', 'Tokyo', 'New York', 'London', 'Singapore', 'Dubai', 'Paris', 'Delhi'].map((hubName) => (
                        <button
                            key={hubName}
                            type="button"
                            className={`quick-hub-chip ${currentLocation?.city?.toLowerCase() === hubName.toLowerCase() ? 'active' : ''}`}
                            onClick={() => handleSelectSuggestion(hubName)}
                        >
                            {hubName}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}