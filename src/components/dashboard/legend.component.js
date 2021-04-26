import React, {useEffect} from 'react';
import $ from 'jquery';

import '../../styles/legend.css'

const COLORS = ['#0088FE', '#9EC1CF','#9EE09E','#00C49F', '#B19CD9', '#FFBB28','#FF8042','#FF6663'];


export default function Legend () {
    useEffect (() => {
        $('#legendLabel li').each(function(i){
            $(this).css("color", COLORS[i]);
        })
        }
    )

    return (
        <div style={{height:"100%", display:"block"}} id="legend">
            <div className="filterLabel">Legend</div>
            <div className="legendList">
            <ul id="legendLabel" >
                <li>NIP_INFLOW_NOT_REPORTED</li>
                <li>NIP_INFLOW_REPORTED</li>
                <li>CASH_DEPOSIT_NOT_REPORTED</li>
                <li>CASH_DEPOSIT_REPORTED</li>
                <li>LOAN_NOT_REPORTED</li>
                <li>LOAN_REPORTED</li>
                <li>CASH_WITHDRAWAL_NOT_REPORTED</li>
                <li>CASH_WITHDRAWAL_REPORTED</li>
            </ul>
            </div>
        </div>
            );
}