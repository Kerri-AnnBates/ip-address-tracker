import React, { useState } from "react";
import ReactMapGL from 'react-map-gl';

const MapDisplay = () => {
    const [viewport, setViewport] = useState({
        height: "100vh",
        width: "100vw",
        latitude: 28.800791,
        longitude: -81.273109,
        zoom: 10
    });

    return (
        <ReactMapGL
            className="map"
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
        ></ReactMapGL>
    )
}

export default MapDisplay;