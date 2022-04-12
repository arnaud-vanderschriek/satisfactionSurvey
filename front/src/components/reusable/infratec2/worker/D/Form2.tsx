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
      <p>Responsabilites/ TÂCHES principales: </p>
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="checksonnel" value={100} />}
            label="Comprendre des schémas, pouvoir les interpréter et y relever des erreurs éventuelles."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
            label="Doit pouvoir donner des instructions."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
            label="Doit pouvoir faire un rapport écrit."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="mapSkills" value={100} />}
            label="Est en mesure de travailler sans surveillance à une tâche déterminée."
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