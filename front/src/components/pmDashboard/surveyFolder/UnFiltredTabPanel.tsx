import React from 'react'
import { connect } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardContent } from '@mui/material';
import PropTypes from 'prop-types';
import { UserStoreModel } from '../../reusable/userForm';


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

interface Props {
  user: UserStoreModel,
  users: UserStoreModel[],
  value: number,
  handlerOpinionsWorker: (index: number, division: string) => void
}

function UnFiltredTabPanel(props: Props): any {
  return (
    props.users
    .filter((elem: any) => elem.division === props.user.division)
    .map((elem: any, index: number) => (
      <TabPanel value={props.value} index={index} key={index}>
        <div id='beubeubeu'>
          <Card sx={{ marginRight: '5px', width: '100%', height: 'auto' }}>  
            <CardContent> 
              <Typography sx={{ fontSize: '0.9rem' }} component={'span'} color="text.secondary" gutterBottom>
                <p>Nom de famille: {elem.lastname}</p>
                <p>Prénom: { elem.firstname }</p>
                <p>Division: { elem.division }</p> 
                <p>Poste: { elem.poste }</p>
                <p>Classification: { elem.classification }</p>
                <p>Adresse 1: { elem.address1 }</p>
                <p>Adresse 2: { elem.address2 }</p> 
                <p>Ville: { elem.city }</p>
                <p>Dernière mise à jour: {elem.updatedAt}</p>
              </Typography>
            </CardContent>
          </Card> 
        </div>
        {
          props.user.division === "Putman Services" ?
            <Button id='tabs-button' 
              onClick={ () => props.handlerOpinionsWorker(index, "Putman Services") } 
              variant="contained" 
              size="small"
            > 
              Donner son opinion sur { elem.firstname }
            </Button>
          :
            <Button id='tabs-button' 
            onClick={ () => props.handlerOpinionsWorker(index, "Infratec2") } 
            variant="contained" 
            size="small"
            > 
              Donner son opinion sur { elem.firstname }
            </Button>
        }
      </TabPanel>
      )) 
  )
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnFiltredTabPanel)