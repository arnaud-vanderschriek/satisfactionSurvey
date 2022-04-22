import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { setInfratec2TechInfos, setPutmanServicesTechInfos } from '../../../../../redux/actions/user.action';
import { connect } from 'react-redux';


function Form3(props: any) {
  function handleButtonRadio(e: any) {
    if(e.target.checked) {
      if(props.userEval.division === "Putman Services") {
        const electricSkill = {...props.putmanServicesStatsUser}
        electricSkill[e.target.name] +=  +e.target.value
        props.setPutmanServicesTechInfos(electricSkill)
      } 
      if(props.userEval.division === "Infratec2") {
        const railwaySkills = {...props.infratec2StatsUser}
        railwaySkills[e.target.name] +=  +e.target.value
        props.setInfratec2TechInfos(railwaySkills)
      }   
    } else {
      if(props.userEval.division === "Putman Services") {
        const electricSkill = {...props.putmanServicesStatsUser}
        electricSkill[e.target.name] +=  -e.target.value
        props.setPutmanServicesTechInfos(electricSkill)
      }
      if(props.userEval.division === "Infratec2") {
        const railwaySkills = {...props.infratec2StatsUser}
        railwaySkills[e.target.name] +=  -e.target.value
        props.setInfratec2TechInfos(railwaySkills)
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
    userEval: state.userEval,
    putmanServicesStatsUser: state.putmanServicesStatsUser,
    infratec2StatsUser: state.infratec2StatsUser
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPutmanServicesTechInfos: (data: any) => dispatch(setPutmanServicesTechInfos(data)),
    setInfratec2TechInfos: (data: any) => dispatch(setInfratec2TechInfos(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form3)