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
      <Title>Personnal stats</Title>
      <ResponsiveContainer width={900} height="200%" >
        {/* <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,  
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart> */}
        <RadarChart outerRadius={80} width={730} height={250} data={data}>
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