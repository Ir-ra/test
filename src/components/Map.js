import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiaXItcmEiLCJhIjoiY2w2NjlwenFyMDI0MjNlbzk3enIyYXEzOSJ9.TEkAnQaXTEIbtBNAlyOTag';

export default function Map({ coordinates }) {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(coordinates.long);
    const [lat, setLat] = useState(coordinates.lat);
    const [zoom, setZoom] = useState(3);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/ir-ra/claqo9a8w004s14mm4lpfr18a',
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