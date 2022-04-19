import * as React from 'react';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';


function Review(props: any) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Thank you for your time
      </Typography>
      <p>adresse 1: {props.additionalUserInfos.address1}</p>
      <p>adresse 2: {props.additionalUserInfos.address2}</p>
      <p>Ville: {props.additionalUserInfos.city}</p>
      <p>Pays: {props.additionalUserInfos.country}</p>
      <p>Code Postal: {props.additionalUserInfos.postalCode} </p>
      <p>Numéro de téléphone: {props.additionalUserInfos.phoneNumber}</p>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    additionalUserInfos: state.additionalUserInfos
  }
}

export default connect(mapStateToProps)(Review)