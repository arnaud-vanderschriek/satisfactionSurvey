import React from 'react'
import { connect } from 'react-redux'
import Dashboard from '../../../workerhomePage/Dashboard'
import UserForm from '../../userForm/UserForm'
import WorkerA from './A/WorkerA'
import WorkerB from './B/WorkerB'
import WorkerC from './C/WorkerC'
import WorkerD from './D/WorkerD'
import WorkerE from './E/WorkerE'
import WorkerF from './F/WorkerF'

function WorkerContainer(props: any) {
  if(props.user.userForm !== true){
    return <UserForm user={props.user} />
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
  
  return <Dashboard />
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkerContainer)