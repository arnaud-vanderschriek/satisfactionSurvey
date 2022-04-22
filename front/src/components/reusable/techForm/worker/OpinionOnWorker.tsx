import React from 'react'
import { connect } from 'react-redux'
import WorkerA from './A/WorkerA'
import WorkerB from './B/WorkerB'
import WorkerC from './C/WorkerC'
import WorkerD from './D/WorkerD'
import WorkerE from './E/WorkerE'
import WorkerF from './F/WorkerF'

function OpinionOnWorker(props: any) {
  // if(props.userEval.userForm !== true){
  //   return <UserForm user={props.user} />
  // }
  if(props.userEval.classification === "A") {
    return <WorkerA />
  }
  if(props.userEval.classification === "B") {
    return <WorkerB />
  }  
  if(props.userEval.classification === "C") {
    return <WorkerC />
  }  
  if(props.userEval.classification === "D") {
  return <WorkerD />
  } 
  if(props.userEval.classification === "E") {
    return <WorkerE />
  }
  if(props.userEval.classification === "F") {
    return <WorkerF />
  }

  return (
    <div>OpinionOnWorker</div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    userEval: state.userEval,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    // SetUser: (data: UserStoreModel) => { dispatch(SetUser(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OpinionOnWorker)

