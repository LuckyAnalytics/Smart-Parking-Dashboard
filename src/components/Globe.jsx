import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MapPin, Radio, Compass } from 'lucide-react';
import { defaultLocations } from '../data/mockData';

// Generate a realistic 2048x1024 HD Earth World Map Canvas Texture
function createRealWorldEarthTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // 1. Deep Oceanic Blue Gradient Base
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, 1024);
    oceanGrad.addColorStop(0, '#040b17');
    oceanGrad.addColorStop(0.3, '#07152d');
    oceanGrad.addColorStop(0.5, '#0a1d3c');
    oceanGrad.addColorStop(0.7, '#07152d');
    oceanGrad.addColorStop(1, '#040b17');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, 2048, 1024);

    // Subtle latitude / longitude graticule grid lines
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 2048; x += 128) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 1024);
        ctx.stroke();
    }
    for (let y = 0; y < 1024; y += 128) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(2048, y);
        ctx.stroke();
    }

    // Helper to draw realistic landmass polygon with coastal shelf & realistic terrain colors
    const drawLandmass = (pts, landColor = '#1e3a2b', strokeColor = 'rgba(0, 242, 254, 0.7)', strokeWidth = 1.8) => {
        ctx.save();
        
        // Coastal cyan glow shelf
        ctx.fillStyle = 'rgba(0, 180, 216, 0.15)';
        ctx.beginPath();
        pts.forEach(([lng, lat], i) => {
            const x = ((lng + 180) / 360) * 2048;
            const y = ((90 - lat) / 180) * 1024;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.lineWidth = strokeWidth + 6;
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.25)';
        ctx.stroke();
        ctx.fill();

        // Realistic Land fill
        ctx.fillStyle = landColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.shadowColor = '#00f2fe';
        ctx.shadowBlur = 8;

        ctx.beginPath();
        pts.forEach(([lng, lat], i) => {
            const x = ((lng + 180) / 360) * 2048;
            const y = ((90 - lat) / 180) * 1024;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };

    // Realistic Continent Landmass Polygons
    // North America
    drawLandmass([
        [-168,70],[-140,70],[-130,65],[-120,55],[-125,50],[-124,38],[-117,32.5],[-105,20],[-97,18],
        [-90,15],[-82,8],[-77,8],[-80,25],[-82,30],[-75,35],[-65,44],[-60,46],[-64,52],[-80,60],
        [-95,65],[-120,72],[-168,70]
    ], '#1e382b', '#00f2fe');

    // Central & South Mexico
    drawLandmass([
        [-115,32],[-105,24],[-98,19],[-92,15],[-88,14],[-90,18],[-96,20],[-105,28],[-115,32]
    ], '#2e3a24', '#00f2fe');

    // Greenland & Iceland
    drawLandmass([[-73,81],[-20,83],[-18,70],[-30,60],[-50,60],[-73,81]], '#3d5252', '#00e5ff');
    drawLandmass([[-24,66],[-13,66],[-14,63],[-24,63]], '#324a4a', '#00e5ff');

    // South America
    drawLandmass([
        [-80,10],[-73,11],[-62,10],[-50,4],[-35,-5],[-35,-15],[-41,-22],[-48,-28],[-55,-35],
        [-65,-45],[-70,-55],[-75,-48],[-72,-38],[-70,-20],[-80,-2],[-80,10]
    ], '#1b3b22', '#00f2fe');

    // Europe
    drawLandmass([
        [-10,36],[0,36],[3,43],[14,40],[18,45],[28,41],[35,46],[30,60],[20,60],[10,55],
        [5,52],[-5,48],[-10,43],[-10,36]
    ], '#25442e', '#00f2fe');
    // UK & Ireland
    drawLandmass([[-10,51.5],[-5,58],[-2,58],[1,50],[-5,50]], '#274730', '#00f2fe');
    drawLandmass([[-10,51],[-6,55],[-10,55]], '#274730', '#00f2fe');
    // Scandinavia
    drawLandmass([[5,58],[12,56],[18,60],[30,70],[20,71],[5,62],[5,58]], '#223d38', '#00f2fe');

    // Africa
    drawLandmass([
        [-17,35],[-5,36],[12,37],[25,32],[33,31],[34,27],[43,12],[51,12],[42,0],
        [40,-15],[33,-34],[20,-35],[15,-28],[12,-12],[5,-2],[-15,12],[-17,35]
    ], '#3b3820', '#00f2fe');
    // Madagascar
    drawLandmass([[43,-12],[50,-12],[47,-25],[43,-25]], '#2b3620', '#00f2fe');

    // Asia & India & China
    drawLandmass([
        [35,35],[45,35],[55,25],[60,25],[68,24],[73,34],[88,28],[92,22],[100,15],
        [105,10],[108,22],[118,24],[122,30],[122,40],[135,48],[140,55],[170,60],[170,72],
        [100,72],[60,70],[35,45],[35,35]
    ], '#24452c', '#00f2fe');
    // Indian Peninsula
    drawLandmass([[68,24],[77,31],[88,22],[80,8],[73,15],[68,24]], '#334724', '#00f2fe');
    // East Asia & China Heartlands
    drawLandmass([
        [100,22],[120,24],[122,40],[110,42],[100,35],[100,22]
    ], '#1e3e29', '#00f2fe');
    // Japan
    drawLandmass([[130,31],[142,37],[145,45],[138,42],[130,31]], '#1f3c30', '#00f2fe');
    // Southeast Asia & Malaysia
    drawLandmass([[98,16],[108,12],[104,1],[98,8]], '#1f4027', '#00f2fe');
    // Indonesia & Philippines
    drawLandmass([[95,-6],[115,-7],[115,2],[95,2]], '#1f4027', '#00f2fe');
    drawLandmass([[118,-9],[140,-8],[135,-3],[118,-3]], '#1f4027', '#00f2fe');
    drawLandmass([[120,6],[126,18],[120,18]], '#1f4027', '#00f2fe');

    // Australia & New Zealand
    drawLandmass([[113,-14],[136,-12],[153,-15],[153,-38],[138,-35],[115,-34],[113,-14]], '#3d3420', '#00f2fe');
    drawLandmass([[166,-34],[178,-36],[174,-47],[166,-45]], '#233d28', '#00f2fe');

    // Antarctica Ice Mass
    drawLandmass([[-180,-65],[180,-65],[180,-88],[-180,-88]], '#4a5e6d', '#00f2fe');

    // 2. Polar Ice Caps Overlay (North & South Poles)
    const northIce = ctx.createLinearGradient(0, 0, 0, 150);
    northIce.addColorStop(0, 'rgba(230, 248, 255, 0.85)');
    northIce.addColorStop(1, 'rgba(230, 248, 255, 0)');
    ctx.fillStyle = northIce;
    ctx.fillRect(0, 0, 2048, 150);

    const southIce = ctx.createLinearGradient(0, 874, 0, 1024);
    southIce.addColorStop(0, 'rgba(230, 248, 255, 0)');
    southIce.addColorStop(1, 'rgba(230, 248, 255, 0.9)');
    ctx.fillStyle = southIce;
    ctx.fillRect(0, 874, 2048, 150);

    // 3. Glowing City Night Light Clusters (Metropolitan Hubs)
    const cityCoords = [
        [113.6253, 34.7466], [116.4074, 39.9042], [121.4737, 31.2304], [113.2644, 23.1291],
        [104.0668, 30.5728], [108.9402, 34.3416], [114.3055, 30.5928], [114.0579, 22.5431],
        [72.8777, 19.0760], [139.6503, 35.6762], [-74.0060, 40.7128], [-0.1278, 51.5074],
        [103.8198, 1.3521], [55.2708, 25.2048], [2.3522, 48.8566], [13.4050, 52.5200],
        [151.2093, -33.8688], [77.2090, 28.6139], [37.6173, 55.7558], [-118.2437, 34.0522],
        [-43.1729, -22.9068], [31.2357, 30.0444], [28.9784, 41.0082], [100.5018, 13.7563]
    ];

    ctx.fillStyle = '#ffb700';
    ctx.shadowColor = '#ff9900';
    ctx.shadowBlur = 10;
    cityCoords.forEach(([lng, lat]) => {
        const cx = ((lng + 180) / 360) * 2048;
        const cy = ((90 - lat) / 180) * 1024;
        ctx.beginPath();
        ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Secondary cyan halo
        ctx.fillStyle = '#00f2fe';
        ctx.beginPath();
        ctx.arc(cx, cy, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffb700';
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return { texture, cityCoords };
}

// Generate Realistic Atmosphere Cloud Texture Canvas
function createCloudTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, 1024, 512);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 15;

    // Draw realistic wispy cloud shapes across latitudes
    for (let i = 0; i < 80; i++) {
        const cx = Math.random() * 1024;
        const cy = 60 + Math.random() * 392;
        const rx = 40 + Math.random() * 90;
        const ry = 12 + Math.random() * 30;

        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

export default function Globe({ currentLocation, onSelectLocation }) {
    const mountRef = useRef(null);
    const [isAutoRotate, setIsAutoRotate] = useState(true);
    const [pinLabelPos, setPinLabelPos] = useState({ x: 0, y: 0, visible: false });

    const targetRotationRef = useRef({ x: 0.3, y: -1.2 });
    const currentRotationRef = useRef({ x: 0.3, y: -1.2 });
    const isDraggingRef = useRef(false);
    const previousMousePositionRef = useRef({ x: 0, y: 0 });

    const activeLocation = currentLocation || defaultLocations[0];

    // Smoothly rotate globe to face activeLocation's Lat/Lng
    useEffect(() => {
        if (activeLocation && activeLocation.lat !== undefined && activeLocation.lng !== undefined) {
            const phi = (90 - activeLocation.lat) * (Math.PI / 180);
            const theta = (activeLocation.lng + 180) * (Math.PI / 180);

            targetRotationRef.current = {
                x: (phi - Math.PI / 2) * 0.75,
                y: -theta + Math.PI / 2
            };
            setIsAutoRotate(false);
        }
    }, [activeLocation]);

    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        const width = container.clientWidth || 420;
        const height = container.clientHeight || 420;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.z = 2.85;

        // Realistic Sun Lighting & Ambient Illumination
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
        scene.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffffff, 1.8);
        sunLight.position.set(5, 3, 5);
        scene.add(sunLight);

        const rimLight = new THREE.DirectionalLight(0x00f2fe, 1.2);
        rimLight.position.set(-5, -2, -3);
        scene.add(rimLight);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        // Master Globe Group
        const globeGroup = new THREE.Group();
        globeGroup.rotation.x = currentRotationRef.current.x;
        globeGroup.rotation.y = currentRotationRef.current.y;
        scene.add(globeGroup);

        const RADIUS = 0.96;

        // Helper: Convert Lat/Lng to Vector3 on sphere surface
        const latLngToVector3 = (lat, lng, radius) => {
            const phiRad = (90 - lat) * (Math.PI / 180);
            const thetaRad = (lng + 180) * (Math.PI / 180);
            return new THREE.Vector3(
                -radius * Math.sin(phiRad) * Math.cos(thetaRad),
                radius * Math.cos(phiRad),
                radius * Math.sin(phiRad) * Math.sin(thetaRad)
            );
        };

        // 1. Realistic Globe Sphere Core with Phong Ocean Specular Lighting
        const { texture: mapTexture, cityCoords } = createRealWorldEarthTexture();
        const coreGeo = new THREE.SphereGeometry(RADIUS, 64, 64);
        const coreMat = new THREE.MeshPhongMaterial({
            map: mapTexture,
            shininess: 35,
            specular: 0x115588,
            transparent: false
        });
        const coreSphere = new THREE.Mesh(coreGeo, coreMat);
        globeGroup.add(coreSphere);

        // 2. Realistic 3D Atmosphere Cloud Layer Overlay
        const cloudTexture = createCloudTexture();
        const cloudGeo = new THREE.SphereGeometry(RADIUS * 1.015, 64, 64);
        const cloudMat = new THREE.MeshBasicMaterial({
            map: cloudTexture,
            transparent: true,
            opacity: 0.38,
            blending: THREE.NormalBlending
        });
        const cloudSphere = new THREE.Mesh(cloudGeo, cloudMat);
        globeGroup.add(cloudSphere);

        // 3. 3D Glowing Holographic Flight / Data Arcs (Connecting Global Cities)
        const arcGroup = new THREE.Group();
        globeGroup.add(arcGroup);

        const arcPairs = [
            [[40.7128, -74.0060], [51.5074, -0.1278], 0x00f2fe],   // New York -> London
            [[51.5074, -0.1278], [25.2048, 55.2708], 0xffaa00],    // London -> Dubai
            [[25.2048, 55.2708], [19.0760, 72.8777], 0x00f2fe],    // Dubai -> Mumbai
            [[19.0760, 72.8777], [1.3521, 103.8198], 0xffaa00],    // Mumbai -> Singapore
            [[1.3521, 103.8198], [35.6762, 139.6503], 0x00f2fe],   // Singapore -> Tokyo
            [[35.6762, 139.6503], [37.7749, -122.4194], 0xffaa00], // Tokyo -> San Francisco
            [[34.7466, 113.6253], [35.6762, 139.6503], 0x00f2fe],  // Zhengzhou -> Tokyo
            [[34.7466, 113.6253], [51.5074, -0.1278], 0xffaa00]   // Zhengzhou -> London
        ];

        arcPairs.forEach(([start, end, colorHex]) => {
            const startVec = latLngToVector3(start[0], start[1], RADIUS);
            const endVec = latLngToVector3(end[0], end[1], RADIUS);

            const midVec = startVec.clone().add(endVec).multiplyScalar(0.5);
            const dist = startVec.distanceTo(endVec);
            midVec.normalize().multiplyScalar(RADIUS + dist * 0.38);

            const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
            const points = curve.getPoints(50);
            const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
            const arcMat = new THREE.LineBasicMaterial({
                color: colorHex,
                transparent: true,
                opacity: 0.85,
                blending: THREE.AdditiveBlending,
                linewidth: 2
            });
            const arcLine = new THREE.Line(arcGeo, arcMat);
            arcGroup.add(arcLine);
        });

        // 4. 3D Neon Orbital Satellite Rings
        const orbitRing1Geo = new THREE.RingGeometry(RADIUS * 1.15, RADIUS * 1.155, 128);
        const orbitRing1Mat = new THREE.MeshBasicMaterial({
            color: 0x00f2fe,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.35,
            blending: THREE.AdditiveBlending
        });
        const orbitRing1 = new THREE.Mesh(orbitRing1Geo, orbitRing1Mat);
        orbitRing1.rotation.x = Math.PI / 3;
        orbitRing1.rotation.y = Math.PI / 6;
        globeGroup.add(orbitRing1);

        const orbitRing2Geo = new THREE.RingGeometry(RADIUS * 1.25, RADIUS * 1.255, 128);
        const orbitRing2Mat = new THREE.MeshBasicMaterial({
            color: 0xffaa00,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.25,
            blending: THREE.AdditiveBlending
        });
        const orbitRing2 = new THREE.Mesh(orbitRing2Geo, orbitRing2Mat);
        orbitRing2.rotation.x = -Math.PI / 4;
        orbitRing2.rotation.y = Math.PI / 4;
        globeGroup.add(orbitRing2);

        // 5. 3D Neon Landmass Particle Cloud Overlay
        const particleCount = 1500;
        const particlePositions = new Float32Array(particleCount * 3);
        let pIdx = 0;

        cityCoords.forEach(([lng, lat]) => {
            for (let k = 0; k < 30; k++) {
                if (pIdx >= particleCount) break;
                const jLat = lat + (Math.random() - 0.5) * 12;
                const jLng = lng + (Math.random() - 0.5) * 12;
                const pos = latLngToVector3(jLat, jLng, RADIUS * 1.01);
                particlePositions[pIdx * 3] = pos.x;
                particlePositions[pIdx * 3 + 1] = pos.y;
                particlePositions[pIdx * 3 + 2] = pos.z;
                pIdx++;
            }
        });

        const neonParticleGeo = new THREE.BufferGeometry();
        neonParticleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        const neonParticleMat = new THREE.PointsMaterial({
            color: 0x00f2fe,
            size: 0.024,
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending
        });

        const neonParticles = new THREE.Points(neonParticleGeo, neonParticleMat);
        globeGroup.add(neonParticles);

        // 6. Volumetric Outer Atmosphere Glowing Halo
        const haloSphereGeo = new THREE.SphereGeometry(RADIUS * 1.06, 64, 64);
        const haloSphereMat = new THREE.MeshBasicMaterial({
            color: 0x00f2fe,
            side: THREE.BackSide,
            transparent: true,
            opacity: 0.28,
            blending: THREE.AdditiveBlending
        });
        const haloSphere = new THREE.Mesh(haloSphereGeo, haloSphereMat);
        scene.add(haloSphere);

        // 7. Dynamic Active Pin Marker & Pulsing Dual Rings (Matching Reference Screenshot)
        const pinGroup = new THREE.Group();
        globeGroup.add(pinGroup);

        const pinCoreGeo = new THREE.SphereGeometry(0.038, 16, 16);
        const pinCoreMat = new THREE.MeshBasicMaterial({
            color: 0xffffff
        });
        const pinCore = new THREE.Mesh(pinCoreGeo, pinCoreMat);

        const haloGeo = new THREE.SphereGeometry(0.065, 16, 16);
        const haloMat = new THREE.MeshBasicMaterial({
            color: 0x00f2fe,
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending
        });
        const haloDot = new THREE.Mesh(haloGeo, haloMat);

        const pulseRing1Geo = new THREE.RingGeometry(0.02, 0.075, 32);
        const pulseRing1Mat = new THREE.MeshBasicMaterial({
            color: 0x00f2fe,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending
        });
        const pulseRing1 = new THREE.Mesh(pulseRing1Geo, pulseRing1Mat);
        pulseRing1.rotation.x = Math.PI / 2;

        const pulseRing2Geo = new THREE.RingGeometry(0.065, 0.12, 32);
        const pulseRing2Mat = new THREE.MeshBasicMaterial({
            color: 0xffaa00,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
        });
        const pulseRing2 = new THREE.Mesh(pulseRing2Geo, pulseRing2Mat);
        pulseRing2.rotation.x = Math.PI / 2;

        pinGroup.add(pinCore);
        pinGroup.add(haloDot);
        pinGroup.add(pulseRing1);
        pinGroup.add(pulseRing2);

        const updatePinPosition = () => {
            if (!activeLocation) return;
            const pos = latLngToVector3(activeLocation.lat, activeLocation.lng, RADIUS);
            pinGroup.position.copy(pos);

            const normal = pos.clone().normalize();
            pinGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);

            pinCore.position.set(0, 0.04, 0);
            haloDot.position.set(0, 0.04, 0);
        };

        updatePinPosition();

        // Mouse Drag Interaction Handlers
        const onMouseDown = (e) => {
            isDraggingRef.current = true;
            setIsAutoRotate(false);
            previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
        };

        const onMouseMove = (e) => {
            if (!isDraggingRef.current) return;
            const deltaX = e.clientX - previousMousePositionRef.current.x;
            const deltaY = e.clientY - previousMousePositionRef.current.y;

            targetRotationRef.current.y += deltaX * 0.006;
            targetRotationRef.current.x = Math.max(
                -Math.PI / 3,
                Math.min(Math.PI / 3, targetRotationRef.current.x + deltaY * 0.006)
            );

            previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
        };

        const onMouseUp = () => {
            isDraggingRef.current = false;
        };

        const domElem = renderer.domElement;
        domElem.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        // Touch support
        const onTouchStart = (e) => {
            if (e.touches.length === 1) {
                isDraggingRef.current = true;
                setIsAutoRotate(false);
                previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        };
        const onTouchMove = (e) => {
            if (!isDraggingRef.current || e.touches.length !== 1) return;
            const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
            const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;
            targetRotationRef.current.y += deltaX * 0.007;
            targetRotationRef.current.x = Math.max(
                -Math.PI / 3,
                Math.min(Math.PI / 3, targetRotationRef.current.x + deltaY * 0.007)
            );
            previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        };
        const onTouchEnd = () => {
            isDraggingRef.current = false;
        };

        domElem.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd);

        // Resize Observer
        const handleResize = () => {
            if (!container) return;
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        // Animation Loop
        let animationFrameId;
        let clock = new THREE.Clock();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            if (isAutoRotate && !isDraggingRef.current) {
                targetRotationRef.current.y += 0.0025;
            }

            // Smooth rotational damping towards target
            currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.07;
            currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.07;

            globeGroup.rotation.x = currentRotationRef.current.x;
            globeGroup.rotation.y = currentRotationRef.current.y;

            // Rotate orbital rings
            orbitRing1.rotation.z = elapsedTime * 0.08;
            orbitRing2.rotation.z = -elapsedTime * 0.06;

            // Dual pulsing ring wave animation
            const scale1 = 1 + Math.sin(elapsedTime * 4.5) * 0.4;
            const scale2 = 1 + Math.cos(elapsedTime * 4.5) * 0.35;
            pulseRing1.scale.set(scale1, scale1, 1);
            pulseRing2.scale.set(scale2, scale2, 1);

            renderer.render(scene, camera);

            // Project 3D pin position to 2D screen coordinates for floating pin label
            if (container) {
                const pinWorldPos = new THREE.Vector3();
                pinCore.getWorldPosition(pinWorldPos);

                const projVec = pinWorldPos.clone().project(camera);
                const w = container.clientWidth;
                const h = container.clientHeight;

                // Check if pin is facing the front camera hemisphere
                const isFrontFacing = pinWorldPos.z > -0.2 && projVec.z < 1.0;

                if (isFrontFacing) {
                    const screenX = (projVec.x * 0.5 + 0.5) * w;
                    const screenY = (-(projVec.y * 0.5) + 0.5) * h;
                    setPinLabelPos({ x: screenX, y: screenY, visible: true });
                } else {
                    setPinLabelPos({ x: 0, y: 0, visible: false });
                }
            }
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            domElem.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            domElem.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            renderer.dispose();
        };
    }, [isAutoRotate, activeLocation]);

    // Format arrival / appearance stats like user screenshot (e.g. Arrival : 46,323 / Appearance : 40,807)
    const arrivalVal = activeLocation.arrival || '46,323';
    const appearanceVal = activeLocation.appearance || '40,807';

    return (
        <div className="glass-panel center-column">
            {/* Top Control Bar */}
            <div className="globe-header-bar">
                <div className="globe-tag">
                    <Radio size={13} className="pulse-icon" />
                    <span>GLOBAL PARKING SURVEILLANCE</span>
                </div>
                <div className="globe-hubs-nav">
                    {defaultLocations.slice(0, 6).map((hub) => (
                        <button
                            key={hub.id}
                            className={`hub-nav-btn ${activeLocation.city.toLowerCase() === hub.city.toLowerCase() ? 'active' : ''}`}
                            onClick={() => onSelectLocation(hub.city)}
                        >
                            {hub.city}
                        </button>
                    ))}
                </div>
            </div>

            {/* Three.js Globe Canvas Container */}
            <div className="globe-container">
                <div ref={mountRef} className="globe-canvas-wrap" />

                {/* Floating HUD Card attached to active location pin (Exact match to reference screenshot) */}
                {pinLabelPos.visible && (
                    <div
                        className="globe-pin-label-hud"
                        style={{
                            left: `${pinLabelPos.x + 16}px`,
                            top: `${pinLabelPos.y - 30}px`
                        }}
                    >
                        <div className="pin-hud-header">
                            <span className="pin-hud-bracket">›</span>
                            <span className="pin-hud-title">{activeLocation.city} Parking Lot</span>
                        </div>
                        <div className="pin-hud-row">
                            <span className="hud-label">Arrival :</span>
                            <span className="hud-val">{arrivalVal}</span>
                        </div>
                        <div className="pin-hud-row">
                            <span className="hud-label">Appearance :</span>
                            <span className="hud-val">{appearanceVal}</span>
                        </div>
                    </div>
                )}

                {/* Interactive Location Telemetry Card */}
                <div className="map-tooltip">
                    <h4>
                        <MapPin size={13} className="text-cyan" />
                        {activeLocation.displayName || activeLocation.city}
                    </h4>
                    <p className="lot-name">{activeLocation.name || `${activeLocation.city} Telemetry Node`}</p>
                    <div className="telemetry-grid">
                        <div className="telemetry-item">
                            <span className="tel-label">Capacity</span>
                            <span className="tel-val">{activeLocation.spaces}</span>
                        </div>
                        <div className="telemetry-item">
                            <span className="tel-label">Occupancy</span>
                            <span className="tel-val highlight">{activeLocation.occupancy}</span>
                        </div>
                        <div className="telemetry-item">
                            <span className="tel-label">Daily Rev</span>
                            <span className="tel-val highlight">{activeLocation.income}</span>
                        </div>
                        <div className="telemetry-item">
                            <span className="tel-label">Status</span>
                            <span className="tel-status-badge">{activeLocation.status}</span>
                        </div>
                    </div>
                </div>

                {/* Auto Rotate Control */}
                <button
                    className={`globe-toggle-btn ${isAutoRotate ? 'active' : ''}`}
                    onClick={() => setIsAutoRotate(!isAutoRotate)}
                    title="Toggle Auto Rotation"
                >
                    <Compass size={14} />
                    <span>{isAutoRotate ? 'Auto Orbit' : 'Free Look'}</span>
                </button>
            </div>
        </div>
    );
}