import React, { useState } from "react";
import ReactMapGL, { Marker } from 'react-map-gl';
import mapMarker from "../images/icon-location.svg";

const MapDisplay = () => {
    const [viewport, setViewport] = useState({
        height: "100vh",
        width: "100vw",
        latitude: 28.800791,
        longitude: -81.273109,
        zoom: 12
    });

    return (
        <main className="map">
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
                onViewportChange={setViewport}
            >
                <Marker
                    latitude={28.800791}
                    longitude={-81.273109}
                    offsetTop={-46}
                    offsetLeft={-28}
                >
                    <img className="map-marker" src={mapMarker} alt="Map marker icon" />
                </Marker>
            </ReactMapGL>
        </main>

    )
}

export default MapDisplay;