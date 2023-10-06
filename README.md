# React Data Table Component

React Data Table Lib is a React library that simplifies the creation of customizable data tables. This library allows you to easily create feature-rich data tables with minimal configuration.

## Installation

To install React Data Table Lib, you can use npm or yarn. Here's how:

`npm install react-data-table-lib`

or 

`yarn install react-data-table-lib`

## Import the component

```javascript
import { DataTable } from 'react-data-table-lib'
```

## Example in component

```javascript
import { DataTable } from 'react-data-table-lib'

const columnsTable = [
    { field: 'firstName', headerName: 'First Name', width: 130, type: String },
    { field: 'lastName', headerName: 'Last Name', width: 130, type: String, searchable: false  },
    { field: 'city', headerName: 'City', width: 130, type: String, sortable: false },
]

const rows = [
    {
        "id": 0
        "firstName": "John",
        "lastName": "Doe",
        "city": "Kansas",
    },
    {
        "id": 1
        "firstName": "Doe",
        "lastName": "John",
        "city": "Washington",
    }
]

export default function Employees() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataTable
        searchBar
        rows={rows}
        columns={columnsTable}
        itemsPerPage={[5, 10]}
      />
    </div>
  );
}
```

## Properties

**React Data Table Component** library provides several properties to customize and configure your data tables. Here is the list of available properties:

- **`columns` (Array)**: This property is required and specifies the columns of your data table. Each column should be defined as an object with the following properties:
  - `field` (String): The name of the field in your data corresponding to this column.
  - `headerName` (String): The name displayed in the column header.
  - `width` (Number): The width of the column in pixels.
  - `type` (String, optional): The data type of the column (e.g., "String," "Number," etc.).
  - `searchable` (Boolean, optional): Indicates whether this column is included in the search (default is `true`).
  - `sortable` (Boolean, optional): Indicates whether this column is sortable (default is `true`).

- **`rows` (Array)**: This property is required and specifies the data to be displayed in the table. Each item in the array should be an object representing a data row.

- **`searchBar` (Boolean)**: This optional property enables or disables the search bar in the table (default is `true`).

- **`itemsPerPage` (Array)**: This optional property sets the number of items to display per page. You can specify an array of options, e.g., `[5, 10]`, to allow users to choose the number of items per page (default is `1`).


## NPM Link

https://www.npmjs.com/package/react-data-table-lib