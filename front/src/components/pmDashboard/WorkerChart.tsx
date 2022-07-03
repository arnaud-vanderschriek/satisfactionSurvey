import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllWorker} from '../../redux/actions/user.action'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import PropTypes from 'prop-types';


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
        <Box sx={{ 
          p: 3,
          margin: 0 
          
          }}>
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
    props.fetchAllWorker()
  }, [])

  const [value, setValue] = React.useState(0);
  const [filtredWorker, setFiltredWorker] = React.useState([])
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const search = (e: any) => {
    let result = props.users.filter(
      (elem:any) => (elem.lastname === e.target.value) || 
      (elem.firstname === e.target.value) || 
      (elem.classification === e.target.value)
    )
    setFiltredWorker(result)
  }

  return (
    <React.Fragment>
      <TextField
        margin="normal"
        required
        fullWidth
        id="lastname"
        label="Nom, Prénom ou classification"
        name="lastname"
        autoComplete="lastname"
        autoFocus
        onChange={search} 
      />
        { (filtredWorker.length === 0) ?
            <Tabs value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              scrollButtons="auto" 
              aria-label="scrollable auto tabs example" 
            >
              { props.users
                  .filter((elem: any) => elem.division === props.user.division)
                  .map((elem: any, index: number) => {
                    return <Tab label={elem.firstname} {...a11yProps(index)} key={index}/>
                  }) 
              } 
            </Tabs> 
          :
            <Tabs value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              scrollButtons="auto" 
              aria-label="scrollable auto tabs example" 
            >
            { filtredWorker
                .filter((elem: any) => elem.division === props.user.division)
                .map((elem: any, index: number) => {
                  return <Tab label={elem.firstname} {...a11yProps(index)} key={index}/>
                }) 
            } 
            </Tabs>
        }
        { (filtredWorker.length === 0) ?
            props.users
              .filter((elem: any) => elem.division === props.user.division)
              .map((elem: any, index: number) => (
                <TabPanel value={value} index={index} key={index} >
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
                </TabPanel>
              ))
          :
          filtredWorker
            .filter((elem: any) => elem.division === props.user.division)
            .map((elem: any, index: number) => (
              <TabPanel value={value} index={index} key={index} >
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
              </TabPanel>
            )) 
        }
    </React.Fragment>
  );
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
