import PropTypes from 'prop-types'

export const TableHeader = ({ data, setData, headers, setHeaders, rows, theme }) => {

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

    const gridColors = {
        light: theme?.primary?.light ?? 'lightgray',
        dark: theme?.primary?.dark ?? 'black',
    }
    return (
        <thead style={{ borderColor: theme?.primary?.dark }}>
            <tr>
                {headers.map(col =>
                    <th style={{ width: col.width }} key={col.field}
                        onClick={() => col.sortable !== false && handleSort(col)}
                    >
                        <div className='table-header'>
                            <span>
                                {col.headerName}
                            </span>
                            {
                                col.sortable !== false &&
                                <div className="container-header-icon">
                                    <div className="header-icon" style={{
                                        backgroundColor: col.sortedBy === "DES" ? gridColors.dark : gridColors.light
                                    }} />
                                    <div className="header-icon" style={{
                                        backgroundColor: col.sortedBy === "ASC" ? gridColors.dark : gridColors.light
                                    }} />
                                </div>
                            }
                        </div>

                    </th>)}
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
    theme: PropTypes.object,
}