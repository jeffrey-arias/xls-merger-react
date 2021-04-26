import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

import {COLORS} from '../helper/helper.component'
import '../../styles/charts.css'

{/* These are pie chart specific UI calculations */}
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

export default function Piechart (props) {

    return (
      <ResponsiveContainer width="99%" height="100%">
        <PieChart>
          <Tooltip/>
          {/*<Legend layout="vetical" verticalAlign="middle" align="right" iconType="circle" iconSize={5}/>*/}
          <Pie
            data={props.data}
            cx="50%"
            cy="50%"
            label={renderCustomizedLabel}
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value">
            {props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={props.colors[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
