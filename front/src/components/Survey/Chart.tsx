import * as React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time: number, amount?: number) {
  return { time, amount};
}

const data = [
  createData(1000, 500),
  createData( 2555 , 1000),
  createData(600, 2600),
  createData(40, 800),
  createData(50, 1500),
  createData(50, 2000),
  createData(14, 2400),
];

export default function Chart() {
  // const theme = useTheme();
  return (
    <React.Fragment>
      <Title>Stats</Title>
      <ResponsiveContainer width={1150} height={250} >
        <RadarChart outerRadius={80} width={900} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]}  />
          <Radar name="Mike" dataKey="time" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="amount" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
      </RadarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}