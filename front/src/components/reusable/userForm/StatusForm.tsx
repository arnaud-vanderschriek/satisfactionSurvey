import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';


export default function PaymentForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    console.log(data)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Position in company
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Service"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="Poste"
            label="Poste"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Secteur"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Supérieur"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Compagnie"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Confirm"
          />
        </Grid>
      </Grid>
      </Box>
    </React.Fragment>
  );
}