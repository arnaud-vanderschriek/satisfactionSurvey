import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './ContactForm';
import StatusForm from './StatusForm';
import Review from './Review';
import store from '../../../redux/store/store';
import { connect } from 'react-redux';
import { setTechInfos, setUpdateUser, SetUser } from '../../../redux/actions/user.action';
import axios from 'axios';
import { UserStoreModel } from '.';
import PutmanServicesContainer from '../putmanServices/PutmanServicesContainer';
import Infratec2Container from '../infratec2/Infratec2Container';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Contact', 'Check'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    // case 1:
    //   return <StatusForm />;
    case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

function Checkout(props: any) {
  let navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep === 1) {
      sendData(props)
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const sendData = (props: any) => {
    console.log(props, 'props dans front before send')
    // refaire la redirection via la classification du user le if ci-dessous ne redirige pas vers le bon techForm.
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/user/additionnalData/${props.user.id}`,
      withCredentials: true,
      data: {
        data: props.additionalUserInfos
      }
    }).then((res) => {
      if(res.data.errors) {
        console.log("errors")
      } else {
        console.log(res, 'response')
        props.setUpdateUser({...props.user, userForm: true})
        // mettre a jour le userForm à false des les props et rediriger vers Putman Services
        if(res.data.divison === 'Putman Services') {
          return <PutmanServicesContainer />
        }
        if(res.data.divison === 'Infratec2') {
          return < Infratec2Container/>
        }
      }
    }).catch((err) => {
      console.log(err, 'catch Errors');
    })

    // if(props.user.techForm !== true) {
    //   navigate('/techForm')
    // } else {
    //   navigate('/home')
    // }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            Putmann
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            User Register Form
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your time.
                </Typography>
                <Typography variant="subtitle1">
                  
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Send' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: any) => {
  return {
    additionalUserInfos: store.getState().additionalUserInfos,
    user: store.getState().user,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTechInfos: (data: any) => dispatch(setTechInfos(data)),
    setUpdateUser: (data: UserStoreModel) => { dispatch(setUpdateUser(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)