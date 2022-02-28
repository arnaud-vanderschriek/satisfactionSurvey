import React from 'react'
import { connect } from 'react-redux';
import store from '../../../redux/store/store';
import WorkerA from './A/WorkerA'
import WorkerB from './B/WorkerB';
import WorkerC from './C/WorkerC';
import WorkerD from './D/WorkerD';
import WorkerE from './E/WorkerE';
import WorkerF from './F/WorkerF';
import UserForm from '../userForm/UserForm'
import Dashboard from '../../homePage/Dashboard'

function WorkerContainer(props: any) {

  if(props.user.userForm !== true){
    return <UserForm user={props.user}/>
  }
  if(props.user.classification === "A" && props.user.techForm !== true) {
    return <WorkerA />
  }
  if(props.user.classification === "B" && props.user.techForm !== true) {
    return <WorkerB />
  }  
  if(props.user.classification === "C" && props.user.techForm !== true) {
    return <WorkerC />
  }  
  if(props.user.classification === "D" && props.user.techForm !== true) {
    return <WorkerD />
  }  
  if(props.user.classification === "E" && props.user.techForm !== true) {
    return <WorkerE />
  }
  if(props.user.classification === "F" && props.user.techForm !== true) {
    return <WorkerF />
  }
  
  return <Dashboard  user={props.user} />
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkerContainer)