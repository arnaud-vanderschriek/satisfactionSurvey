import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';
import store from '../../../redux/store/store';
import { setTechInfos } from '../../../redux/actions/user.action';
import { Values } from './index';

function Form1(props: any) {
  function handleButtonRadio(e: any) {
    if(e.target.checked) {
      const newValue = props.techInfos.filter((item: Values) => item.name === e.target.name)
      newValue[0].value +=  + 1
    } else {
      const newValue = props.techInfos.filter((item: Values) => item.name === e.target.name)
      newValue[0].value += -1
    } 

   props.setTechInfos(props.techInfos)
  }

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
      Questionnaire technique: 
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="A" value="A" />}
            label="Donner des consignes et des instructions à l’équipe dont il a la charge."
            onChange={handleButtonRadio}
            />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="A" value="A" />}
            label="Transférer des connaissances et des idées."
            onChange={handleButtonRadio}

          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="B" value="B" />}
            label="Rapporter à son supérieur."
            onChange={handleButtonRadio}

          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="C" value="C" />}
            label="Echanger des informations avec divers services internes (ressources humaines, service technique, …)."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="B" value="B" />}
            label="Peut éventuellement avoir un contact avec le magasin et le service technique, SIPP, d’autres corps de métier."
            onChange={handleButtonRadio}
         />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="A" value="A" />}
            label="veiller à ce qu’aucune difficulté technique - de quelque nature que ce soit - ne surgisse pendant l’exécution du travail,
            en la prévoyant et en cherchant à appliquer la solution adéquate afin d’éviter des retards dans les travaux."
            onChange={handleButtonRadio}
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="C" value="C" />}
            label="est responsable de la conduite du chantier tant sur le plan technique que sur le plan organisationnel;"
            onChange={handleButtonRadio}
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="C" value="C" />}
            label="fait des rapports écrits à ses supérieurs, discute avec eux des possibilités de réalisation, fait appel à leur aide si nécessaire;"
            onChange={handleButtonRadio}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    techInfos: store.getState().techInfos,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTechInfos: (data: any) => dispatch(setTechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form1)
