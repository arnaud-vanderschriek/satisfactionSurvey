import * as React from 'react';
import { useNavigate } from 'react-router-dom';
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
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import "../../assets/styles/styles.css";
import { useState } from 'react';
import { SetUser } from '../../redux/actions/user.action';
import store from '../../redux/store/store';
import { connect } from 'react-redux';
import { UserStoreModel } from '../reusable/userForm';
import WorkerContainer from '../reusable/worker/WorkerContainer';

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

function LoginPage(props: any) {
  let navigate = useNavigate()
  const [ emailField, setEmailField ] = useState(false)
  const [ passwordField, setPasswordField ] = useState(false)
  const [ emailText, setEmailText ] = useState("")
  const [ passwordText, setPasswordText ] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
 
    // à mettre dans Redux !!!!!!!
    axios({ 
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/user/login`,
      withCredentials: true,
      data: {
        email: data.get('email'),
        password: data.get('password'),
      }
    })
    .then((res) => {
      if(res.data.errors) {
        if(res.data.errors.email) {
          setEmailField(true) 
          setEmailText(res.data.errors.email)
          setPasswordField(false)
          setPasswordText("")
        }
        if (res.data.errors.password) {
          setPasswordField(true)
          setPasswordText(res.data.errors.password)
          setEmailField(false) 
          setEmailText("")
        }
      } else {
        props.SetUser(res.data)
        if (res.data.userForm === 'ouvrier') {
          navigate('/worker')
        }  if (res.data.poste === 'ouvrier' ) {
          navigate('/worker')
        } 
      }
    }).catch((err) => {
      console.log(err);
    })
  };

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
          <div id='logoPutman'></div>
          <Typography variant="h6" color="inherit" noWrap>
            Putmann
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
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailField}
              helperText={emailText}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={passwordField}
              helperText={passwordText}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: store.getState().user,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    SetUser: (data: UserStoreModel) => { dispatch(SetUser(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)