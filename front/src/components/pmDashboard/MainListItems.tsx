import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { connect } from 'react-redux';
import { setLinkList } from '../../redux/actions/user.action';
import Button from '@mui/material/Button';


function MainListItems(props: any) {
  

  return (
    <React.Fragment>
    <ListItemButton onClick={() => {props.setLinkList('dashboard')}}>
      <ListItemIcon >
          <DashboardIcon  />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={() => {props.setLinkList('compétences')}}>
      <ListItemIcon >
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Compétences" />
    </ListItemButton >
    <ListItemButton onClick={() => {props.setLinkList('workerCharts')}} >
      <ListItemIcon  >
        <BarChartIcon  />
      </ListItemIcon>
      <ListItemText primary="Graphiques" />
    </ListItemButton>
  </React.Fragment>
  )
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mois en cours" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Dernier quart" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Vente annuelle" />
    </ListItemButton>
  </React.Fragment>
);

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    putmanServicesStatsUser: state.putmanServicesStatsUser,
    infratec2StatsUser: state.infratec2StatsUser,
    link: state.link,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setLinkList:  (data: String) => dispatch(setLinkList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainListItems);
