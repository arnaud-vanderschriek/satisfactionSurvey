import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import Tabs from './Tabs';
import store from '../../redux/store/store';
import { connect } from 'react-redux';
import { fetchAllWorker } from '../../redux/actions/user.action';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

const drawerWidth: number = 0;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

const mdTheme = createTheme();

function DashboardContent(props: any) {
  useEffect(() => {
    props.fetchAllWorker()
  }, [])
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  let navigate = useNavigate()

  const logout = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/user/logout`,
      withCredentials: true,
    }).then((res) => {
      if(res.data.errors) {
        console.log("errors")
      } else {
        console.log(res, 'response')
        // 
      }
    }).catch((err) => {
      console.log(err, 'catch Errors');
    })
    navigate("/")

  }

  const transfer = () => {
      if(props.user.division === "Putman Services") {
      navigate("/putmanServices")
    }
    if(props.user.division === "Infratec2") {
      navigate("/infratec2")
    } 
  }

  console.log({ "propsUser" : props.users, "type propsUsers" : typeof(props.users)})
  console.log(props.users[0].firstname)
  console.log(props.users.map((elem: any) => elem.firstname))

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
              Putman
            </Typography>
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary"> */}
                <HomeIcon onClick={transfer} />
              {/* </Badge> */}
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary"> */}
                <LogoutIcon onClick={logout} />
              {/* </Badge> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={6}>
              {/* Chart */}
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'auto',
                    width: '100%'
                  }}
                >
                  <Tabs />
                </Paper>
              </Grid>
              {/* <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                  }}
                >
                  <Chart />
                </Paper>
              </Grid> */}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    users: state.users,
    putmanServicesStatsUser: state.putmanServicesStatsUser,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchAllWorker: () => dispatch(fetchAllWorker())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContent)