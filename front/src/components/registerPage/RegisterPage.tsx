import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const [ poste, setPoste ] = useState('')
  const [ division, setDivision ] = useState('')

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    axios({ 
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/user/register`,
      withCredentials: true,
      data: {
        lastname: data.get('lastName'),
        firstname: data.get('firstName'),
        // email: data.get('email'),
        password: data.get('password'),
        classification: data.get('classification'),
        poste: poste,
        division: division,
        userForm: false,
        techForm: false,
      }
    })
    .then((res) => {
      if(res.data.errors) {
        console.log({errors: res.data.errors})
      } else {
        console.log('datas send', res);
      }
    }).catch((err) => {
      console.log(err);
    })
  };

  const handleChange = (event: any, value: string) => {
    console.log(event.target.value)
    if(value === "poste") setPoste(event.target.value)
    if(value === "division") setDivision(event.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
        <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          backgroundColor: '#1f76d2',
          color: 'white',
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Putman
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <div id='logoPutman2'></div>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> 
              <Grid item xs={6} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Division</InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="division"
                    label="division"
                    onChange={(event) => handleChange(event, 'division')}
                  >
                    <MenuItem value='Putman Services'>Putman Services</MenuItem>
                    <MenuItem value='Infractec2'>Infratec2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Poste</InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="poste"
                    label="poste"
                    onChange={(event) => handleChange(event, 'poste')}
                  >
                    <MenuItem value='ouvrier'>ouvrier</MenuItem>
                    <MenuItem value='PM'>pm</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="classification"
                  label="classification"
                  id="classification"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
