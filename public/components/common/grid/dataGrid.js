import React, { Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
export const DataGrid = ({ columns = [], data = [], pagination = false, sortable = false, filterable = false, paginationPageSize=0}) => {
    return (
        <section className="ag-theme-balham data-grid">
            <AgGridReact rowData={data} columnDefs={columns} pagination={pagination} filterable={filterable} enableRangeSelection={pagination} paginationPageSize={paginationPageSize} sizeColumnsToFit={true}/>
        </section>
    )

};