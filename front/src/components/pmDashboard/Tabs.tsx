import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './styles/style.css'
import { Button, Card, CardContent } from '@mui/material';
import { connect } from 'react-redux';
import { setIndexOfUsers, SetUserEval } from '../../redux/actions/user.action';

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

function BasicTabs(props: any) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };


  const handleOpinionsOnWorker = (indexInUsers: number) => {
    props.setIndexOfUsers(indexInUsers)
    const userFinded = props.users.find((elem: any, index: number) => index === indexInUsers)  
    props.SetUserEval(userFinded)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
          {props.user.division === "Putman Services" ? 
            props.users.filter((elem: any) => elem.division === "Putman Services").map((elem: any, index: number) => {
              return <Tab label={elem.firstname} {...a11yProps(index)} />
            }) : 
            props.users.filter((elem: any) => elem.division === "Infractec2").map((elem: any, index: number) => {
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
                    <div className="dataInfosinTabs">
                      <p>Lastname: { elem.lastname }</p>
                      <p>Firstname: { elem.firstname }</p>
                      <p>Division: { elem.division }</p>
                      <p>Poste: { elem.poste }</p>
                      <p>Classification: { elem.classification }</p>
                      <p>Adresse 1: { elem.address1 }</p>
                      <p>Adresse 2: { elem.address2 }</p>
                      <p>City: { elem.city }</p>
                    </div>
                  </Typography>
                </CardContent>
              </Card> 
            </div>
            <div>
              <Button id='tabs-button' onClick={() => handleOpinionsOnWorker(index)} variant="contained" size="small"> Donner son opinion sur {elem.firstname}</Button>
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
    userToFindInUsers: state.userToFindInUsers,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIndexOfUsers: (data: any) => dispatch(setIndexOfUsers(data)),
    SetUserEval: (data: any) => dispatch(SetUserEval(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicTabs)