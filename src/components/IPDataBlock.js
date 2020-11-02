import React, { useContext, useEffect } from "react";
import axios from "axios";
import IpinfoDtails from "../contexts/IpinfoDetails";

const IPDataBlock = () => {
    const [ipInfo, setIpInfo] = useContext(IpinfoDtails);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API}`)
            .then(res => {
                setIpInfo(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div className="ip-data">
            <div className="flex-parent data-container">
                <div className="flex-item data-block">
                    <h2 className="sub-title">Ip Address</h2>
                    <p className="ip-data-data ip-address">
                        {ipInfo ? ipInfo.ip : "Loading..."}
                    </p>
                </div>
                <div className="flex-item data-block">
                    <h2 className="sub-title">Location</h2>
                    <p className="ip-data-data ip-location">
                        {ipInfo ? `${ipInfo.location.city}, ${ipInfo.location.region} ${ipInfo.location.postalCode}` : "loading.."}
                    </p>
                </div>
                <div className="flex-item data-block">
                    <h2 className="sub-title">Timezone</h2>
                    <p className="ip-data-data ip-timezone">
                        {ipInfo ? `UTC ${ipInfo.location.timezone}` : "Loading..."}
                    </p>
                </div>
                <div className="flex-item data-block">
                    <h2 className="sub-title">ISP</h2>
                    <p className="ip-data-data">
                        {ipInfo ? ipInfo.isp : "Loading..."}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IPDataBlock;