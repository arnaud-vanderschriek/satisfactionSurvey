import React from 'react'
import { connect } from 'react-redux'
import { setLinkList } from '../../redux/actions/user.action'
import Survey from './Survey'
import DashboardContent from './DashboardContent'
import WorkerChart from './WorkerChart'

function DashboardPages(props: any) {
  if(props.link === 'dashboard') {
    return <DashboardContent />
  }

  if(props.link === 'compétences') {
    return <Survey />
  }

  if(props.link === 'workerCharts') {
    return <WorkerChart/>
  }

  return (
    <DashboardContent />
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPages);