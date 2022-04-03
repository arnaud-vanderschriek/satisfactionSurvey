import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PmContainer from './pm/PmContainer';
import WorkerContainer from './worker/WorkerContainer';

function PutmanServicesContainer(props: any, index?: any) {
  useEffect(() => {
    // faire un fetch 
  })
  
  if(props.user.poste === "ouvrier") {
    return <WorkerContainer />
  }
  if(props.user.poste === "pm") {
    return <PmContainer />
  }

  return <PutmanServicesContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(PutmanServicesContainer)

