import React, { useState } from "react";
import Header from "./components/Header";
import MapDisplay from "./components/MapDisplay";
import Ipinfo from "./contexts/Ipinfo";
import "./styles/main.scss";
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  const ipAddress = useState(null);

  return (
    <Ipinfo.Provider value={ipAddress}>
      <div className="App">
        <Header />
        <MapDisplay />
      </div>
    </Ipinfo.Provider>
  );
}

export default App;
