import React from "react";
import arrowIcon from "../images/icon-arrow.svg";

const SearchForm = () => {
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