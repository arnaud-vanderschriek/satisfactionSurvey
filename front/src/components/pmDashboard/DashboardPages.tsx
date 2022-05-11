import React from 'react'
import { connect } from 'react-redux'
import { setLinkList } from '../../redux/actions/user.action'
import Survey from './Survey'
import DashboardContent from './DashboardContent'
import WorkerChart from './WorkerChart'


function DashboardPages(props: any) {
  switch(props.link) {
    case 'dashboard':
      return <DashboardContent />
      break;
    case 'compétences':
      return <Survey />
      break; 
    case 'workerCharts':
      return <WorkerChart />
      break;
    default:
      return <DashboardContent />
  }
}

const mapStateToProps = (state: any) => {
  return {
    link: state.link,
  }
}

export default connect(mapStateToProps, ({}))(DashboardPages);
