import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, LabelList, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

import '../../styles/charts.css'

{/*const renderColorfulLegendText = (value, entry) => {
    const color = COLOR_MAP.get(value);
    return <span style={{ color }}>{value}</span>;
  };*/}


export default function BargraphClickable (props) { 
    
    const renderCustomizedLabel = (params) => {
      const { x, y, width, height, value } = params;
      const percentage = ((value / props.totalValue)*100).toFixed(0);
        return (
            <g><text x={x + width / 2} y={y-5} textAnchor="middle" dominantBaseline="middle">{percentage}%</text></g>   
        );
    }

    return (
      <div style={{ width: '100%' }}>
        <p style={{textAlign: "center"}}>Transaction Batches </p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={props.data}
            margin={{
            top: 18,
            right: 15,
            left: 20,
            bottom: 5,
          }}
          width={10}>
            <Bar dataKey="value" fill="#8884d8" width="20" maxBarSize={60}> {
                props.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={props.colors[index % 20]} />
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