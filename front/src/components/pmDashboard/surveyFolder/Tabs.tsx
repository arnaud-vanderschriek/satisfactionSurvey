import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/style.css'
import { TextField } from '@mui/material';
import { connect } from 'react-redux';
import { setIndexOfUsers, SetUserEval } from '../../../redux/actions/user.action';
import { useNavigate } from 'react-router-dom';
import FiltredTabPanel from './FiltredTabPanel';
import UnFiltredTabPanel from './UnFiltredTabPanel';
import { UserStoreModel } from '../../reusable/userForm';


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

interface Props {
  user: UserStoreModel,
  users: UserStoreModel[],
  setUserEval: (data: UserStoreModel | any) => void,
}

function BasicTabs(props: Props) {
  let navigate = useNavigate()
  const [value, setValue] = React.useState(0 as number);
  const [filtredWorker, setFiltredWorker] = React.useState([] as Array<UserStoreModel>)

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const search = (e: any) => {
    let result = props.users.filter(
      (elem:any)  => (elem.lastname === e.target.value) || 
      (elem.firstname === e.target.value) || 
      (elem.classification === e.target.value)
    )

    setFiltredWorker(result)
  }

  const handlerOpinionsWorker = (indexInUsers: number, division: string) => {
    if(filtredWorker.length === 0) {
      const userFinded = props.users
        .filter((elem: any) => elem.division === division)
        .find((elem: any, index: number) => index === indexInUsers)
      
      props.setUserEval(userFinded)
    } else {
      const userFinded = filtredWorker 
        .filter((elem: any) => elem.division === division)
        .find((elem: any, index: number) => index === indexInUsers)

      props.setUserEval(userFinded)
    }

    navigate('/opinion')
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
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
        {
          (filtredWorker.length === 0) ?
            <Tabs value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              scrollButtons="auto" 
              aria-label="scrollable auto tabs example"
            >
              {props.users
                .filter((elem: any) => elem.division === props.user.division)
                .map((elem: any, index: number) => {
                  return <Tab label={elem.firstname} {...a11yProps(index)} key={index}/>
                })}
            </Tabs> 
          :
            <Tabs value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              scrollButtons="auto" 
              aria-label="scrollable auto tabs example"
            >
              {filtredWorker
                .filter((elem: any) => elem.division === props.user.division)
                .map((elem: any, index: number) => {
                  return <Tab label={elem.firstname} {...a11yProps(index)} key={index}/>
                })}
            </Tabs>
        }
        {
          (filtredWorker.length === 0) ?
            <UnFiltredTabPanel 
              value={value} 
              handlerOpinionsWorker={(indexInUsers: number, division: string) => 
                handlerOpinionsWorker(indexInUsers, division)}
            />
          :
            <FiltredTabPanel
              filtredWorker={filtredWorker} 
              value={value} 
              handlerOpinionsWorker={(indexInUsers: number, division: string) => 
                handlerOpinionsWorker(indexInUsers, division)} 
            />
        }
      </Box>
    </Box>
  )
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    users: state.users,
    userToFindInUsers: state.userToFindInUsers,
    isFetched: state.isFetched
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIndexOfUsers: (data: any) => dispatch(setIndexOfUsers(data)),
    setUserEval: (data: UserStoreModel) => dispatch(SetUserEval(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicTabs)
