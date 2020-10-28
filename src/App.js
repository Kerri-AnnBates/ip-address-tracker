import React from "react";
import Header from "./components/Header";
import MapDisplay from "./components/MapDisplay";
import "./styles/main.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MapDisplay />
    </div>
  );
}

export default App;
