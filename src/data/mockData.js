// Global City Dictionary with exact geographic Latitudes & Longitudes
export const cityDictionary = {
    'mumbai': { city: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, name: 'Mumbai Smart Lot', spaces: '1,500 spaces', occupancy: '82%', income: '$4,200', status: 'Optimal' },
    'tokyo': { city: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, name: 'Shinjuku Automated Terminal', spaces: '2,200 spaces', occupancy: '91%', income: '$6,850', status: 'Near Capacity' },
    'new york': { city: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060, name: 'Manhattan Central Garage', spaces: '1,850 spaces', occupancy: '76%', income: '$5,900', status: 'Active' },
    'london': { city: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, name: 'City West Parking Hub', spaces: '1,200 spaces', occupancy: '68%', income: '$3,800', status: 'Optimal' },
    'singapore': { city: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, name: 'Marina Bay Eco-Deck', spaces: '2,400 spaces', occupancy: '85%', income: '$7,100', status: 'Optimal' },
    'dubai': { city: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, name: 'Downtown Autonomous Deck', spaces: '3,100 spaces', occupancy: '74%', income: '$8,400', status: 'Optimal' },
    'paris': { city: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, name: 'Champs-Élysées Smart Deck', spaces: '1,650 spaces', occupancy: '79%', income: '$5,100', status: 'Optimal' },
    'berlin': { city: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050, name: 'Alexanderplatz Garage', spaces: '1,450 spaces', occupancy: '71%', income: '$4,600', status: 'Optimal' },
    'sydney': { city: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093, name: 'Darling Harbour Lot', spaces: '1,900 spaces', occupancy: '77%', income: '$5,800', status: 'Optimal' },
    'delhi': { city: 'Delhi', country: 'India', lat: 28.6139, lng: 77.2090, name: 'Connaught Place Multi-Level', spaces: '2,600 spaces', occupancy: '86%', income: '$6,100', status: 'Near Capacity' },
    'zhengzhou': { city: 'Zhengzhou', country: 'China', lat: 34.7466, lng: 113.6253, name: 'Zhengzhou Parking Lot', spaces: '48,807 spaces', occupancy: '89%', income: '$7,420', status: 'Optimal' },
    'beijing': { city: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074, name: 'Chaoyang Smart Deck', spaces: '3,500 spaces', occupancy: '84%', income: '$7,900', status: 'Optimal' },
    'shanghai': { city: 'Shanghai', country: 'China', lat: 31.2304, lng: 121.4737, name: 'Lujiazui Financial Hub', spaces: '4,100 spaces', occupancy: '88%', income: '$8,900', status: 'Optimal' },
    'moscow': { city: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173, name: 'Red Square Parking Deck', spaces: '2,100 spaces', occupancy: '73%', income: '$5,200', status: 'Optimal' },
    'rome': { city: 'Rome', country: 'Italy', lat: 41.9028, lng: 12.4964, name: 'Colosseum Smart Deck', spaces: '1,300 spaces', occupancy: '69%', income: '$3,900', status: 'Optimal' },
    'los angeles': { city: 'Los Angeles', country: 'USA', lat: 34.0522, lng: -118.2437, name: 'Downtown LA Valet Garage', spaces: '2,800 spaces', occupancy: '81%', income: '$6,700', status: 'Optimal' },
    'chicago': { city: 'Chicago', country: 'USA', lat: 41.8781, lng: -87.6298, name: 'Loop Central Terminal', spaces: '1,950 spaces', occupancy: '75%', income: '$5,400', status: 'Optimal' },
    'toronto': { city: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, name: 'Bay Street Tower Garage', spaces: '1,750 spaces', occupancy: '72%', income: '$4,800', status: 'Optimal' },
    'cairo': { city: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357, name: 'Tahrir Square Smart Hub', spaces: '1,400 spaces', occupancy: '83%', income: '$3,600', status: 'Optimal' },
    'rio de janeiro': { city: 'Rio de Janeiro', country: 'Brazil', lat: -22.9068, lng: -43.1729, name: 'Copacabana Parking Lot', spaces: '1,250 spaces', occupancy: '78%', income: '$3,750', status: 'Optimal' },
    'buenos aires': { city: 'Buenos Aires', country: 'Argentina', lat: -34.6037, lng: -58.3816, name: 'Puerto Madero Deck', spaces: '1,150 spaces', occupancy: '67%', income: '$3,200', status: 'Optimal' },
    'cape town': { city: 'Cape Town', country: 'South Africa', lat: -33.9249, lng: 18.4241, name: 'V&A Waterfront Hub', spaces: '1,500 spaces', occupancy: '70%', income: '$3,900', status: 'Optimal' },
    'bangkok': { city: 'Bangkok', country: 'Thailand', lat: 13.7563, lng: 100.5018, name: 'Siam Paragon Terminal', spaces: '2,900 spaces', occupancy: '90%', income: '$5,800', status: 'Near Capacity' },
    'seoul': { city: 'Seoul', country: 'South Korea', lat: 37.5665, lng: 126.9780, name: 'Gangnam Autonomous Hub', spaces: '3,200 spaces', occupancy: '87%', income: '$8,100', status: 'Optimal' },
    'san francisco': { city: 'San Francisco', country: 'USA', lat: 37.7749, lng: -122.4194, name: 'SOMA Tech Garage', spaces: '1,600 spaces', occupancy: '74%', income: '$5,900', status: 'Optimal' },
    'amsterdam': { city: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lng: 4.9041, name: 'Centraal Station Park', spaces: '1,100 spaces', occupancy: '85%', income: '$4,100', status: 'Optimal' },
    'madrid': { city: 'Madrid', country: 'Spain', lat: 40.4168, lng: -3.7038, name: 'Gran Vía Smart Lot', spaces: '1,400 spaces', occupancy: '76%', income: '$4,300', status: 'Optimal' },
    'hong kong': { city: 'Hong Kong', country: 'China', lat: 22.3193, lng: 114.1694, name: 'Central Tower Garage', spaces: '2,100 spaces', occupancy: '93%', income: '$8,700', status: 'Near Capacity' },
    'istanbul': { city: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784, name: 'Taksim Square Hub', spaces: '1,800 spaces', occupancy: '81%', income: '$4,500', status: 'Optimal' },
    'bangalore': { city: 'Bangalore', country: 'India', lat: 12.9716, lng: 77.5946, name: 'MG Road Smart Deck', spaces: '2,300 spaces', occupancy: '84%', income: '$5,200', status: 'Optimal' },
    'hyderabad': { city: 'Hyderabad', country: 'India', lat: 17.3850, lng: 78.4867, name: 'HITEC City Garage', spaces: '2,500 spaces', occupancy: '82%', income: '$5,400', status: 'Optimal' },
    'chennai': { city: 'Chennai', country: 'India', lat: 13.0827, lng: 80.2707, name: 'Anna Salai Smart Lot', spaces: '1,700 spaces', occupancy: '78%', income: '$4,100', status: 'Optimal' },
    'kolkata': { city: 'Kolkata', country: 'India', lat: 22.5726, lng: 88.3639, name: 'Park Street Terminal', spaces: '1,600 spaces', occupancy: '75%', income: '$3,800', status: 'Optimal' },
    'india': { city: 'India', country: 'Asia', lat: 20.5937, lng: 78.9629, name: 'National Smart Lot Network', spaces: '150,000 spaces', occupancy: '81%', income: '$420,000', status: 'Optimal' },
    'japan': { city: 'Japan', country: 'Asia', lat: 36.2048, lng: 138.2529, name: 'Japan Automated Network', spaces: '180,000 spaces', occupancy: '88%', income: '$580,000', status: 'Optimal' },
    'usa': { city: 'United States', country: 'Americas', lat: 37.0902, lng: -95.7129, name: 'US National Garage Grid', spaces: '250,000 spaces', occupancy: '76%', income: '$940,000', status: 'Optimal' },
    'uk': { city: 'United Kingdom', country: 'Europe', lat: 55.3781, lng: -3.4360, name: 'UK Smart Parking Grid', spaces: '95,000 spaces', occupancy: '72%', income: '$310,000', status: 'Optimal' },
    'china': { city: 'China', country: 'Asia', lat: 35.8617, lng: 104.1954, name: 'China National Grid', spaces: '320,000 spaces', occupancy: '86%', income: '$1,200,000', status: 'Optimal' },
    'france': { city: 'France', country: 'Europe', lat: 46.2276, lng: 2.2137, name: 'France Parking Network', spaces: '85,000 spaces', occupancy: '77%', income: '$290,000', status: 'Optimal' },
    'germany': { city: 'Germany', country: 'Europe', lat: 51.1657, lng: 10.4515, name: 'Autobahn & City Grid', spaces: '110,000 spaces', occupancy: '74%', income: '$380,000', status: 'Optimal' },
    'australia': { city: 'Australia', country: 'Oceania', lat: -25.2744, lng: 133.7751, name: 'Australia National Lot', spaces: '75,000 spaces', occupancy: '73%', income: '$260,000', status: 'Optimal' }
};

export const defaultLocations = [
    { ...buildTelemetryData(cityDictionary['mumbai']), id: 'mumbai', displayName: 'Mumbai, India' },
    { ...buildTelemetryData(cityDictionary['tokyo']), id: 'tokyo', displayName: 'Tokyo, Japan' },
    { ...buildTelemetryData(cityDictionary['new york']), id: 'newyork', displayName: 'New York, USA' },
    { ...buildTelemetryData(cityDictionary['london']), id: 'london', displayName: 'London, UK' },
    { ...buildTelemetryData(cityDictionary['singapore']), id: 'singapore', displayName: 'Singapore' },
    { ...buildTelemetryData(cityDictionary['dubai']), id: 'dubai', displayName: 'Dubai, UAE' },
    { ...buildTelemetryData(cityDictionary['zhengzhou']), id: 'zhengzhou', displayName: 'Zhengzhou, China' }
];

// Helper to generate dynamic telemetry data given a location object
export function buildTelemetryData(locInfo) {
    const cityName = locInfo.city || 'Smart Hub';
    const query = cityName.toLowerCase();
    
    // Hash function for pseudo-random deterministic numbers
    let hash = 0;
    for (let i = 0; i < query.length; i++) {
        hash = (hash << 5) - hash + query.charCodeAt(i);
        hash |= 0;
    }
    const seed = Math.abs(hash);

    const occRate = parseInt(locInfo.occupancy) || (60 + (seed % 32));
    const totalSpaces = 45000 + (seed % 65000);
    const occupiedSpaces = Math.round(totalSpaces * (occRate / 100));
    const availableSpaces = totalSpaces - occupiedSpaces;
    const revenue = Math.round(120000 + (seed % 280000));
    const evShare = 20 + (seed % 35);
    const truckShare = 10 + (seed % 10);
    const carShare = 100 - evShare - truckShare;

    const arrivalVal = locInfo.city.toLowerCase() === 'zhengzhou' ? '46,323' : (30000 + (seed % 25000)).toLocaleString();
    const appearanceVal = locInfo.city.toLowerCase() === 'zhengzhou' ? '40,807' : (25000 + (seed % 20000)).toLocaleString();

    return {
        id: query.replace(/\s+/g, '-'),
        city: locInfo.city,
        country: locInfo.country || 'Global Network',
        displayName: `${locInfo.city}${locInfo.country ? ', ' + locInfo.country : ''}`,
        name: locInfo.name || `${locInfo.city} Parking Lot`,
        lat: locInfo.lat,
        lng: locInfo.lng,
        spaces: locInfo.spaces || `${(1500 + (seed % 3000)).toLocaleString()} spaces`,
        occupancy: `${occRate}%`,
        arrival: arrivalVal,
        appearance: appearanceVal,
        income: locInfo.income || `$${(3500 + (seed % 5500)).toLocaleString()}`,
        status: occRate > 85 ? 'Near Capacity' : 'Optimal',
        kpiData: [
            { title: "Total Parking Spaces", value: totalSpaces.toLocaleString(), badge: `+${(seed % 15 + 5)}%`, color: "#00f2fe", trend: [{ val: 10 }, { val: 14 }, { val: 18 }, { val: 22 }, { val: 25 }, { val: 30 }] },
            { title: "Occupied Spaces", value: occupiedSpaces.toLocaleString(), badge: `${occRate}%`, color: occRate > 85 ? "#ff0055" : "#4facfe", trend: [{ val: 12 }, { val: 15 }, { val: 19 }, { val: 23 }, { val: 28 }, { val: 32 }] },
            { title: "Available Spaces", value: availableSpaces.toLocaleString(), badge: `${(100 - occRate).toFixed(1)}%`, color: "#00f2fe", trend: [{ val: 25 }, { val: 21 }, { val: 17 }, { val: 13 }, { val: 9 }, { val: 5 }] },
            { title: "Revenue (USD)", value: `$${revenue.toLocaleString()}`, badge: "Live", color: "#00d2ff", trend: [{ val: 10 }, { val: 16 }, { val: 22 }, { val: 28 }, { val: 34 }, { val: 40 }] }
        ],
        vehicleTypeData: [
            { name: 'Car', value: carShare, color: '#00f2fe' },
            { name: 'EV', value: evShare, color: '#4facfe' },
            { name: 'Truck', value: truckShare, color: '#1e293b' }
        ],
        trafficLegendData: [
            { label: `${locInfo.city} North`, val: `${Math.min(98, occRate + 4)}%` },
            { label: 'Central Core', val: `${occRate}%` },
            { label: 'Commercial Hub', val: `${Math.max(40, occRate - 8)}%` },
            { label: 'Transit Terminal', val: `${Math.min(95, occRate + 2)}%` },
            { label: 'Airport Express', val: `${Math.max(50, occRate - 5)}%` },
            { label: 'Westside Deck', val: `${Math.max(35, occRate - 12)}%` }
        ],
        occupancyLevels: [
            { name: 'Level 1', percentage: Math.min(95, occRate + 6), color: '#00f2fe', slots: `${Math.round(1600 * ((occRate + 6) / 100))} / 1,600` },
            { name: 'Level 2', percentage: occRate, color: '#4facfe', slots: `${Math.round(1600 * (occRate / 100))} / 1,600` },
            { name: 'Level 3', percentage: Math.max(30, occRate - 20), color: '#00d2ff', slots: `${Math.round(1600 * ((occRate - 20) / 100))} / 1,600` }
        ]
    };
}

// Synchronous / Fallback Location Lookup
export function getLocationData(searchQuery) {
    if (!searchQuery || typeof searchQuery !== 'string') {
        return buildTelemetryData(cityDictionary['mumbai']);
    }

    const query = searchQuery.trim().toLowerCase();

    // 1. Direct dictionary match
    if (cityDictionary[query]) {
        return buildTelemetryData(cityDictionary[query]);
    }

    // 2. Partial dictionary match
    const matchingKey = Object.keys(cityDictionary).find(k => k.includes(query) || query.includes(k));
    if (matchingKey) {
        return buildTelemetryData(cityDictionary[matchingKey]);
    }

    // 3. Fallback pseudo-random coordinates
    const formattedTitle = searchQuery.trim().replace(/\b\w/g, c => c.toUpperCase());
    let hash = 0;
    for (let i = 0; i < query.length; i++) {
        hash = (hash << 5) - hash + query.charCodeAt(i);
        hash |= 0;
    }
    const seed = Math.abs(hash);
    const lat = parseFloat((((seed % 140) - 70) + (seed % 100) / 100).toFixed(4));
    const lng = parseFloat((((seed * 3 % 360) - 180) + (seed % 100) / 100).toFixed(4));

    return buildTelemetryData({
        city: formattedTitle,
        country: 'Global Grid',
        lat,
        lng
    });
}

// Async Geocoding Lookup via OpenStreetMap Nominatim for exact real-world lat/lng
export async function searchGeocodeLocation(searchQuery) {
    if (!searchQuery || typeof searchQuery !== 'string') {
        return getLocationData('mumbai');
    }

    const query = searchQuery.trim().toLowerCase();

    // 1. Check local database
    if (cityDictionary[query]) {
        return buildTelemetryData(cityDictionary[query]);
    }
    const matchingKey = Object.keys(cityDictionary).find(k => k.includes(query) || query.includes(k));
    if (matchingKey) {
        return buildTelemetryData(cityDictionary[matchingKey]);
    }

    // 2. Fetch exact lat/lng from Nominatim API
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`);
        if (res.ok) {
            const data = await res.json();
            if (data && data.length > 0) {
                const item = data[0];
                const lat = parseFloat(item.lat);
                const lng = parseFloat(item.lon);
                const city = item.display_name.split(',')[0].trim();
                const country = item.display_name.split(',').pop().trim();
                return buildTelemetryData({
                    city,
                    country,
                    lat,
                    lng,
                    name: `${city} Smart Lot`
                });
            }
        }
    } catch (e) {
        console.warn('Geocoding API call failed, using local lookup fallback', e);
    }

    // 3. Fallback
    return getLocationData(searchQuery);
}

export const parkingUsageOverTime = [
    { time: '09:00', v1: 40, v2: 60 },
    { time: '10:00', v1: 65, v2: 85 },
    { time: '11:00', v1: 55, v2: 75 },
    { time: '12:00', v1: 80, v2: 105 },
    { time: '13:00', v1: 110, v2: 145 },
    { time: '14:00', v1: 95, v2: 125 },
    { time: '15:00', v1: 120, v2: 155 },
    { time: '16:00', v1: 105, v2: 135 }
];

export const regionalAvailabilityData = [
    { month: 'Jan', total: 1200, occupied: 800 },
    { month: 'Feb', total: 1500, occupied: 900 },
    { month: 'Mar', total: 1800, occupied: 1200 },
    { month: 'Apr', total: 1400, occupied: 1000 },
    { month: 'May', total: 1100, occupied: 700 },
    { month: 'Jun', total: 1300, occupied: 950 },
    { month: 'Jul', total: 1600, occupied: 1100 },
    { month: 'Aug', total: 1400, occupied: 900 }
];

export const weeklyPerformanceData = [
    { time: '10:00', s1: 400, s2: 800 },
    { time: '11:00', s1: 700, s2: 1400 },
    { time: '12:00', s1: 1100, s2: 2000 },
    { time: '13:00', s1: 900, s2: 1700 },
    { time: '14:00', s1: 1200, s2: 2200 },
    { time: '15:00', s1: 600, s2: 1100 }
];

export const liveActivityLogs = [
    { id: 1, type: 'entry', text: 'Vehicle Entry: Lot B-12', detail: 'Tesla Model Y • Plate #MH02-DX', time: '12s ago' },
    { id: 2, type: 'exit', text: 'Space Released: Bay C-04', detail: 'BMW i4 • 1h 45m duration', time: '45s ago' },
    { id: 3, type: 'ev', text: 'EV Charging Complete', detail: 'Audi e-tron • Spot E-08 (100%)', time: '2m ago' },
    { id: 4, type: 'entry', text: 'Vehicle Entry: VIP Deck', detail: 'Mercedes EQS • Automated Valet', time: '3m ago' }
];

export const kpiData = defaultLocations[0].kpiData;
export const vehicleTypeData = defaultLocations[0].vehicleTypeData;
export const trafficLegendData = defaultLocations[0].trafficLegendData;
export const parkingHubs = defaultLocations;
export const occupancyLevels = defaultLocations[0].occupancyLevels;