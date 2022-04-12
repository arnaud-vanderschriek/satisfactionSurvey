import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tabs from './Tabs';
import { connect } from 'react-redux';
import { fetchAllWorker } from '../../redux/actions/user.action';


function Survey(props: any) {
  useEffect(() => {
    props.fetchAllWorker()
  }, [])
  return (
    <Grid container spacing={6}>
      {/* Chart */}
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: '100%'
          }}
        >
          <Tabs />
        </Paper>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    users: state.users,
    putmanServicesStatsUser: state.putmanServicesStatsUser,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchAllWorker: () => dispatch(fetchAllWorker())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey)
