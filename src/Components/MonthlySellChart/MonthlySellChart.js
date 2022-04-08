import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './MonthlySellChart.css';

const MonthlySellChart = (props) => {
    const data=props.data;
    return (
        <div className='my-3'>
            <h5 className='monthly-sale text-center fw-bold'>Our Monthly Sale</h5>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month" }/>
                    <YAxis />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#FF6359" />
                </LineChart>
           </ResponsiveContainer>
        </div>
    );
};

export default MonthlySellChart;