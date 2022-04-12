import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { setInfratec2TechInfos } from '../../../../../redux/actions/user.action';
import { connect } from 'react-redux';


function Form2(props: any) {
  function handleButtonRadio(e: any) {
      if(e.target.checked) {
        const electricSkill = {...props.infratec2StatsUser}
        electricSkill[e.target.name] +=  +e.target.value
        props.setInfratec2TechInfos(electricSkill)
    } else {
        const electricSkill = {...props.infratec2StatsUser}
        electricSkill[e.target.name] +=  -e.target.value
        props.setInfratec2TechInfos(electricSkill)
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
            control={<Checkbox color="secondary" name="checksonnel" value={100} />}
            label="Respecter les règles en bon père de famille."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <p>Aptitudes spécifiques / Exigences: </p>
          <FormControlLabel
            control={<Checkbox color="secondary" name="skillsnetwork" value={100} />}
            label="Doit pouvoir travailler au sein d’une équipe et aider un ouvrier plus spécialisé dans l’exécution de son travail."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
            label="Doit appliquer les règles en matière de sécurité."
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
    setInfratec2TechInfos: (data: any) => dispatch(setInfratec2TechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form2)