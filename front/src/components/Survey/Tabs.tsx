import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './styles/style.css'
import { Button, Card, CardContent } from '@mui/material';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function createData(
  id: number,
  firstname: string,
  name: string,
  address: string,
  mobile: string,
  service: string,
  status: string,
) {
  return { id, firstname, name, address, mobile, service, status };
}

const rows = [
  createData(
    0,
    'Arnaud',
    'Vanderschrieck',
    'Av Dessaert 20',
    '0222 22 22 22',
    'Developpement',
    'createur',
  ),
  createData(
    1,
    'Alexandre',
    'Lopez Fouz',
    'Av des Chaudrons 654',
    '0333 33 33 33',
    'Service',
    'PM',
  ),
  createData(
    2,
    'Benoit',
    'Magimel',
    'Av des Roseaux 2',
    '0444 44 44 44',
    'Service',
    'RH',
  ),
  createData(
    3,
    'Cédric',
    'Coenraedts',
    'Av des Caprices 33',
    '0555 55 55 55',
    'Service',
    'DM',
  ),
  createData(
    4,
    'Quentin',
    'Magia',
    'Av des tourteraux 15',
    '0666 66 66 66',
    'Service',
    'Team leader',
  ),
  createData(
    5,
    'David',
    'Lombet',
    'Av du suplice 50',
    '0777 77 77 77',
    'Service',
    'Ouvrier',
  ),
];

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    console.log(newValue, 'newValue')
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange}  scrollButtons="auto" aria-label="scrollable auto tabs example">
        {rows.map((row) => (
          <Tab label={row.firstname} {...a11yProps(row.id)} />
        ))} 
        </Tabs>
        {rows.map((row) => (
          <TabPanel value={value} index={row.id}>
            <div id='beubeubeu'>
              <Card>  
                <CardContent>
                  <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                    <p>name: {row.name}</p>
                    <p>firstname: {row.firstname}</p>
                    <p>address: {row.address}</p>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                    <p>mobile phone: {row.mobile}</p>
                    <p>service: {row.service}</p>
                    <p>status: {row.status}</p>
                  </Typography>
                </CardContent>
              </Card>
              
              <Button id='tabs-button' variant="contained" size="small">{row.firstname}</Button>
            </div>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}