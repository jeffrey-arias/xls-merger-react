import React, {useEffect, useState} from 'react'; 

import '../../styles/daterangeselector.css';
import {dateNowISO} from '../helper/helper.component';
import axios from 'axios';
import {connect} from 'react-redux';

class DateRangeSeletor extends React.PureComponent  {
    
    constructor (props) {
        super(props);
        this.state = {
            dateFrom: "",
            dateTo : "",
            logInfo : "No Log Information"
        };
    }

    handleChange = (e) => {
        if (e.target.id == "dateFrom") {
            this.setState(state => ({ dateFrom: e.target.value}));
        }
        if (e.target.id == "dateTo") {
            this.setState(state => ({ dateTo: e.target.value}));        
        }
    };

    handleClear = (e) => {
        this.setState(state => ({logInfo : "No Log Information"}));
    };
 
    fetchDashBoardData = (e) => {
        const newline = String.fromCharCode(13, 10);
        let newLogInfo = "";
        if (this.state.dateFrom == "" || this.state.dateTo == "") {
            alert("The Start Date and End Date fields are required");
            if (this.state.logInfo === "No Log Information") {
                this.setState(state => ({ logInfo: "Error on date field(s)"}));
            } else {
                newLogInfo = this.state.logInfo + newline + "Error on date field(s)";
                this.setState(state => ({ logInfo: newLogInfo}));
            }
            return;
        }
        else {
            const tmpDateFrom = new Date(this.state.dateFrom).getTime();
            const tmpDateTo = new Date(this.state.dateTo).getTime();
            if (tmpDateFrom < tmpDateTo || tmpDateFrom == tmpDateTo) {
                this.setState(state => ({ logInfo: newLogInfo}));
            }
            else {
                alert("The Start Date must be earlier than the End Date");
                if (this.state.logInfo === "No Log Information") {
                    this.setState(state => ({ logInfo: "Error on date field(s)"}));
                } else {
                    newLogInfo = this.state.logInfo + newline + "Error on date field(s)";
                    this.setState(state => ({ logInfo: newLogInfo}));
                }
                return;
            }
        }

        if (this.state.logInfo === "No Log Information") {
            newLogInfo = "Running report...";
            this.setState(state => ({ logInfo: "Running report..."}));
        } else {
            newLogInfo = this.state.logInfo + newline + "Running report...";
            this.setState(state => ({ logInfo: newLogInfo}));
        }
        
        axios.get("http://localhost:8080/dashboard/createReport",
        {params: {
            dateFrom: this.state.dateFrom,
            dateTo : this.state.dateTo
        }})
        .then(({ data }) => {
            console.log("API call successfull, data: ",data);
            newLogInfo = newLogInfo + newline + data.status;
            this.setState({logInfo : newLogInfo});
            data.dateFrom = this.state.dateFrom;
            data.dateTo = this.state.dateTo;

            this.handleDispatch(data);
        }).catch (error => console.log(error));
    }
       
    handleDispatch = (data) => {
        this.props.dispatch({type: "UPDATE_DASHBOARD_DATA", data});
    } 

    render () {
        return (
            <div style={{height:"98vh", minHeight:"600px", width:"100%"}}>
            <div className="grid-container-single" style={{height:"100%"}}>
                <div className="grid-item-single" style={{height:"100%"}}>
                    <div className="filterLabel">Select Date Range</div>   
                    <form className="grid-container-date">
                            <text className="grid-item-date">Report Date:</text>
                            <input className="grid-item-date" type="date" id="reportDate" defaultValue={dateNowISO} required/>
                            <div/>
                            <text className="grid-item-date">Start Date :</text>
                            <input className="grid-item-date" type="date" id="dateFrom" required onChange={this.handleChange} />
                            <div/>
                            <text className="grid-item-date">End Date :</text>
                            <input className="grid-item-date" type="date" id="dateTo" required onChange={this.handleChange}/>
                            <div />
                            <input className="dateRangeBtn" type="button" value="Run Report" onClick={this.fetchDashBoardData}/>
                            <div />
                            <div />

                    </form>
                    <div className="filterLabel">Report Log</div>
                    <div className="grid-container-date-log">
                        <textarea className="dateRangeLog" value={this.state.logInfo} disabled />
                    </div>
                    <input className="dateRangeBtn" type="button" value="Clear Logs" onClick={this.handleClear}/>

                </div>
            </div>     
            </div>
        )
    }

    componentDidUpdate() {
        console.log(this.state);
    }

}

const mapStateToProps = ( state ) => {
    console.log("Fetching from datastore: ",state);
    return {
        data : state.data,
        totalValue : state.totalValue,
        colors : state.colors
    }   
  }

export default connect( mapStateToProps)( DateRangeSeletor )

  