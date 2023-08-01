import propTypes from "prop-types"

export const SearchBar = ({ setSearchInput }) => {
    return (
        <div className="search-container">
            <div>
                <label>Search</label>
                <input type="text" onChange={(e) => {
                    setSearchInput(e.target.value.trim())
                }} />
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    setSearchInput: propTypes.func.isRequired
}