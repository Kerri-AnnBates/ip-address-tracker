import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const MapDisplay = () => {
    const [lat, setLat] = useState(51.505);
    const [lon, setLon] = useState(-0.09);

    const position = [lat, lon];
    const newMarker = new Icon({
        iconUrl: require("../images/icon-location.svg"),
        iconSize: [50]
    });

    return (
        // <div className="map" id="ip-map"></div>
        <Map className="map" center={position} zoom={13}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={newMarker}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    )
}

export default MapDisplay;