import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import store from '../../../redux/store/store';
import { connect } from 'react-redux';
import { setAddInfosUser } from '../../../redux/actions/user.action';


 function ContactForm(props: any) {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   const data = new FormData(event.currentTarget);
  //   console.log(data)
  // }

  const handleDataUserForm = (event: any) => {
    //creer une structure dans redux 
    // voir avec Fouz qu'elle question sont pertinentes
    console.log(event.target.value)
    const contactForm = {...props.additionalUserInfos}
    contactForm[event.target.name] = event.target.value
    props.setAddInfosUser(contactForm)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleDataUserForm}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handleDataUserForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleDataUserForm}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="postalCode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleDataUserForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleDataUserForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone-number"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleDataUserForm}
            />
          </Grid> 
          {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="work-number"
            name="workNumber"
            label="Work Number"
            fullWidth
            // autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleDataUserForm}
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Confirm"
          />
        </Grid>
      </Grid>
      {/* </Box> */}
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    additionalUserInfos: store.getState().additionalUserInfos
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAddInfosUser: (data: any) => dispatch(setAddInfosUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)