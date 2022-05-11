import Tab from '@mui/material/Tab'
import React from 'react'
import { connect } from 'react-redux';

function a11yProps(index: number) {
  return {
    _id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabsFiltred(props: any) {
  if(props.user.division === "Putman Services") {
    props.users.filter((elem: any) => elem.division === "Putman Services").map((elem: any, index: number) => {
      return <Tab label={elem.firstname} {...a11yProps(index)} />
  })
}
  if(props.user.division === "Infratec2") {
    props.users.filter((elem: any) => elem.division === "Infratec2").map((elem: any, index: number) => {
      return <Tab label={elem.firstname} {...a11yProps(index)} />
    })
        
  }
  return <div>Coucou</div>
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    users: state.users,
    techInfos2: state.techInfos2
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsFiltred)