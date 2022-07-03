import React from 'react'
import { connect } from 'react-redux'
import Survey from './surveyFolder/Survey'
import OverviewContent from './overviewContentFolder/OverviewContent'
import WorkerChart from './WorkerChart'


function DashboardPages(props: any) {
  switch(props.link) {
    case 'overview':
      return <OverviewContent />
    case 'compétences':
      return <Survey />
    case 'workerCharts':
      return <WorkerChart />
    default:
      return <OverviewContent />
  }
}

const mapStateToProps = (state: any) => {
  return {
    link: state.link,
  }
}

export default connect(mapStateToProps)(DashboardPages);
