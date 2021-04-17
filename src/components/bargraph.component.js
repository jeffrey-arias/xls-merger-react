import { data } from 'jquery';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, LabelList, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

import '../styles/charts.css'

const COLORS = ['#0088FE', '#9EC1CF','#9EE09E','#00C49F', '#B19CD9', '#FFBB28','#FF8042','#FF6663'];
const COLOR_MAP = new Map([
    ["NIP_INFLOW_NOT_REPORTED", "#0088FE"],
    ["NIP_INFLOW_REPORTED","#9EC1CF"],
    ["CASH_DEPOSIT_NOT_REPORTED","#9EE09E"],
    ["CASH_DEPOSIT_REPORTED","#00C49F"],
    ["LOAN_NOT_REPORTED","#B19CD9"],
    ["LOAN_REPORTED","#FFBB28"],
    ["CASH_WITHDRAWAL_NOT_REPORTED","#FF8042"],
    ["CASH_WITHDRAWAL_REPORTED","#FF6663"]

]);

const subdata = [
    { name: 'NIP_INFLOW_NOT_REPORTED', value: 400 },
    { name: 'NIP_INFLOW_REPORTED', value: 300 },
    { name: 'CASH_DEPOSIT_NOT_REPORTED', value: 250 },
    { name: 'CASH_DEPOSIT_REPORTED', value: 200 },
    { name: 'LOAN_NOT_REPORTED', value: 50 },
    { name: 'LOAN_REPORTED', value: 60 },
    { name: 'CASH_WITHDRAWAL_NOT_REPORTED', value: 70},
    { name: 'CASH_WITHDRAWAL_REPORTED', value: 80 }]

function subtotal(items) {
    return items.map(({ value }) => value).reduce((sum, i) => sum + i, 0);
  }

const totalValue = subtotal(subdata);

const renderColorfulLegendText = (value, entry) => {
    const color = COLOR_MAP.get(value);
    return <span style={{ color }}>{value}</span>;
  };

  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const percentage = ((value / totalValue)*100).toFixed(0);

    return (
        <g><text x={x + width / 2} y={y-5} textAnchor="middle" dominantBaseline="middle">{percentage}%</text></g>
        
    );
  }
export default class BargraphClickable extends PureComponent {
  state = {
    data: [
        { name: 'NIP_INFLOW_NOT_REPORTED', value: 400 },
        { name: 'NIP_INFLOW_REPORTED', value: 300 },
        { name: 'CASH_DEPOSIT_NOT_REPORTED', value: 250 },
        { name: 'CASH_DEPOSIT_REPORTED', value: 200 },
        { name: 'LOAN_NOT_REPORTED', value: 50 },
        { name: 'LOAN_REPORTED', value: 60 },
        { name: 'CASH_WITHDRAWAL_NOT_REPORTED', value: 70},
        { name: 'CASH_WITHDRAWAL_REPORTED', value: 80 }]
  };
  
  render() {
    const { data } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <p style={{textAlign: "center"}}>Transaction Batches </p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}
          margin={{
            top: 18,
            right: 15,
            left: 20,
            bottom: 5,
          }}>
            <Bar dataKey="value" fill="#8884d8"  > {
                this.state.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
                ))
            }
                <LabelList dataKey="value" content={renderCustomizedLabel} />
            </Bar>
            {/*<Legend layout="horizontal"  align="right" layout="vertical" verticalAlign="top"
                    dy={-100}
                    payload={
                        data.map(
                        item => ({
                            id: item.name,
                            type: "line",
                            value: `${item.name}`,
                        })
                        )
                    }
                    formatter={renderColorfulLegendText}
                />*/}

            <XAxis dataKey="name" scale="point" padding={{ left: 40, right: 20 }}
                alignt="left" hide={true} axisLine={false}/>
            <YAxis axisLine={false} padding={{ left: 100, bottom: 20}}>
                <Label dx={-20} value="Count of Batches" angle={-90} position="insideLeft" className="centerLabel"></Label>
            </YAxis>
            <Tooltip />
            </BarChart>
        </ResponsiveContainer>
        <p className="content"></p> 
      </div>
    );
  }
}