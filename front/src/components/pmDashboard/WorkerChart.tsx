import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './styles/style.css'
import { Button, Card, CardContent } from '@mui/material';
import { connect } from 'react-redux';
import { fetchAllWorker, setIndexOfUsers, setIsFetched, SetUserEval } from '../../redux/actions/user.action';
import OpinionOnWorker from '../reusable/techForm/worker/OpinionOnWorker';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import axios from 'axios';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    _id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function BasicTabs(props: any) {
  useEffect(() => {
    props.fetchAllWorker()
  }, [])
  let navigate = useNavigate()
  const [manoeuvre, setManoeuvre] = useState(0)
  const [electricPlan, setElectricPlan] = useState(0)
  const [electricBox, setElectricBox] = useState(0)
  const [cable, setCable] = useState(0)
  const [plug, setPlug] = useState(0)
  const [buildingPlan, setBuildingPlan] = useState(0)

  const [checksonnel, setChecksonnel] = useState()
  const [skillsExplorer, setSkillsExplorer] = useState()
  const [cartoSkills, setCartoSkills] = useState()
  const [mapSkills, setMapSkills] = useState()
  const [skillsnetwork, setSkillsnetwork] = useState()
  const [skillBook, setSkillBook] = useState()
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const infosChartOnWorker = (props: any) => {
    if(props.user.division === "Putman Services") {
        axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/api/user/getDataTechForm/${props.userEval._id}`,
          withCredentials: true,
        }).then((res) => {
          if(res.data.errors) {
            console.log("errors")
          } else {
            setManoeuvre(res.data[0].manoeuvre)
            setElectricPlan(res.data[0].electricPlan)
            setElectricBox(res.data[0].electricBox)
            setCable(res.data[0].cable)
            setPlug(res.data[0].plug)
            setBuildingPlan(res.data[0].buildingPlan)
          }
        }).catch((err) => {
          setManoeuvre(0)
          setElectricPlan(0)
          setElectricBox(0)
          setCable(0)
          setPlug(0)
          setBuildingPlan(0)
        })
      }
  
      if(props.user.division === "Infratec2") {
        axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/api/user/getDataTechFormInfratec2/${props.userEval._id}`,
          withCredentials: true,
        }).then((res) => {
          if(res.data.errors) {
            console.log("errors")
          } else {
              setChecksonnel(res.data[0].checksonnel)
              setSkillsExplorer(res.data[0].skillsExplorer)
              setCartoSkills(res.data[0].cartoSkills)
              setMapSkills(res.data[0].mapSkills)
              setSkillsnetwork(res.data[0].skillsnetwork)
              setSkillBook(res.data[0].skillBook)
          }
        }).catch((err) => {
          console.log(err, 'catch Errors');
        })
      }
    }
  

  const handleOpinionsOnWorker = (indexInUsers: number) => {
    props.setIndexOfUsers(indexInUsers)
    const userFinded = props.users.find((elem: any, index: number) => index === indexInUsers)  
    props.SetUserEval(userFinded)
    infosChartOnWorker(props)

  }

    const dataPutmanServices = [
    {
      "name": "manoeuvre",
      "value": manoeuvre,
    },
    {
      "name": "plan electrique",
      "value": electricPlan,
    },
    {
      "name": "Pose de tableau",
      "value": electricBox,
    },
    {
      "name": "Tirage de cable",
      "value": cable,
    },  {
      "name": "Prises",
      "value": plug,
    },  {
      "name": "Plan",
      "value": buildingPlan,
    }, 
  ]

  const dataInfratec2 = [
    {
      "name": "checksonnel",
      "value": checksonnel,
    },
    {
      "name": "skillsExplorer",
      "value": skillsExplorer,
    },
    {
      "name": "cartoSkills",
      "value": cartoSkills,
    },
    {
      "name": "mapSkills",
      "value": mapSkills,
    },  {
      "name": "skillsnetwork",
      "value": skillsnetwork,
    },  {
      "name": "skillBook",
      "value": skillBook,
    }, 
  ]

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} 
          onChange={handleChange} 
          variant="scrollable" 
          scrollButtons="auto" 
          aria-label="scrollable auto tabs example"
        >
          {props.user.division === "Putman Services" ? 
            props.users
              .filter((elem: any) => elem.division === "Putman Services")
              .map((elem: any, index: number) => {
                return <Tab label={elem.firstname} {...a11yProps(index)} />
            }) : 
            props.users
              .filter((elem: any) => elem.division === "Infractec2")
              .map((elem: any, index: number) => {
                return <Tab label={elem.firstname} {...a11yProps(index)} />
            })
          }
        </Tabs>
        {props.users.map((elem: any, index: number) => (
          <TabPanel value={value} index={index}>
            <div id='beubeubeu'>
              <Card sx={{ marginRight: '5px', width: '100%', height: 'auto' }}>  
                <CardContent>
                  <Typography sx={{ fontSize: '0.9rem' }} color="text.secondary" gutterBottom>
                  {props.user.division === "Putman Services" ? 
                    <RadarChart outerRadius={80} width={730} height={350} data={dataPutmanServices}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" />
                      <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
                      <Radar name={elem.firstname} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      {/* <Radar name={props.user.firstname} dataKey="value" stroke="#8884d8" fill="#27eaa6" fillOpacity={0.6} /> */}
                      <Legend />
                    </RadarChart> 
                      : 
                      <RadarChart outerRadius={80} width={730} height={250} data={dataInfratec2}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
                        <Radar name={elem.firstname} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                }
                  </Typography>
                </CardContent>
              </Card> 
            </div>
            <div>
              <Button id='tabs-button' 
                onClick={() => handleOpinionsOnWorker(index)} 
                variant="contained" 
                size="small"
              > 
                Voir l'opinion de {elem.firstname}
              </Button>
            </div>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    users: state.users,
    userEval: state.userEval,
    userToFindInUsers: state.userToFindInUsers,
    isFetched: state.isFetched
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIndexOfUsers: (data: any) => dispatch(setIndexOfUsers(data)),
    SetUserEval: (data: any) => dispatch(SetUserEval(data)),
    setIsFetched: (data: any) => dispatch(setIsFetched(data)),
    fetchAllWorker: () => dispatch(fetchAllWorker())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicTabs)






// import axios from 'axios';
// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
// import Title from './Title';


// function WorkerChart(props: any) {
//   const [manoeuvre, setManoeuvre] = useState()
//   const [electricPlan, setElectricPlan] = useState()
//   const [electricBox, setElectricBox] = useState()
//   const [cable, setCable] = useState()
//   const [plug, setPlug] = useState()
//   const [buildingPlan, setBuildingPlan] = useState()

//   const [checksonnel, setChecksonnel] = useState()
//   const [skillsExplorer, setSkillsExplorer] = useState()
//   const [cartoSkills, setCartoSkills] = useState()
//   const [mapSkills, setMapSkills] = useState()
//   const [skillsnetwork, setSkillsnetwork] = useState()
//   const [skillBook, setSkillBook] = useState()

//   useEffect(() => {
//     if(props.isFetched) {
//       if(props.user.division === "Putman Services") {
//         axios({
//           method: "get",
//           url: `${process.env.REACT_APP_API_URL}/api/user/getDataTechForm/${props.userEval.id}`,
//           withCredentials: true,
//         }).then((res) => {
//           if(res.data.errors) {
//             console.log("errors")
//           } else {
//               setManoeuvre(res.data[0].manoeuvre)
//               setElectricPlan(res.data[0].electricPlan)
//               setElectricBox(res.data[0].electricBox)
//               setCable(res.data[0].cable)
//               setPlug(res.data[0].plug)
//               setBuildingPlan(res.data[0].buildingPlan)
//           }
//         }).catch((err) => {
//           console.log(err, 'catch Errors');
//         })
//       }
  
//       if(props.user.division === "Infratec2") {
//         axios({
//           method: "get",
//           url: `${process.env.REACT_APP_API_URL}/api/user/getDataTechFormInfratec2/${props.userEval.id}`,
//           withCredentials: true,
//         }).then((res) => {
//           if(res.data.errors) {
//             console.log("errors")
//           } else {
//               setChecksonnel(res.data[0].checksonnel)
//               setSkillsExplorer(res.data[0].skillsExplorer)
//               setCartoSkills(res.data[0].cartoSkills)
//               setMapSkills(res.data[0].mapSkills)
//               setSkillsnetwork(res.data[0].skillsnetwork)
//               setSkillBook(res.data[0].skillBook)
//           }
//         }).catch((err) => {
//           console.log(err, 'catch Errors');
//         })
//       }
//     }
    
//   })
 
//   const dataPutmanServices = [
//     {
//       "name": "manoeuvre",
//       "value": manoeuvre,
//     },
//     {
//       "name": "plan electrique",
//       "value": electricPlan,
//     },
//     {
//       "name": "Pose de tableau",
//       "value": electricBox,
//     },
//     {
//       "name": "Tirage de cable",
//       "value": cable,
//     },  {
//       "name": "Prises",
//       "value": plug,
//     },  {
//       "name": "Plan",
//       "value": buildingPlan,
//     }, 
//   ]

//   const dataInfratec2 = [
//     {
//       "name": "checksonnel",
//       "value": checksonnel,
//     },
//     {
//       "name": "skillsExplorer",
//       "value": skillsExplorer,
//     },
//     {
//       "name": "cartoSkills",
//       "value": cartoSkills,
//     },
//     {
//       "name": "mapSkills",
//       "value": mapSkills,
//     },  {
//       "name": "skillsnetwork",
//       "value": skillsnetwork,
//     },  {
//       "name": "skillBook",
//       "value": skillBook,
//     }, 
//   ]

//   return (
//     <React.Fragment>
//       <Title>Personnal stats</Title>
//       <ResponsiveContainer width='100%' height="300%" >
//         {props.user.division === "Putman Services" ? 
//          <RadarChart outerRadius={80} width={730} height={350} data={dataPutmanServices}>
//           <PolarGrid />
//           <PolarAngleAxis dataKey="name" />
//           <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
//           <Radar name={props.user.firstname} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//           <Legend />
//         </RadarChart> 
//           : 
//           <RadarChart outerRadius={80} width={730} height={250} data={dataInfratec2}>
//             <PolarGrid />
//             <PolarAngleAxis dataKey="name" />
//             <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
//             <Radar name={props.user.firstname} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//             <Legend />
//         </RadarChart>
//      }
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }

// const mapStateToProps = (state: any) => {
//   return {
//     user: state.user,
//     putmanServicesStatsUser: state.putmanServicesStatsUser,
//     infratec2StatsUser: state.infratec2StatsUser,
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(WorkerChart)