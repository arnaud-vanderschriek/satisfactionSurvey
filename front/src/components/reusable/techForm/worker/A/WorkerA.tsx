// import React from 'react'
import * as React from 'react';
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
import { connect } from 'react-redux';
import Form1 from './Form1';
import Form2 from './Form2';
import { setUpdateUser } from '../../../../../redux/actions/user.action';
import { setInfractec2TechPm, setInfratec2TechInfos, setPutmanServicesTechInfos, setPutmanServicesTechPm } from '../../../../../redux/actions/user.action';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserStoreModel } from '../../../userForm';


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

const steps = ['Form 1', 'Form 2'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Form1 />;
    case 1:
      return <Form2 />;
    // case 2:
    //   return <Form3 />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();


function WorkerA(props: any) {
  let navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  const handleSend = () => {
    let url = ''
    let body
    if(props.user.poste === 'ouvrier') {
      if(props.user.division === 'Putman Services') {
        url = `${process.env.REACT_APP_API_URL}/api/user/dataTechFormPutmanServices/${props.user.id}`
        body = props.putmanServicesStatsUser
      }
      if(props.user.division === 'Infratec2') {
        url = `${process.env.REACT_APP_API_URL}/api/user/dataTechFormInfratec2/${props.user.id}`
        body = props.infratec2StatsUser
      }
    }
    if(props.user.poste === 'pm') {
      if(props.user.division === 'Putman Services') {
        props.setPutmanServicesTechPm({ ...props.putmanServicesStatsPm, idUserEval: props.userEval._id })
        url = `${process.env.REACT_APP_API_URL}/api/user/dataTechFormPutmanServicesPm/${props.user.id}`
        body = props.putmanServicesStatsPm
      }
      if(props.user.division === 'Infratec2') {
        props.setInfractec2TechPm({ ...props.infratec2StatsPm, idUserEval: props.userEval.id })
        url = `${process.env.REACT_APP_API_URL}/api/user/dataTechFormInfratec2Pm/${props.user._id}`
        body = props.infratec2StatsPm
      }
    }
    

    axios({
      method: "post",
      url: url,
      withCredentials: true,
      data: {
        data: body,
      }
    }).then((res) => {
      if(res.data.errors) {
        console.log("errors")
      } else {
        if(props.user.poste === 'ouvrier') {
          props.setUpdateUser({ ...props.user, techForm: true })
          navigate('/techForm')
        }
        if(props.user.poste === 'pm') {
          navigate('/pmHome')        
        }
      }
    }).catch((err) => {
      console.log(err, 'catch Errors');
    })
  }

  return (
  <>
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
        <img src='../../../assets/img/logoPutman.png' alt=''></img>
        <Toolbar>
          <Typography variant="h6" sx={{mr: 2}} color="inherit" noWrap>
            Putman
          </Typography>
          <br />
          <Typography variant="h6" color="inherit" noWrap>
            Welcome { props.user.firstname} !
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Tech Form
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
                  <Button
                    variant="contained"
                    onClick={handleSend}
                    sx={{ mt: 3, ml: 1 }}
                  >
                   Send
                  </Button>
                </Typography>
                <Typography variant="subtitle1">
                  
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  {/* {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )} */}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length ? 'Send' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
    </>
  );
}


const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    userEval: state.userEval,
    putmanServicesStatsUser: state.putmanServicesStatsUser,
    infratec2StatsUser: state.infratec2StatsUser,
    putmanServicesStatsPm: state.putmanServicesStatsPm,
    infratec2StatsPm: state.infratec2StatsPm
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUpdateUser: (data: any) => dispatch(setUpdateUser(data)),
    setPutmanServicesTechInfos: (data: any) => dispatch(setPutmanServicesTechInfos(data)),
    setInfratec2TechInfos: (data: any) => dispatch(setInfratec2TechInfos(data)),
    setPutmanServicesTechPm: (data: any) => dispatch(setPutmanServicesTechPm(data)),
    setInfractec2TechPm: (data: any) => dispatch(setInfractec2TechPm(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerA)