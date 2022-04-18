import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { setPutmanServicesTechInfos } from '../../../../../redux/actions/user.action';
import { connect } from 'react-redux';


function Form2(props: any) {
  function handleButtonRadio(e: any) {
      if(e.target.checked) {
        const electricSkill = {...props.putmanServicesStatsUser}
        electricSkill[e.target.name] +=  +e.target.value
        props.setPutmanServicesTechInfos(electricSkill)
    } else {
        const electricSkill = {...props.putmanServicesStatsUser}
        electricSkill[e.target.name] +=  -e.target.value
        props.setPutmanServicesTechInfos(electricSkill)
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      <p>Responsabilites/ TÂCHES principales: </p>
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
            label="Prévoir les difficultés qui peuvent surgir et trouver une solution de sorte qu’elles ne provoquent pas de perte de temps."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="plug" value={100} />}
            label="Prendre les initiatives nécessaires pour parvenir au résultat demandé."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Comprendre des schémas, pouvoir les interpréter et y relever des erreurs éventuelles."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Doit être en mesure de donner des instructions."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Doit être en mesure de faire un rapport écrit."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Peut travailler sans surveillance sur une tâche déterminée."
            onChange={handleButtonRadio}
          />
        </Grid> <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Veille au suivi des matériaux."
            onChange={handleButtonRadio}
          />
        </Grid> <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Peut contrôler et réparer des installations de façon autonome."
            onChange={handleButtonRadio}
          />
        </Grid> <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Est responsable de la conduite du chantier tant sur le plan technique que sur le plan organisationnel."
            onChange={handleButtonRadio}
          />
        </Grid> <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Fait des rapports écrits à ses supérieurs, discute avec eux des possibilités de réalisation, demande de l’assistance si nécessaire."
            onChange={handleButtonRadio}
          />
        </Grid> <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Contrôle la livraison des matériaux, fait les remarques appropriées à ce sujet et tire les conclusions nécessaires concernant l’évolution du travail."
            onChange={handleButtonRadio}
          />
        </Grid> <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Fait respecter toutes les règles en matière de sécurité."
            onChange={handleButtonRadio}
          />
        </Grid> <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Respecte et fait respecter les règles en bon père de famille."
            onChange={handleButtonRadio}
          />
        </Grid> 
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    putmanServicesStatsUser: state.putmanServicesStatsUser,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPutmanServicesTechInfos: (data: any) => dispatch(setPutmanServicesTechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form2)