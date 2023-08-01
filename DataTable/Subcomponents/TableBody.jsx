import PropTypes from 'prop-types'

export const TableBody = ({ data, searchValues, currentPage, showEntries, columns }) => {
    return (
        <tbody>
            {
                data
                    .filter(searchValues)
                    .filter((_, id) => id >= (currentPage * showEntries) && id < ((currentPage + 1) * showEntries))
                    .map((row, id) => (
                        <tr style={{ background: id % 2 === 0 ? '#F1F1F1' : '#FAFAFA', height: "2rem" }} key={id}>
                            {columns.map((col, id) => (
                                <td
                                    style={{ width: col.width, textAlign: "center" }}
                                    key={id}>{col.type === Date ? new Date(row[col.field]).toLocaleDateString() : row[col.field]}</td>
                            ))}
                        </tr>
                    ))
            }
        </tbody>
    )
}

TableBody.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchValues: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    showEntries: PropTypes.number.isRequired,
}