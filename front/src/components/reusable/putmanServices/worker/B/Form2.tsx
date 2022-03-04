import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import store from '../../../../../redux/store/store';
import { setTechInfos } from '../../../../../redux/actions/user.action';
import { connect } from 'react-redux';


function Form2(props: any) {
  function handleButtonRadio(e: any) {
      if(e.target.checked) {
        const electricSkill = {...props.techInfos2}
        electricSkill[e.target.name] +=  +e.target.value
        props.setTechInfos(electricSkill)
    } else {
        const electricSkill = {...props.techInfos2}
        electricSkill[e.target.name] +=  -e.target.value
        props.setTechInfos(electricSkill)
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
            label="Respecter les règles en bon père de famille."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <p>Aptitudes spécifiques / Exigences: </p>
          <FormControlLabel
            control={<Checkbox color="secondary" name="plug" value={100} />}
            label="Doit pouvoir travailler au sein d’une équipe et aider un ouvrier plus spécialisé dans l’exécution de son travail."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
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
    techInfos2: store.getState().techInfos2,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTechInfos: (data: any) => dispatch(setTechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form2)