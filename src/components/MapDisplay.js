import React, { useState, useContext, useEffect } from "react";
import ReactMapGL, { Marker } from 'react-map-gl';
import mapMarker from "../images/icon-location.svg";
import IpInfoDetails from "../contexts/IpinfoDetails";

const MapDisplay = () => {
    const [ipInfo] = useContext(IpInfoDetails);
    const [viewport, setViewport] = useState({
        height: "100vh",
        width: "100vw",
        latitude: 0,
        longitude: 0,
        zoom: 12
    });

    useEffect(() => {
        if (ipInfo) {
            setViewport({
                ...viewport,
                latitude: ipInfo.location.lat,
                longitude: ipInfo.location.lng
            });
        }
    }, [ipInfo]);

    return (
        <main className="map">
            { ipInfo ?
                (<ReactMapGL
                    {...viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
                    onViewportChange={setViewport}
                >
                    <Marker
                        latitude={ipInfo && ipInfo.location.lat}
                        longitude={ipInfo && ipInfo.location.lng}
                        offsetTop={-46}
                        offsetLeft={-28}
                    >
                        <img className="map-marker" src={mapMarker} alt="Map marker icon" />
                    </Marker>
                </ReactMapGL>) :
                (<div>Loading Map...</div>)
            }
        </main>

    )
}

export default MapDisplay;