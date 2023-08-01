import PropTypes from 'prop-types';
import './style.css';
import { useState } from 'react';
import { SearchBar } from './Subcomponents/SearchBar';
import { TableHeader } from './Subcomponents/TableHeader';
import { TableBody } from './Subcomponents/TableBody';

export const DataTable = ({ rows, columns, itemsPerPage = [], searchBar = true }) => {

    const [searchInput, setSearchInput] = useState('')

    const [data, setData] = useState([...rows])

    const [headers, setHeaders] = useState([...columns].map(col => ({
        ...col,
        sortedBy: null
    })))

    const [showEntries, setShowEntries] = useState(itemsPerPage.length ? itemsPerPage[0] : [data.length])
    const [currentPage, setCurrentPage] = useState(0)

    const searchValues = (row) => {
        const { id, ...newRow } = row
        return Object
            .entries(newRow)
            .filter(([key]) => {
                const foundCol = headers.find(col => col.field === key)
                return foundCol.searchable !== false
            })
            .some(([_, values]) => typeof values === 'string' && values.toLowerCase().trim().includes(searchInput.toLowerCase()))
    }

    return (
        <div className='container'>
            {searchBar && <SearchBar setSearchInput={setSearchInput} />}
            <table width="100%">
                <TableHeader data={data} setData={setData} headers={headers} setHeaders={setHeaders} rows={rows} />
                <TableBody data={data} searchValues={searchValues} currentPage={currentPage} showEntries={showEntries} columns={columns} />
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