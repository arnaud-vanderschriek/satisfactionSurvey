import React from 'react'
import { connect } from 'react-redux';
import store from '../../../redux/store/store';
import WorkerContainer from './worker/WorkerContainer';

function PutmanServicesContainer(props: any) {
  if(props.user.poste === "ouvrier") {
    return <WorkerContainer />
  }

  if(props.user.poste === "pm") {

  }

  return <PutmanServicesContainer />
  
}

const mapStateToProps = (state: any) => {
  return {
    user: store.getState().user,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    // SetUser: (data: UserStoreModel) => { dispatch(SetUser(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PutmanServicesContainer)