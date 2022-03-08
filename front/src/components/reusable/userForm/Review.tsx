import * as React from 'react';
import Typography from '@mui/material/Typography';
import store from '../../../redux/store/store';
import { connect } from 'react-redux';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Grid from '@mui/material/Grid';

// const products = [
//   {
//     name: 'Vanderschrieck',
//     firstname: 'Arnaud',
//     address: 'Av Capart 44',
//     Téléphone: '0497146811',
//   },
//   {
//     name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45',
//   },
//   {
//     name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51',
//   },
//   {
//     name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11',
//   },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];
// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

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
      {/* <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List> */}
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    additionalUserInfos: store.getState().additionalUserInfos
  }
}

export default connect(mapStateToProps)(Review)