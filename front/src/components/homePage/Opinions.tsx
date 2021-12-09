import * as React from 'react';
import Link from '@mui/material/Link';
import Title from './Title';
import Button from '@mui/material/Button';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Opinions() {
  const handler = () => {}

  return (
    <React.Fragment>
      <Title>Give his opinion</Title>
      {/* <Typography component="p" variant="h4">
        $3,024.00
      </Typography> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handler}
          sx={{ mt: 2, mb: 2 }}
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