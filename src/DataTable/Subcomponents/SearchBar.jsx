import propTypes from "prop-types"
// eslint-disable-next-line no-unused-vars
import React from 'react';

export const SearchBar = ({ setSearchInput, theme }) => {
    return (
        <div className="search-container">
            <div>
                <label style={{ color: theme?.text?.dark }}>Search</label>
                <input type="text" style={{ color: theme?.text?.dark }} onChange={(e) => {
                    setSearchInput(e.target.value.trim())
                }} />
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    setSearchInput: propTypes.func.isRequired,
    theme: propTypes.object
}