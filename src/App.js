import React, { useState } from "react";
import Header from "./components/Header";
import MapDisplay from "./components/MapDisplay";
import IpinfoDtails from "./contexts/IpinfoDetails";
import "./styles/main.scss";
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  const ipInfo = useState(null);

  return (
    <IpinfoDtails.Provider value={ipInfo}>
      <div className="App">
        <Header />
        <MapDisplay />
      </div>
    </IpinfoDtails.Provider>
  );
}

export default App;
