import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function AreaPlotChart({xAxis ,yAxis , key1, key2,colorPv , colorUv,saasData} : {xAxis: string , yAxis:string , key1:string , key2:string,colorPv:string,colorUv:string,saasData:[]}) {
   
      
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
