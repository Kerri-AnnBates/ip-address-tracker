import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const MapDisplay = () => {
    const [lat, setLat] = useState(51.505);
    const [lon, setLon] = useState(-0.09);
    const [zoom, setZoom] = useState(13);

    const position = [lat, lon];
    return (
        // <div className="map" id="ip-map"></div>
        <Map className="map" center={position} zoom={zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
            </Marker>
        </Map>
    )
}

export default MapDisplay;