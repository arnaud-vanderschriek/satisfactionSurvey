import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllWorker} from '../../redux/actions/user.action'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import Title from "./Title"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
   typography: {
    fontFamily: 'Raleway, Arial',
     fontSize: 15,
  },
});   

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
          {children}
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function WorkerChart(props: any) {
  useEffect(() => {
    // fetch Tout les workers
    props.fetchAllWorker()
  }, [])

  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={6}>
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        }}
      >
       <Box sx={{ width: '100%',  height: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} 
          onChange={handleChange} 
          variant="scrollable" 
          scrollButtons="auto" 
          aria-label="scrollable auto tabs example"
        >
          { props.user.division === "Putman Services" &&
              props.users
                .filter((elem: any) => elem.division === "Putman Services")
                .map((elem: any, index: number) => {
                  return <Tab label={ elem.firstname } {...a11yProps(index)} key={index}/>
              }) 
          } 
          { props.user.division === "Infratec2" &&
              props.users
                .filter((elem: any) => elem.division === "Infratec2")
                .map((elem: any, index: number) => {
                  return <Tab label={ elem.firstname } {...a11yProps(index)} key={index}/>
              })
          }
        </Tabs> 
        {props.users
        .filter((elem: any) => elem.division === "Putman Services")
        .map((elem: any, index: number) => (
         
          <TabPanel value={value} index={index} key={index} >
            <Title>Stats: </Title>
            <div id='workerChart'>
            <RadarChart outerRadius={80} width={730} height={350} data={elem.skills}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
                <Radar name={elem.firstname} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} /> 
                <Legend />
              </RadarChart> 
            </div>
            <div id='workerChart'>
            <RadarChart outerRadius={80} width={730} height={350} data={elem.pmSkills}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 1000]}  />
                <Radar name={props.user.firstname} dataKey="value" stroke="#52e594" fill="#52e594" fillOpacity={0.6} /> 
                <Legend />
              </RadarChart> 
            </div>
              

            {/* <div>
             <Title>Données: </Title>
             <ThemeProvider theme={theme}>
              <div id='beubeubeu'>
                <Box sx={{
                    fontFamily: 'Raleway',
                    fontSize: 13,
                    mr: 10,
                    mt: 10
                  }}>
                  Nom de famille: {elem.lastname}
                  Prénom: {elem.firstname}
                  Evalutations: {elem.skills.map((item: any) => (
                    <>
                      <p>{item.name} : {item.value}</p>
	    	            </>
	                ))}
    		        </Box>
	              <Box sx={{
                    fontFamily: 'Raleway',
                    fontSize: 13,
                    mr: 10,
                    mt: 10
                  }}>
                  
                  <p>Evalutations du project manager:</p>

		             {elem.pmSkills.map((item: any) => (
                   <>
                    <p>{item.name} : {item.value}</p>
                    <p>moyenne: {((Number(item.worker) + Number(item.pm1)) / 2)}</p>
	                 </>
                 ))}
                </Box>
              </div>
            </ThemeProvider>
            </div> */}
          </TabPanel>
        ))}  
      </Box>
    </Box>
      </Paper>
    </Grid>
  </Grid>
  )
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    users: state.users,
    putmanServicesStatsUser: state.putmanServicesStatsUser,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchAllWorker: () => dispatch(fetchAllWorker()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerChart)
