import React from 'react'
import { connect } from 'react-redux'
import { SetUser } from '../../redux/actions/user.action'
import Dashboard from '../pmDashboard/Dashboard'
import WorkerContainer from '../reusable/techForm/worker/WorkerContainer'
import { UserStoreModel } from '../reusable/userForm'


function RedirectionContainer(props: any) {
  switch (props.user.poste){
    case 'ouvrier' :
      return <WorkerContainer />
    case 'pm' :
      return <Dashboard />
    default :
      return <RedirectionContainer />
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    SetUser: (data: UserStoreModel) => { dispatch(SetUser(data)) },
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(RedirectionContainer)
