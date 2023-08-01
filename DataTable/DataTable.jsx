import PropTypes from 'prop-types';
import './style.css';
import { useState } from 'react';
import { SearchBar } from './Subcomponents/SearchBar';
import { TableHeader } from './Subcomponents/TableHeader';

export const DataTable = ({ rows, columns, itemsPerPage = [], searchBar = true }) => {

    const [searchInput, setSearchInput] = useState('')

    const [data, setData] = useState([...rows])

    const [headers, setHeaders] = useState([...columns].map(col => ({
        ...col,
        sortedBy: null
    })))

    return (
        <div className='container'>
            {searchBar && <SearchBar setSearchInput={setSearchInput} />}
            <table width="100%">
                <TableHeader data={data} setData={setData} headers={headers} setHeaders={setHeaders} rows={rows} />
            </table>
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