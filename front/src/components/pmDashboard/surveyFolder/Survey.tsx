import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tabs from './Tabs';
import { connect } from 'react-redux';
import { fetchAllWorker } from '../../../redux/actions/user.action';
import "../styles/style.css";


function Survey(props: any) {
  useEffect(() => {
    props.fetchAllWorker()
  }, [])
  
  return (
    <React.Fragment>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 'auto',
              width: '100%'
            }}> 
              {
                props.isFetching === true ?
                <div className="lds-dual-ring"></div>
                :
                <Tabs />
              }
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}


const mapStateToProps = (state: any) => {
  return {
    users: state.users,
    isFetching: state.isFetching,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchAllWorker: () => dispatch(fetchAllWorker()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey)

