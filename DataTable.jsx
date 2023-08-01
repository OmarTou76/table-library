import PropTypes from 'prop-types';

export const DataTable = ({ rows, columns, itemsPerPage = [] }) => {

}

DataTable.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemsPerPage: PropTypes.arrayOf(PropTypes.number)
}