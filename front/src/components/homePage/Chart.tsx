import * as React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import Title from './Title';

// Generate Sales Data
// function createData(time: number, amount?: number, data?: number) {
//   return { time, amount};
// }

// const data = [
//   createData(1000, 500, 60000000000),
//   createData(2555 , 1000),
//   createData(600, 2600),
//   createData(40, 800),
//   createData(50, 1500),
//   createData(50, 2000),
//   createData(14, 2400),
// ];
const data = [
  {
    "subject": "Manoeuvre",
    "A": 500,
    // "B": 700,
    // "C  ": 150
  },
  {
    "subject": "Plan éléctrique",
    "A": 200,
    // "B": 700,
    // "C": 150
  },
  {
    "subject": "Pose de tableau",
    "A": 1000,
    // "B": 700,
    // "C": 150
  },
  {
    "subject": "Tirage de cable",
    "A": 300,
    // "B": 700,
    // "C": 150
  },  {
    "subject": "prises",
    "A": 400,
    // "B": 700,
    // "C": 150
  },  {
    "subject": "Plan",
    "A": 200,
    // "B": 700,
    // "C": 150
  },
  // {
  //   "subject": "Geography",  
  //   "A": 99,
  //   "B": 100,
  //   "fullMark": 150
  // },
  // {
  //   "subject": "Physics",
  //   "A": 85,
  //   "B": 90,
  //   "fullMark": 150
  // },
  // {
  //   "subject": "History",
  //   "A": 65,
  //   "B": 85,
  //   "fullMark": 150
  // }
]

export default function Chart() {
  // const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Personnal stats</Title>
      <ResponsiveContainer width={900} height="300%" >
        <RadarChart outerRadius={80} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          {/* <Radar name="Mike" dataKey="B" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Mike" dataKey="C" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} /> */}

          {/* <Radar name="claire" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Radar name="Youssef" dataKey="C  " stroke="##FFFFFF" fill="#FFFFFF" fillOpacity={0.1} /> */}
          <Legend />
      </RadarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}