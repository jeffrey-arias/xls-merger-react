import React, {useEffect} from 'react';
import $ from 'jquery';

import '../styles/daterangeselector.css';
import {dateNow} from './helper.component'

export default function DateRangeSeletor () {
    useEffect (() => {
        
});

    return (
        <div style={{height:"100%", minHeight:"600px"}}>
          <div className="grid-container-single">
            <div className="grid-item-single">
                <div className="filterLabel">Select Date Range</div>   
                <form className="grid-container-date">
                        <text className="grid-item-date">Report Date:</text>
                        <input className="grid-item-date" type="date" id="reportDate" defaultValue={dateNow} required/>
                        <div/>
                        <text className="grid-item-date">Start Date :</text>
                        <input className="grid-item-date" type="date" id="dateFrom" required/>
                        <div/>
                        <text className="grid-item-date">End Date :</text>
                        <input className="grid-item-date" type="date" id="dateTo" required/>
                        <div />
                        <input className="dateRangeBtn" type="button" value="Run Report"/>
                        <div />
                        <div />

                </form>
                <div className="filterLabel">Report Log</div>
                <div className="grid-container-date-log">
                    <textarea className="dateRangeLog" value="No Log Information" contentEditable="false" />
                </div>
            </div>
          </div>     
        </div>
    );
}