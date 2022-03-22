import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './styles/style.css'
import { Button, Card, CardContent } from '@mui/material';
import { setTechInfos } from '../../redux/actions/user.action';
import { connect } from 'react-redux';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function sendIndexWorkerToCharts(index: any)  {
  // enregistrer l'index dans redux pour l'afficher dans chart.
  console.log(index, 'index in button')
}

function BasicTabs(props: any) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
        {props.users.map((elem: any, index: number) => (
          <Tab label={elem.firstname} {...a11yProps(index)} />
        ))} 
          </Tabs>
        {props.users.map((elem: any, index: number) => (
          <TabPanel value={value} index={index}>
            <div id='beubeubeu'>
              <Card   sx={{marginRight: '5px', width: '100%', height: 'auto'}}>  
                <CardContent>
                  <Typography sx={{ fontSize: '0.9rem' }} color="text.secondary" gutterBottom>
                    <div className="dataInfosinTabs">
                      <p>Lastname: {elem.lastname}</p>
                      <p>Firstname: {elem.firstname}</p>
                      <p>Division: {elem.division}</p>
                      <p>Poste: {elem.poste}</p>
                      <p>Classification: {elem.classification}</p>
                      <p>Division: {elem.division}</p>
                      <p>Adresse 1: {elem.address1}</p>
                      <p>Adresse 2: {elem.address2}</p>
                      <p>City: {elem.city}</p>
                    </div>
                  </Typography>
                </CardContent>
              </Card> 
            </div>
            <div>
              <Button id='tabs-button' onClick={() => sendIndexWorkerToCharts(index)} variant="contained" size="small">{elem.firstname}</Button>
            </div>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return {
    users: state.users,
    techInfos2: state.techInfos2
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTechInfos: (data: any) => dispatch(setTechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicTabs)