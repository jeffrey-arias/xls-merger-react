import React, { PureComponent } from 'react';
import '../styles/filter.css'


const rows = [
    { id: 1, name: 'NIP_INFLOW_NOT_REPORTED', value: 400 },
    { id: 2, name: 'NIP_INFLOW_REPORTED', value: 300 },
    { id: 3, name: 'CASH_DEPOSIT_NOT_REPORTED', value: 300 },
    { id: 4, name:'CASH_DEPOSIT_REPORTED', value: 200 },
    { id: 5, name:'LOAN_NOT_REPORTED', value: 50 },
    { id: 6, name:'LOAN_REPORTED', value: 60 },
    { id: 7, name:'CASH_WITHDRAWAL_NOT_REPORTED', value: 70},
    { id: 8, name:'CASH_WITHDRAWAL_REPORTED', value: 80 }
  ];

const columns = [
  { field: 'name', headerName: 'Batch Type', flex: 1, headerClassName: 'tableHeader' },
  { field: 'value', headerName: 'Number of Batches', flex: 0.5, headerClassName: 'tableHeader'  },
];

function subtotal(items) {
    return items.map(({ value }) => value).reduce((sum, i) => sum + i, 0);
  }

function getCurrentDate () {
    var curr = new Date();
    curr.setDate(curr.getDate());
    return curr.toLocaleDateString("en-GB").substr(0,10);
}

const dateFrom = getCurrentDate();
const dateTo = getCurrentDate();

const totalBatches = subtotal(rows);

export default class FilterBox extends React.PureComponent {

    render () {
        return (
            <div>
                <div className="grid-container-filter">
                    <div className="grid-item-filter">
                        <div className="filterLabel">Transaction Date:</div>
                        <div className="flex-container">
                            <input type="text" className="dateBox" disabled defaultValue={dateFrom}/>
                             <span>&nbsp;to&nbsp;</span>
                             <input type="text" className="dateBox" defaultValue={dateTo} disabled />
                        </div>
                    </div>
                    <div className="grid-item-filter">
                        <div className="filterLabel">Total no. of Transactions:</div>
                        <div className="totalBatchTxn"> {totalBatches}</div>
                    </div>
                </div>
                <div className="grid-container-filter">
                    <div className="grid-item-filter" >
                        <div className="filterLabel">Filter by:</div>
                            <form action="/action_page.php">
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="CASH_DEPOSIT_NOT_REPORTED"/>
                                    <label for="vehicle1">CASH_DEPOSIT_NOT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="CASH_DEPOSIT_REPORTED"/>
                                    <label for="vehicle1">CASH_DEPOSIT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="CASH_WITHDRAWAL_NOT_REPORTED"/>
                                    <label for="vehicle1">CASH_WITHDRAWAL_NOT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="CASH_WITHDRAWAL_REPORTED"/>
                                    <label for="vehicle1">CASH_WITHDRAWAL_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="LOAN_NOT_REPORTED"/>
                                    <label for="vehicle1">LOAN_NOT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="LOAN_REPORTED"/>
                                    <label for="vehicle1">LOAN_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="NIP_INFLOW_NOT_REPORTED"/>
                                    <label for="vehicle1">NIP_INFLOW_NOT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="NIP_INFLOW_NOT_REPORTED"/>
                                    <label for="vehicle1">NIP_INFLOW_NOT_REPORTED</label>
                                </div>     
                            </form>
                    </div>
                    <div className="grid-item-filter">
                        <div className="filterLabel">Other Actions:</div>
                        <div className="filterBtn">
                            <input type="button" value="Submit" className="button"/>
                            <input type="button" value="Export & Send" className="buttonExport"/>
                        </div>
                        <div>&nbsp;&nbsp;Logs:</div>
                        <textarea className="filterLog" value="SUCCESS!"></textarea>
                    </div>
                </div>
            </div>
        )
    }
    
}