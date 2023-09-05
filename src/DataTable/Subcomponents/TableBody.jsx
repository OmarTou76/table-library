import PropTypes from 'prop-types'

export const TableBody = ({ data, searchValues, currentPage, showEntries, headers, theme }) => {
    const gridColors = {
        light: theme?.gridColors?.light ?? '#F1F1F1',
        dark: theme?.gridColors?.dark ?? '#FAFAFA',
        selectedCol: theme?.gridColors?.selectedCol ?? 'rgba(100, 100, 100, .1)'
    }
    return (
        <tbody>
            {
                data
                    .filter(searchValues)
                    .filter((_, id) => id >= (currentPage * showEntries) && id < ((currentPage + 1) * showEntries))
                    .map((row, id) => (
                        <tr style={{ background: id % 2 === 0 ? gridColors.light : gridColors.dark, height: "2rem" }} key={id}>
                            {headers.map((header, id) => (
                                <td
                                    style={{
                                        width: header.width, textAlign: "center",
                                        background: header.sortedBy && gridColors.selectedCol,
                                    }}
                                    key={id}>{header.type === Date ? new Date(row[header.field]).toLocaleDateString() : row[header.field]}</td>
                            ))}
                        </tr>
                    ))
            }
        </tbody>
    )
}

TableBody.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchValues: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    showEntries: PropTypes.number.isRequired,
    theme: PropTypes.object,
}