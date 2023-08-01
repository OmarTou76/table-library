import PropTypes from 'prop-types'

export const Pagination = ({ itemsPerPage, showEntries, setShowEntries, data, currentPage, searchValues, setCurrentPage }) => {
    return (
        <div className="pagination-container">
            <div style={{ display: "flex", gap: '1rem' }}>
                <label>Rows per page:</label>
                {itemsPerPage.length ?
                    <select value={showEntries} onChange={(e) => {
                        setShowEntries(parseInt(e.target.value))
                    }}>
                        {itemsPerPage.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select> :
                    <span>{data.filter(searchValues).length}</span>
                }
            </div>
            <div>
                <span>
                    {(currentPage * showEntries) + 1}
                    -
                    {(currentPage + 1) * showEntries > data.filter(searchValues).length ? data.filter(searchValues).length : (currentPage + 1) * showEntries}
                    {' '} of {' '}
                    {data.filter(searchValues).length}
                </span>
            </div>
            <div className="pagination">
                <button className="pagination-btn" disabled={currentPage === 0} onClick={() => setCurrentPage(page => page - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" /></svg>
                </button>
                <span>{currentPage + 1}</span>
                <button className="pagination-btn" disabled={(currentPage + 1 >= Math.ceil(data.filter(searchValues).length / showEntries))}
                    onClick={() => setCurrentPage((page) => page + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg>
                </button>
            </div>
        </div>

    )
}

Pagination.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchValues: PropTypes.func.isRequired,
    setShowEntries: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    showEntries: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.arrayOf(PropTypes.number)
}