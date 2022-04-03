import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { setPutmanServicesTechInfos } from '../../../../../redux/actions/user.action';
import { connect } from 'react-redux';


function Form3(props: any) {
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
        Aptitudes Spécifiques / Exigences
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
            label="Doit pouvoir travailler en équipe ainsi que de façon autonome."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="Peut discuter de problèmes techniques avec des tiers."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Doit répondre aux exigences des catégories précédentes."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
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
    putmanServicesStatsUser: state.putmanServicesStatsUser,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPutmanServicesTechInfos: (data: any) => dispatch(setPutmanServicesTechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form3)