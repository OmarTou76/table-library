import PropTypes from 'prop-types'

export const TableHeader = ({ data, setData, headers, setHeaders, rows }) => {

    const handleSort = (col) => {
        let sort;
        switch (col.sortedBy) {
            case null:
                sort = "ASC"
                setData([...data].sort((a, b) => {
                    if (col.type === Date)
                        return a[col.field] - b[col.field]
                    return a[col.field].localeCompare(b[col.field])
                }))
                break;
            case 'ASC':
                sort = "DES"
                setData([...data].sort((a, b) => {
                    if (col.type === Date)
                        return b[col.field] - a[col.field]
                    return b[col.field].localeCompare(a[col.field])
                }))
                break
            case 'DES':
                sort = null
                setData([...rows])
                break;
        }
        setHeaders(
            [...headers]
                .map(header => ({
                    ...header,
                    sortedBy: col.headerName === header.headerName ? sort : null
                })));
    }


    return (
        <thead>
            <tr>
                {headers
                    .map(column => {
                        <th style={{ width: column.width ?? 'auto' }} key={column.field}
                            onClick={() => column.sortable !== false && handleSort(column)}>
                            <div className="table-header">
                                <span>
                                    {column.headerName}
                                </span>
                                {
                                    column.sortable !== false &&
                                    <div className="container-header-icon">
                                        <div className="header-icon"
                                            style={{ borderBottom: `8px solid ${column.sortedBy === "DES" ? "blue" : "lightgray"}` }} />
                                        <div className="header-icon" style={{
                                            borderTop: `8px solid ${column.sortedBy === "ASC" ? "blue" : "lightgray"}`,
                                        }} />
                                    </div>
                                }
                            </div>
                        </th>
                    })}
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    setData: PropTypes.func.isRequired,
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    setHeaders: PropTypes.func.isRequired,
}