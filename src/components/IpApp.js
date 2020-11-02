import React, { useContext, useEffect } from "react";
import Header from "./Header";
import MapDisplay from "./MapDisplay";
import IpinfoDtails from "../contexts/IpinfoDetails";
import "../styles/main.scss";
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from "axios";

const IpApp = () => {
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
        <>
            <Header />
            <MapDisplay />
        </>
    );
}

export default IpApp;
