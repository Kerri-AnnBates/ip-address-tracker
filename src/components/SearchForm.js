import React, { useContext, useEffect, useState } from "react";
import arrowIcon from "../images/icon-arrow.svg";
import IpinfoDtails from "../contexts/IpinfoDetails";
import axios from "axios";

const SearchForm = () => {
    const [ipInfo, setIpInfo] = useContext(IpinfoDtails);
    const [input, setInput] = useState("");
    const [submittedData, setSubmittedData] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input) {
            alert("Please enter an IP address or domain.");
        }

        setSubmittedData(input);
        setInput("");
    }

    // Fetch data on submit
    useEffect(() => {
        if (submittedData) {
            axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API}&domain=${submittedData}`)
                .then((res) => {
                    setIpInfo(res.data);
                })
                .catch(error => {
                    console.log(error);
                    alert("Invalid IP address or domain.");
                })
        }
    }, [submittedData]);

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <label htmlFor="search">
                    <input
                        id="search"
                        name="search"
                        placeholder="Search for any IP address or domain"
                        value={input}
                        onChange={handleChange}
                    />
                </label>
                <button className="btn btn__form"><img src={arrowIcon} alt="Arrow icon" /></button>
            </form>
        </div>
    )
}

export default SearchForm;