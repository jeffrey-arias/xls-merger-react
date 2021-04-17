import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

import '../styles/charts.css'

const data = [
  { name: 'NIP_INFLOW_NOT_REPORTED', value: 400 },
  { name: 'NIP_INFLOW_REPORTED', value: 300 },
  { name: 'CASH_DEPOSIT_NOT_REPORTED', value: 250 },
  { name: 'CASH_DEPOSIT_REPORTED', value: 200 },
  { name: 'LOAN_NOT_REPORTED', value: 50 },
  { name: 'LOAN_REPORTED', value: 60 },
  { name: 'CASH_WITHDRAWAL_NOT_REPORTED', value: 70},
  { name: 'CASH_WITHDRAWAL_REPORTED', value: 80 }
];

const COLORS = ['#0088FE', '#9EC1CF','#9EE09E','#00C49F', '#B19CD9', '#FFBB28','#FF8042','#FF6663'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default class Piechart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="99%" height="100%">
        <PieChart>
          <Tooltip/>
          {/*<Legend layout="vetical" verticalAlign="middle" align="right" iconType="circle" iconSize={5}/>*/}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label={renderCustomizedLabel}
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
