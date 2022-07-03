import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';

import { setInfractec2Stats, setPutmanServicesStats } from '../../../../../redux/actions/user.action';

function Form3(props: any) {
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
        Following
      </Typography>
{props.userEval.division === "Putman Services" &&

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
            label="Est apte à s’atteler à une tâche spéciale sans aide ou contrôle."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Mener à bien le travail exigé, tant au niveau technique qu’en termes de rendement."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Pouvoir prendre l’initiative en cas de difficultés simples; en cas de difficultés majeures, il demande l’aide d’un ouvrier de catégorie supérieure."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
            label="Veiller à l’application des règles en matière de sécurité."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="plug" value={100} />}
            label="Respecter et faire respecter les règles en bon père de famille."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <p>Aptitudes spécifiques / Exigences</p>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Doit pouvoir travailler en équipe ainsi que de façon autonome."
            onChange={handleButtonRadio}
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
            label="Doit répondre aux exigences des catégories précédentes."
            onChange={handleButtonRadio}
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="plug" value={100} />}
            label="Doit appliquer les règles en matière de sécurité."
            onChange={handleButtonRadio}
          />
        </Grid>
      </Grid>
  }
{props.userEval.division === "Infratec2" &&
  <Grid container spacing={6}>
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
      label="Est apte à s’atteler à une tâche spéciale sans aide ou contrôle."
      onChange={handleButtonRadio}
    />
  </Grid>
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="electricPlan" value={100} />}
      label="Mener à bien le travail exigé, tant au niveau technique qu’en termes de rendement."
      onChange={handleButtonRadio}
    />
  </Grid>
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="electricBox" value={100} />}
      label="Pouvoir prendre l’initiative en cas de difficultés simples; en cas de difficultés majeures, il demande l’aide d’un ouvrier de catégorie supérieure."
      onChange={handleButtonRadio}
    />
  </Grid>
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
      label="Veiller à l’application des règles en matière de sécurité."
      onChange={handleButtonRadio}
    />
  </Grid>
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="plug" value={100} />}
      label="Respecter et faire respecter les règles en bon père de famille."
      onChange={handleButtonRadio}
    />
  </Grid>
  <Grid item xs={12}>
    <p>Aptitudes spécifiques / Exigences</p>
    <FormControlLabel
      control={<Checkbox color="secondary" name="electricPlan" value={100} />}
      label="Doit pouvoir travailler en équipe ainsi que de façon autonome."
      onChange={handleButtonRadio}
    />
  </Grid>   <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
      label="Doit répondre aux exigences des catégories précédentes."
      onChange={handleButtonRadio}
    />
  </Grid>   <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="plug" value={100} />}
      label="Doit appliquer les règles en matière de sécurité."
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


export default connect(mapStateToProps, mapDispatchToProps)(Form3)