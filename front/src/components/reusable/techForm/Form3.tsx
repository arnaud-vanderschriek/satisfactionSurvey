import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { setPutmanServicesTechInfos } from '../../../redux/actions/user.action';
import { connect } from 'react-redux';


function Form3(props: any) {
  function handleButtonRadio(e: any) {
  //   if(e.target.checked) {
  //     const filteredObject = props.techInfos.filter((item: Values) => item.name === e.target.name)
  //     filteredObject[0].value +=  + 100
  //   } else {
  //     const filteredObject = props.techInfos.filter((item: Values) => item.name === e.target.name)
  //     filteredObject[0].value += -100
  //   } 

  //  props.setTechInfos(props.techInfos)

     if(e.target.checked) {
        const electricSkill = {...props.infratec2StatsUser}
        electricSkill[e.target.name] +=  +e.target.value
        props.setPutmanServicesTechInfos(electricSkill)
    } else {
        const electricSkill = {...props.infratec2StatsUser}
        electricSkill[e.target.name] +=  -e.target.value
        props.setPutmanServicesTechInfos(electricSkill)
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Following
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Manoeuvre" value={100} />}
            label="Donner des consignes et des instructions à l’équipe dont il a la charge."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Transférer des connaissances et des idées."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Rapporter à son supérieur."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Manoeuvre" value={100} />}
            label="Echanger des informations avec divers services internes (ressources humaines, service technique, …)."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="plug" value={100} />}
            label="Peut éventuellement avoir un contact avec le magasin et le service technique, SIPP, d’autres corps de métier."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="veiller à ce qu’aucune difficulté technique - de quelque nature que ce soit - ne surgisse pendant l’exécution du travail,
            en la prévoyant et en cherchant à appliquer la solution adéquate afin d’éviter des retards dans les travaux."
            onChange={handleButtonRadio}
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Manoeuvre" value={100} />}
            label="est responsable de la conduite du chantier tant sur le plan technique que sur le plan organisationnel;"
            onChange={handleButtonRadio}
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="plug" value={100} />}
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
    infratec2StatsUser: state.infratec2StatsUser,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPutmanServicesTechInfos: (data: any) => dispatch(setPutmanServicesTechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form3)