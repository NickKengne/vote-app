import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function AreaPlotChart({xAxis ,yAxis , key1, key2,colorPv , colorUv} : {xAxis: string , yAxis:string , key1:string , key2:string,colorPv:string,colorUv:string}) {
    const saasData = [
        {
          year: "2016",
          events: 1200,
          users: 3000,
          revenue: 15000,
          expenses: 10500,
          profits: 4500,
          subscriptionGrowth: 20, // percentage
          churnRate: 5 // percentage
        },
        {
          year: "2017",
          events: 1500,
          users: 4000,
          revenue: 20000,
          expenses: 14000,
          profits: 6000,
          subscriptionGrowth: 25,
          churnRate: 4.5
        },
        {
          year: "2018",
          events: 1800,
          users: 4500,
          revenue: 25000,
          expenses: 17500,
          profits: 7500,
          subscriptionGrowth: 30,
          churnRate: 4
        },
        {
          year: "2019",
          events: 2200,
          users: 5000,
          revenue: 30000,
          expenses: 21000,
          profits: 9000,
          subscriptionGrowth: 35,
          churnRate: 3.8
        },
        {
          year: "2020",
          events: 2500,
          users: 6000,
          revenue: 35000,
          expenses: 24500,
          profits: 10500,
          subscriptionGrowth: 40,
          churnRate: 3.5
        },
        {
          year: "2021",
          events: 2800,
          users: 7000,
          revenue: 40000,
          expenses: 28000,
          profits: 12000,
          subscriptionGrowth: 45,
          churnRate: 3.2
        },
        {
          year: "2022",
          events: 3200,
          users: 8000,
          revenue: 45000,
          expenses: 31500,
          profits: 13500,
          subscriptionGrowth: 50,
          churnRate: 3
        }
      ];
      
  return (
        <>
          <ResponsiveContainer width="100%" height="100%" >
            <AreaChart width={730} height={250} data={saasData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colorUv} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={colorUv} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colorPv} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={colorPv} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey={xAxis} />
              <YAxis dataKey={yAxis}/>
              <Tooltip />
              <Area type="monotone" dataKey={key1} stroke={colorUv} fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey={key2} stroke={colorPv} fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
          </ResponsiveContainer>
        </>
  )
}
