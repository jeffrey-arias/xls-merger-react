import React, { PureComponent } from 'react';
import '../../styles/filter.css'

import {dateNow, getFormattedDate, exportToPDF, buildDispatchName} from '../helper/helper.component';
import {connect} from 'react-redux';
import Dashboard from '../dashboard/dashboard.component';
import BargraphClickable from '../dashboard/bargraph.component'
class FilterBox extends React.PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            totalValue : 0,
            CASH_DEPOSIT_NOT_REPORTED : true,
            CASH_DEPOSIT_REPORTED: true,
            CASH_WITHDRAWAL_NOT_REPORTED : true,
            CASH_WITHDRAWAL_REPORTED : true,
            LOAN_NOT_REPORTED : true,
            LOAN_REPORTED : true,
            NIP_INFLOW_NOT_REPORTED : true,
            NIP_INFLOW_REPORTED : true
        };
    }
    
    // toggleCheckBox = (e) => {
    //     this.setState(state => ({ [e.target.dataset.name]: e.target.checked}));
    //     switch (e.target.dataset.name) {
    //         case  "CASH_DEPOSIT_NOT_REPORTED" :
    //             if (e.target.checked) {
    //                 this.props.dispatch({type: "TOGGLE_CASH_DEPOSIT_NOT_REPORTED_TRUE"});
    //             } else {
    //                 this.props.dispatch({type: "TOGGLE_CASH_DEPOSIT_NOT_REPORTED_FALSE"});
    //             }
    //             return;
    //         case  "CASH_DEPOSIT_REPORTED" :
    //             if (e.target.checked) {
    //                 this.props.dispatch({type: "TOGGLE_CASH_DEPOSIT_REPORTED_TRUE"});
    //             } else {
    //                 this.props.dispatch({type: "TOGGLE_CASH_DEPOSIT_REPORTED_FALSE"});
    //             }
    //             return;
    //         case  "CASH_WITHDRAWAL_NOT_REPORTED" :
    //             if (e.target.checked) {
    //                 this.props.dispatch({type: "TOGGLE_CASH_WITHDRAWAL_NOT_REPORTED_TRUE"});
    //             } else {
    //                 this.props.dispatch({type: "TOGGLE_CASH_WITHDRAWAL_NOT_REPORTED_FALSE"});
    //             }
    //             return;
    //         case  "CASH_WITHDRAWAL_REPORTED" :
    //             if (e.target.checked) {
    //                 this.props.dispatch({type: "TOGGLE_CASH_WITHDRAWAL_REPORTED_TRUE"});
    //             } else {
    //                 this.props.dispatch({type: "TOGGLE_CASH_WITHDRAWAL_REPORTED_FALSE"});
    //             }
    //             return;
    //         case  "LOAN_NOT_REPORTED" :
    //             if (e.target.checked) {
    //                 this.props.dispatch({type: "TOGGLE_LOAN_NOT_REPORTED_TRUE"});
    //             } else {
    //                 this.props.dispatch({type: "TOGGLE_LOAN_NOT_REPORTED_FALSE"});
    //             }
    //             return;
    //         case  "LOAN_REPORTED" :
    //             if (e.target.checked) {
    //                 this.props.dispatch({type: "TOGGLE_LOAN_REPORTED_TRUE"});
    //             } else {
    //                 this.props.dispatch({type: "TOGGLE_LOAN_REPORTED_FALSE"});
    //             }
    //             return;
    //         case  "NIP_INFLOW_NOT_REPORTED" :
    //             if (e.target.checked) {
    //                 this.props.dispatch({type: "TOGGLE_NIP_INFLOW_NOT_REPORTED_TRUE"});
    //             } else {
    //                 this.props.dispatch({type: "TOGGLE_NIP_INFLOW_NOT_REPORTED_FALSE"});
    //             }
    //             return;
    //         case  "NIP_INFLOW_REPORTED" :
    //             if (e.target.checked) {
    //                 this.props.dispatch({type: "TOGGLE_NIP_INFLOW_REPORTED_TRUE"});
    //             } else {
    //                 this.props.dispatch({type: "TOGGLE_NIP_INFLOW_REPORTED_FALSE"});
    //             }
    //             return;
    //         default : return;

    //     }
    // };
    toggleCheckBox = (e) => {
        this.setState(state => ({ [e.target.dataset.name]: e.target.checked}));
            if (e.target.checked) {
                this.props.dispatch({type: buildDispatchName(e.target.dataset.name, "TRUE") });
            } else {
                this.props.dispatch({type: buildDispatchName(e.target.dataset.name, "FALSE") });
            }
    };
    
    exportAsPDF () {
        console.log('Exporting page as PDF...');
        exportToPDF();
    }

    render () {

        return (
            <div>
                <div className="grid-container-filter">
                    <div className="grid-item-filter">
                        <div className="filterLabel">Transaction Date:</div>
                        <div className="flex-container">
                            <input type="text" className="dateBox" defaultValue={dateNow} value={this.props.dateFrom} disabled />
                             <span>&nbsp;to&nbsp;</span>
                             <input type="text" className="dateBox" defaultValue={dateNow} value={this.props.dateTo} disabled />
                        </div>
                    </div>
                    <div className="grid-item-filter">
                        <div className="filterLabel">Total no. of Transactions:</div>
                        <div className="totalBatchTxn"> {this.props.totalValue}</div>
                    </div>
                </div>
                <div className="grid-container-filter">
                    <div className="grid-item-filter" >
                        <div className="filterLabel">Filter by:</div>
                            <div className="filterCheckBox">
                                    <input type="checkbox" value="NIP_INFLOW_NOT_REPORTED"
                                            data-name="NIP_INFLOW_NOT_REPORTED" onClick={this.toggleCheckBox}
                                            checked={this.state.NIP_INFLOW_NOT_REPORTED}/>
                                    <label>NIP_INFLOW_NOT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="NIP_INFLOW_REPORTED"
                                            data-name="NIP_INFLOW_REPORTED" onClick={this.toggleCheckBox}
                                            checked={this.state.NIP_INFLOW_REPORTED}/>
                                    <label>NIP_INFLOW_REPORTED</label>
                                </div> 
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="CASH_DEPOSIT_NOT_REPORTED" 
                                            data-name="CASH_DEPOSIT_NOT_REPORTED" onClick={this.toggleCheckBox} 
                                            checked={this.state.CASH_DEPOSIT_NOT_REPORTED} />
                                    <label>CASH_DEPOSIT_NOT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="CASH_DEPOSIT_REPORTED"
                                            data-name="CASH_DEPOSIT_REPORTED" onClick={this.toggleCheckBox}
                                            checked={this.state.CASH_DEPOSIT_REPORTED} />
                                    <label>CASH_DEPOSIT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="LOAN_NOT_REPORTED"
                                            data-name="LOAN_NOT_REPORTED" onClick={this.toggleCheckBox}
                                            checked={this.state.LOAN_NOT_REPORTED}/>
                                    <label>LOAN_NOT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="LOAN_REPORTED"
                                            data-name="LOAN_REPORTED" onClick={this.toggleCheckBox}
                                            checked={this.state.LOAN_REPORTED}/>
                                    <label>LOAN_REPORTED</label>
                                </div> 
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="CASH_WITHDRAWAL_NOT_REPORTED"
                                            data-name="CASH_WITHDRAWAL_NOT_REPORTED" onClick={this.toggleCheckBox}
                                            checked={this.state.CASH_WITHDRAWAL_NOT_REPORTED}/>
                                    <label for="vehicle1">CASH_WITHDRAWAL_NOT_REPORTED</label>
                                </div>
                                <div className="filterCheckBox">
                                    <input type="checkbox" value="CASH_WITHDRAWAL_REPORTED"
                                            data-name="CASH_WITHDRAWAL_REPORTED" onClick={this.toggleCheckBox}
                                            checked={this.state.CASH_WITHDRAWAL_REPORTED}/>
                                    <label for="vehicle1">CASH_WITHDRAWAL_REPORTED</label>
                                </div>
                                   
                    </div>
                    <div className="grid-item-filter">
                        <div className="filterLabel">Other Actions:</div>
                        <div className="filterBtn">
                            {/*<input type="button" value="Submit" className="button"/>*/}
                            <input type="button" value="Export & Send" className="buttonExport" onClick={this.exportAsPDF}/>
                        </div>
                        <div>&nbsp;&nbsp;Logs:</div>
                        <textarea className="filterLog" defaultValue="No Log Information..."></textarea>
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    console.log("Fetching from datastore: ",state);
    return {
        data : state.data,
        totalValue : state.totalValue,
        dateFrom : getFormattedDate(state.dateFrom),
        dateTo : getFormattedDate(state.dateTo),
        colors : state.colors
    }   
}
export default connect(mapStateToProps)(FilterBox);

