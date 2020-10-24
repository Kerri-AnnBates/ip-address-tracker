import React from "react";
import IPDataBlock from "./IPDataBlock";
import SearchForm from "./SearchForm";

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1 className="header__title">IP Address Tracker</h1>
                <SearchForm />
                <IPDataBlock />
            </div>
        </header>
    )
}

export default Header;