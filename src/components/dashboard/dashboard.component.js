import '../../styles/app.css';

import Piechart from './piechart.component';
import BargraphClickable from './bargraph.component';
import EnhancedTable from './table.component'
import FilterBox from './filter.component';
import Legend from './legend.component'
import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
class Dashboard extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state  = {
      data : [{ id: 1, name: 'NIP_INFLOW_NOT_REPORTED', value: 1 },
              { id: 2, name: 'NIP_INFLOW_REPORTED', value: 1 },
              { id: 3, name: 'CASH_DEPOSIT_NOT_REPORTED', value: 1 },
              { id: 4, name:'CASH_DEPOSIT_REPORTED', value: 1 },
              { id: 5, name:'LOAN_NOT_REPORTED', value: 1 },
              { id: 6, name:'LOAN_REPORTED', value: 1 },
              { id: 7, name:'CASH_WITHDRAWAL_NOT_REPORTED', value: 1},
              { id: 8, name:'CASH_WITHDRAWAL_REPORTED', value: 1}
            ], 
      totalValue : 8
    };
  }

  render () {
    console.log(this.props);
    return (
      <div id="dashboard" style={{display: "inline", position:"relative,", width:"100%"}}>
        <div className="grid-container-triple">
          <div className="grid-item-triple"> 
            <Piechart data={this.props.data} totalValue={this.props.totalValue}
                                 colors={this.props.colors}/>
          </div>
          <div className="grid-item-triple">
              <BargraphClickable data={this.props.data} totalValue={this.props.totalValue}
                                 colors={this.props.colors}/>
          </div>
          <div className="grid-item-triple">
              <Legend />
          </div>
        </div>
        <div className="grid-container">
            <div className="grid-item">
              <EnhancedTable data={this.props.data} totalValue={this.props.totalValue} />
            </div>
            <div className="grid-item">
              <FilterBox totalValue={this.state.totalValue} />
            </div>
          </div>
        </div>
    );
  }
/*
  componentDidUpdate () {
    if (this.props.CASH_DEPOSIT_NOT_REPORTED == false) {
      this.setState ({
        data : [{ id: 1, name: 'NIP_INFLOW_NOT_REPORTED', value: 1 },
        { id: 2, name: 'NIP_INFLOW_REPORTED', value: 1 },
        { id: 4, name:'CASH_DEPOSIT_REPORTED', value: 1 },
        { id: 5, name:'LOAN_NOT_REPORTED', value: 1 },
        { id: 6, name:'LOAN_REPORTED', value: 1 },
        { id: 7, name:'CASH_WITHDRAWAL_NOT_REPORTED', value: 1},
        { id: 8, name:'CASH_WITHDRAWAL_REPORTED', value: 1}
        ], 
        totalValue : 8
      }); 
    }
    else if (this.props.CASH_DEPOSIT_NOT_REPORTED == true) {
      this.setState ({
        data : [{ id: 1, name: 'NIP_INFLOW_NOT_REPORTED', value: 1 },
        { id: 2, name: 'NIP_INFLOW_REPORTED', value: 1 },
        { id: 3, name: 'CASH_DEPOSIT_NOT_REPORTED', value: 1 },
        { id: 4, name:'CASH_DEPOSIT_REPORTED', value: 1 },
        { id: 5, name:'LOAN_NOT_REPORTED', value: 1 },
        { id: 6, name:'LOAN_REPORTED', value: 1 },
        { id: 7, name:'CASH_WITHDRAWAL_NOT_REPORTED', value: 1},
        { id: 8, name:'CASH_WITHDRAWAL_REPORTED', value: 1}
        ], 
        totalValue : 8
      }); 
    }
  }*/


}

const mapStateToProps = ( state ) => {
  console.log("Fetching from datastore: ",state);
  return {
      data : state.data,
      totalValue : state.totalValue,
      colors : state.colors
  }   
}

export default connect( mapStateToProps)( Dashboard )