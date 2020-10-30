import React, { useContext } from "react";
import arrowIcon from "../images/icon-arrow.svg";
import IpinfoDtails from "../contexts/IpinfoDetails";

const SearchForm = () => {
    const [ipInfo, setIpInfo] = useContext(IpinfoDtails);

    return (
        <div className="search">
            <form className="search-form">
                <label htmlFor="search">
                    <input
                        id="search"
                        name="search"
                        placeholder="Search for any IP address or domain"
                    />
                </label>
                <button className="btn btn__form"><img src={arrowIcon} alt="Arrow icon" /></button>
            </form>
        </div>
    )
}

export default SearchForm;