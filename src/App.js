import React, { useState } from "react";
import IpApp from "./components/IpApp";
import IpinfoDtails from "./contexts/IpinfoDetails";

const App = () => {
    const ipInfo = useState(null);

    return (
        <IpinfoDtails.Provider value={ipInfo}>
            <IpApp />
        </IpinfoDtails.Provider>
    );
};

export default App;
