import React, { useContext, useEffect } from "react";
import axios from "axios";
import IpinfoDtails from "../contexts/IpinfoDetails";

const IPDataBlock = () => {
    const [ipInfo, setIpInfo] = useContext(IpinfoDtails);

    const getIpAdress = () => {
        return axios.get(`https://api.ipify.org?format=json`)
            .then(data => {
                return data.data;
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Get ip info
    const getIpInfo = async () => {
        // Get ipaddress first
        const result = await getIpAdress();

        if (result) {
            axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API}&ipAddress=${result.ip}`)
                .then(data => {
                    setIpInfo(data.data);
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            console.log("Result not processed");
        }
    }

    useEffect(() => {
        getIpInfo();
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
                        {ipInfo ? ipInfo.location.timezone : "Loading..."}
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