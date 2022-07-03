import * as React from 'react';
import Title from './Title';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';


function PersonnalDetails(props: any) {
  return (
    <React.Fragment>
      <Title>Personnal details</Title>
        <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
          <p>Lastname: {props.user.lastName}</p>
          <p>Firstname: {props.user.firstname}</p>
          <p>Poste: {props.user.poste}</p>
          <p>Classification: {props.user.classification}</p>
          <p>Division:{props.user.division}</p>
          <p>Dernière Mise à jour: {props.user.date}</p>
        </Typography>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(PersonnalDetails)