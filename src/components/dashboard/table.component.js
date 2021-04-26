import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';

import '../../styles/table.css';

const columns = [
  { field: 'name', headerName: 'Batch Type', flex: 1, headerClassName: 'tableHeader' },
  { field: 'value', headerName: 'Number of Transaction', flex: 0.5, headerClassName: 'tableHeader'  },
];
 
export default function EnhancedTable(props) {
  return (
    <div style={{ height: "100", width: "100%"}}>
      <DataGrid rows={props.data} columns={columns} hideFooter={true} 
                rowHeight={30} autoHeight={true} headerHeight={40}/>
      <div className="grid-container-table">
        <div className="grid-item-table">
            <div className="tableTotalLabel">Total:</div>
        </div>
        <div className="grid-item-table">
            <div className="tableTotalValue">{props.totalValue}</div>
        </div>
        </div>  
    </div>
  );
}
