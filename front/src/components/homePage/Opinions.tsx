import * as React from 'react';
import Link from '@mui/material/Link';
import Title from './Title';
import Button from '@mui/material/Button';
import { connect } from 'react-redux'
import { getUser } from '../../redux/actions/user.action';
import store from '../../redux/store/store';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

function Opinions(props: any) {
  const handler = () => {
    console.log("props: ", props)
    props.getUser('61aa46175d2817fbdc842248')
  }
  
  return (
    <React.Fragment>
      <Title>Give his opinion</Title>
      {/* <Typography component="p" variant="h4">
        $3,024.00
      </Typography> */}
      {props.test.firstname}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handler}
          sx={{ mt: 8 , mb: 2 }}
        >
          Begin
        </Button>
      {/* <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography> */}
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    test: store.getState().test,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: (uid: string) => { dispatch(getUser(uid)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Opinions)