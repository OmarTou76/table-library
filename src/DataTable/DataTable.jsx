import PropTypes from 'prop-types';
import './style.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useEffect, useState } from 'react';
import { SearchBar } from './Subcomponents/SearchBar';
import { TableHeader } from './Subcomponents/TableHeader';
import { TableBody } from './Subcomponents/TableBody';
import { Pagination } from './Subcomponents/Pagination';

const DataTableProps = {
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemsPerPage: PropTypes.arrayOf(PropTypes.number),
    searchBar: PropTypes.bool,
    theme: PropTypes.object
};

/**
 * Data table component
 * @param {React.FC<InferProps<DataTableProps>>}
 * @returns {React.ReactElement} Table component
 */

const DataTable = ({ rows, columns, itemsPerPage = [], searchBar = true, theme = {} }) => {

    const [searchInput, setSearchInput] = useState('')

    const [data, setData] = useState([...rows])

    const [headers, setHeaders] = useState([...columns].map(col => ({
        ...col,
        sortedBy: null
    })))

    const [showEntries, setShowEntries] = useState(itemsPerPage.length ? itemsPerPage[0] : data.length)
    const [currentPage, setCurrentPage] = useState(0)

    const searchValues = (row) => {
        /* eslint-disable no-unused-vars */
        const { id, ...newRow } = row
        return Object
            .entries(newRow)
            .filter(([key]) => {
                const foundCol = headers.find(col => col.field === key)
                return foundCol.searchable !== false
            })
            .some(([_, values]) => typeof values === 'string' && values.toLowerCase().trim().includes(searchInput.toLowerCase()))
    }

    useEffect(() => {
        setCurrentPage(0)
    }, [showEntries, searchInput])

    return (
        <div className='container' style={{ borderColor: theme?.primary?.dark }}>
            {searchBar && <SearchBar setSearchInput={setSearchInput} theme={theme} />}
            <table width="100%">
                <TableHeader data={data} setData={setData}
                    headers={headers} setHeaders={setHeaders} rows={rows} theme={theme} />
                <TableBody data={data} searchValues={searchValues} currentPage={currentPage} showEntries={showEntries} headers={headers} theme={theme} />
            </table>
            <Pagination itemsPerPage={itemsPerPage} showEntries={showEntries} setShowEntries={setShowEntries} data={data} currentPage={currentPage} searchValues={searchValues} setCurrentPage={setCurrentPage} columns={columns} theme={theme} />
        </div>
    )
}

DataTable.propTypes = DataTableProps

DataTable.defaultProps = {
    itemsPerPage: [],
    searchBar: true
}

export default DataTable