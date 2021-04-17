import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';

import '../styles/table.css';

const rows = [
    { id: 1, name: 'NIP_INFLOW_NOT_REPORTED', value: 400 },
    { id: 2, name: 'NIP_INFLOW_REPORTED', value: 300 },
    { id: 3, name: 'CASH_DEPOSIT_NOT_REPORTED', value: 250 },
    { id: 4, name:'CASH_DEPOSIT_REPORTED', value: 200 },
    { id: 5, name:'LOAN_NOT_REPORTED', value: 50 },
    { id: 6, name:'LOAN_REPORTED', value: 60 },
    { id: 7, name:'CASH_WITHDRAWAL_NOT_REPORTED', value: 70},
    { id: 8, name:'CASH_WITHDRAWAL_REPORTED', value: 80 }
  ];

const columns = [
  { field: 'name', headerName: 'Batch Type', flex: 1, headerClassName: 'tableHeader' },
  { field: 'value', headerName: 'Number of Transaction', flex: 0.5, headerClassName: 'tableHeader'  },
];

function subtotal(items) {
    return items.map(({ value }) => value).reduce((sum, i) => sum + i, 0);
  }

const totalBatches = subtotal(rows);

  
export default function EnhancedTable() {
  return (
    <div style={{ height: "100", width: "100%"}}>
      <DataGrid rows={rows} columns={columns} hideFooter={true} 
                rowHeight={30} autoHeight={true} headerHeight={40}/>
      <div className="grid-container-table">
        <div className="grid-item-table">
            <div className="tableTotalLabel">Total:</div>
        </div>
        <div className="grid-item-table">
            <div className="tableTotalValue">{totalBatches}</div>
        </div>
        </div>  
    </div>
  );
}
