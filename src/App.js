import React, { useState } from "react";
import Header from "./components/Header";
import MapDisplay from "./components/MapDisplay";
import IpAddressContext from "./contexts/IpAdressContext";
import "./styles/main.scss";
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  const ipAddress = useState(null);

  return (
    <IpAddressContext.Provider value={ipAddress}>
      <div className="App">
        <Header />
        <MapDisplay />
      </div>
    </IpAddressContext.Provider>
  );
}

export default App;
