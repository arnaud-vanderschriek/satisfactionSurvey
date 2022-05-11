import React from 'react'
import { connect } from 'react-redux'
import Dashboard from '../pmDashboard/Dashboard'
import WorkerContainer from '../reusable/techForm/worker/WorkerContainer'


function RedirectionContainer(props: any) {
  switch (props.user.poste){
   case 'ouvrier' :
      return <WorkerContainer />
      break;
   case 'pm' :
      return <Dashboard />
      break;
   default :
     return <RedirectionContainer />
     break;
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, ({}))(RedirectionContainer)
