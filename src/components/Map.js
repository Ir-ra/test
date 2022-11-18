import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiaXItcmEiLCJhIjoiY2w2NjlwenFyMDI0MjNlbzk3enIyYXEzOSJ9.TEkAnQaXTEIbtBNAlyOTag';
//process.env.MAP_TOKEN

export default function Map2({ coordinates }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    console.log(coordinates.long)
    console.log(coordinates.lat)
    const [lng, setLng] = useState(coordinates.long);
    const [lat, setLat] = useState(coordinates.lat);
    const [zoom, setZoom] = useState(2);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}