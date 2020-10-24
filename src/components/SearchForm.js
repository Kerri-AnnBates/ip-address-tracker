import React from "react";
import arrowIcon from "../images/icon-arrow.svg";

const SearchForm = () => {
    return (
        <div className="search">
            <form>
                <label for="search">
                    <input
                        id="search"
                        name="search"
                        placeholder="Search for any IP address or domain"
                    />
                </label>
                <button className="btn"><img src={arrowIcon} alt="Arrow icon" /></button>
            </form>
        </div>
    )
}

export default SearchForm;