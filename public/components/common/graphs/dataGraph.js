import React, { Fragment } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';


export const RenderLineChart = ({ data = [], curves = '', width = 0, height = 0, top=0 ,left=0 ,right=0 ,bottom = 0 }) => (
    <LineChart width={width} height={height} data={data} margin={{ top: top, right: left, bottom: right, left: bottom }} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="transactionId" />
        <YAxis name="Amount"/>
        <Tooltip dataKey='transactionType'/>
        <Legend />
        <Line type="monotone" dataKey="Visa" stroke="red" />
        <Line type="monotone" dataKey="American Express" stroke="green" name=""/>
        <Line type="monotone" dataKey="DBS PayLa" stroke="yellow" name=""/>
</LineChart>);