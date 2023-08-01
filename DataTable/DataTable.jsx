import PropTypes from 'prop-types';
import './style.css';
import { useState } from 'react';
import { SearchBar } from './Subcomponents/SearchBar';

export const DataTable = ({ rows, columns, itemsPerPage = [], searchBar = true }) => {

    const [searchInput, setSearchInput] = useState('')

    return (
        <div className='container'>
            {searchBar && <SearchBar setSearchInput={setSearchInput} />}
        </div>
    )
}

DataTable.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemsPerPage: PropTypes.arrayOf(PropTypes.number),
    searchBar: PropTypes.bool
}

DataTable.defaultProps = {
    itemsPerPage: [],
    searchBar: true
}