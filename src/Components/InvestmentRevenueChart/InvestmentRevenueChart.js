import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './InvestmentRevenueChart.css';

const InvestmentRevenueChart = props => {
    const data=props.data;
    let numberFormat=num=>{
        if(num>999) return num/1000 +'K';
        else return num;
    }
    return (
        <div className='my-3'>
            <h5 className='investment-rev fw-bold text-center'>Investment VS. Revenue</h5>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00B8E0" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#00B8E0" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF6359" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FF6359" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={numberFormat} />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area type="monotone" dataKey="revenue" stroke="#00B8E0" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="investment" stroke="#FF6359" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default InvestmentRevenueChart;