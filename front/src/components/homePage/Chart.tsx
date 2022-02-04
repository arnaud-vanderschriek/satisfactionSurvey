import * as React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { setTechInfos } from '../../redux/actions/user.action';
import store from '../../redux/store/store';
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
// const data = [
//   {
//     "name": "Manoeuvre",
//     "value": 500,
//     // "B": 700,
//     // "C  ": 150
//   },
//   {
//     "name": "Plan éléctrique",
//     "value": 200,
//     // "B": 700,
//     // "C": 150
//   },
//   {
//     "name": "Pose de tableau",
//     "value": 1000,
//     // "B": 700,
//     // "C": 150
//   },
//   {
//     "name": "Tirage de cable",
//     "value": 300,
//     // "B": 700,
//     // "C": 150
//   },  {
//     "name": "Prises",
//     "value": 400,
//     // "B": 700,
//     // "C": 150
//   },  {
//     "name": "Plan",
//     "value": 200,
//     // "B": 700,
//     // "C": 150
//   },
//   // {
//   //   "subject": "Geography",  
//   //   "A": 99,
//   //   "B": 100,
//   //   "fullMark": 150
//   // },
//   // {
//   //   "subject": "Physics",
//   //   "A": 85,
//   //   "B": 90,
//   //   "fullMark": 150
//   // },
//   // {
//   //   "subject": "History",
//   //   "A": 65,
//   //   "B": 85,
//   //   "fullMark": 150
//   // }
// ]

function Chart(props: any) {
  // const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Personnal stats</Title>
      <ResponsiveContainer width={900} height="300%" >
        <RadarChart outerRadius={80} width={730} height={250} data={props.techInfos}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
          <Radar name={props.user.firstname} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
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


const mapStateToProps = (state: any) => {
  return {
    user: store.getState().user,
    techInfos: store.getState().techInfos
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTechInfos: (data: any) => dispatch(setTechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)