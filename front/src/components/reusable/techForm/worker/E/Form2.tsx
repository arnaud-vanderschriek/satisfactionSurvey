import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';

import { setInfractec2Stats, setPutmanServicesStats } from '../../../../../redux/actions/user.action';

function Form2(props: any) {
  function handleButtonRadio(e: any) {
    if(e.target.checked) {
      if(props.user.poste === 'ouvrier') {
        if(props.user.division === "Putman Services") {
          const electricSkill = {...props.putmanServicesStats}
          electricSkill[e.target.name] +=  +e.target.value
          props.setPutmanServicesStats(electricSkill)
        } 
        if(props.user.division === "Infratec2") {
          const railwaySkills = {...props.infratec2Stats}
          railwaySkills[e.target.name] +=  +e.target.value
          props.setInfratec2Stats(railwaySkills)
        }   
      }
      if(props.user.poste === 'pm') {
        if(props.userEval.division === "Putman Services") {
          const electricSkillPm = { ...props.putmanServicesStats}
          electricSkillPm[e.target.name] += +e.target.value
          props.setPutmanServicesStats(electricSkillPm)
        }
        if(props.userEval.division === "Infratec2") {
          const infratec2SkillPm = { ...props.infratec2Stats }
          infratec2SkillPm[e.target.name] += +e.target.value
          props.setInfractec2Stats(infratec2SkillPm)
        }
      }
    } else {
      if(props.user.poste === 'ouvrier') {
        if(props.user.division === "Putman Services") {
          const electricSkill = {...props.putmanServicesStats}
          electricSkill[e.target.name] +=  -e.target.value
          props.setPutmanServicesStats(electricSkill)
        }
        if(props.user.division === "Infratec2") {
          const railwaySkills = {...props.infratec2Stats}
          railwaySkills[e.target.name] +=  -e.target.value
          props.setInfractec2Stats(railwaySkills)
        }
      }
      if(props.user.poste === 'pm') {
        if(props.userEval.division === "Putman Services") {
          const electricSkillPm = { ...props.putmanServicesStats }
          electricSkillPm[e.target.name] += -e.target.value
          props.setPutmanServicesStats(electricSkillPm)
        }
        if(props.userEval.division === "Infratec2") {
          const infratec2SkillPm = { ...props.infratec2Stats}
          infratec2SkillPm[e.target.name] += -e.target.value
          props.setInfractec2Stats(infratec2SkillPm)
        }
      }
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      <p>Responsabilites/ TÂCHES principales: </p>
      </Typography>

      {props.user.division === "Putman Services" &&
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
      }
  {props.user.division === "Infratec2" &&
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
          label="Prévoir les difficultés qui peuvent surgir et trouver une solution de sorte qu’elles ne provoquent pas de perte de temps."
          onChange={handleButtonRadio}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="skillsNetwork" value={100} />}
          label="Prendre les initiatives nécessaires pour parvenir au résultat demandé."
          onChange={handleButtonRadio}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
          label="Comprendre des schémas, pouvoir les interpréter et y relever des erreurs éventuelles."
          onChange={handleButtonRadio}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
          label="Doit être en mesure de donner des instructions."
          onChange={handleButtonRadio}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
          label="Doit être en mesure de faire un rapport écrit."
          onChange={handleButtonRadio}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="mapSkills" value={100} />}
          label="Peut travailler sans surveillance sur une tâche déterminée."
          onChange={handleButtonRadio}
        />
      </Grid> <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="mapSkills" value={100} />}
          label="Veille au suivi des matériaux."
          onChange={handleButtonRadio}
        />
      </Grid> <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="mapSkills" value={100} />}
          label="Peut contrôler et réparer des installations de façon autonome."
          onChange={handleButtonRadio}
        />
      </Grid> <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
          label="Est responsable de la conduite du chantier tant sur le plan technique que sur le plan organisationnel."
          onChange={handleButtonRadio}
        />
      </Grid> <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
          label="Fait des rapports écrits à ses supérieurs, discute avec eux des possibilités de réalisation, demande de l’assistance si nécessaire."
          onChange={handleButtonRadio}
        />
      </Grid> <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
          label="Contrôle la livraison des matériaux, fait les remarques appropriées à ce sujet et tire les conclusions nécessaires concernant l’évolution du travail."
          onChange={handleButtonRadio}
        />
      </Grid> <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
          label="Fait respecter toutes les règles en matière de sécurité."
          onChange={handleButtonRadio}
        />
      </Grid> <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="skillsBook" value={100} />}
          label="Respecte et fait respecter les règles en bon père de famille."
          onChange={handleButtonRadio}
        />
      </Grid> 
    </Grid>
  }
    </React.Fragment>
  );
}
const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    userEval: state.userEval,
    putmanServicesStats: state.putmanServicesStats,
    infratec2Stats: state.infratec2Stats,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPutmanServicesStats: (data: any) => dispatch(setPutmanServicesStats(data)),
    setInfractec2Stats: (data: any) => dispatch(setInfractec2Stats(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form2)
