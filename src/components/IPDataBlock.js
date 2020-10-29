import React, { useContext, useEffect } from "react";
import IpAddressContext from "../contexts/IpAdressContext";

const IPDataBlock = () => {
    const [ipAddress, setIpAddress] = useContext(IpAddressContext);

    return (
        <div className="ip-data">
            <div className="flex-parent data-container">
                <div className="flex-item data-block">
                    <h2 className="sub-title">Ip Address</h2>
                    <p className="ip-data-data ip-address">192.212.174.101</p>
                </div>
                <div className="flex-item data-block">
                    <h2 className="sub-title">Location</h2>
                    <p className="ip-data-data ip-location">Brooklyn, NY 10001</p>
                </div>
                <div className="flex-item data-block">
                    <h2 className="sub-title">Timezone</h2>
                    <p className="ip-data-data ip-timezone">UTC -05:00</p>
                </div>
                <div className="flex-item data-block">
                    <h2 className="sub-title">ISP</h2>
                    <p className="ip-data-data">SpaceX Starlink</p>
                </div>
            </div>
        </div>
    )
}

export default IPDataBlock;