import * as React from 'react';
import Link from '@mui/material/Link';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Card, CardContent, Typography } from '@mui/material';
// import { StringifyOptions } from 'querystring';
// import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  address: string,
  phone: string,
  status: string,
) {
  return { id, date, name, address, phone, status };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Av Capart 44',
    '0499 44 55 66',
    'ouvrier',
  )
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function PersonnalDetails() {
  return (
    <React.Fragment>
      <Title>Personnal details</Title>
      {rows.map((row) => (
        <Card>  
          <CardContent>
            <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
              <div>
                <p>date de contrat:{row.date}</p>
                <p>Nom:{row.name}</p>
                <p>adresse:{row.address}</p>
                <p>téléphone:{row.phone}</p>
                <p>status:{row.status}</p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      ))}
          
      {/* <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        {/* See more orders */}
      </Link>
    </React.Fragment>
  );
}