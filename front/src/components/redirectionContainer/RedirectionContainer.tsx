import React from 'react'
import { connect } from 'react-redux'
import Dashboard from '../pmDashboard/Dashboard'
import WorkerContainer from '../reusable/techForm/worker/WorkerContainer'

function RedirectionContainer(props: any) {
  if(props.user.poste === "ouvrier") {
    return <WorkerContainer />
  }
  if(props.user.poste === "pm") {
    return <Dashboard />
  }

  return (
    <div>RedirectionContainer ! Coucou Boubou !</div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    // SetUser: (data: UserStoreModel) => { dispatch(SetUser(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedirectionContainer)
