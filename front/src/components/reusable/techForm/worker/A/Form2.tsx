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
        Following
      </Typography>
      { props.user.division === "Putman Services" &&
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
              label="Informer le sup??rieur des difficult??s rencontr??es."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricPlan" value={100} />}
              label="Respecter les r??gles en bon p??re de famille."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <p>Aptitudes sp??cifiques / Exigences: </p>
            <FormControlLabel
              control={<Checkbox color="secondary" name="plug" value={100} />}
              label="Doit pouvoir travailler en ??quipe et aider un ouvrier plus sp??cialis?? dans l???ex??cution de son travail."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricPlan" value={100} />}
              label="Doit pouvoir ex??cuter des ordres et des t??ches simples sous la conduite d???autres personnes."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="plug" value={100} />}
              label="Doit appliquer les r??gles en mati??re de s??curit??."
              onChange={handleButtonRadio}
            />
          </Grid>
        </Grid>
      }
      { props.user.division === "Infratec2" &&
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
              label="Informer le sup??rieur des difficult??s rencontr??es."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
              label="Respecter les r??gles en bon p??re de famille."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <p>Aptitudes sp??cifiques / Exigences: </p>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsNetwork" value={100} />}
              label="Doit pouvoir travailler en ??quipe et aider un ouvrier plus sp??cialis?? dans l???ex??cution de son travail."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
              label="Doit pouvoir ex??cuter des ordres et des t??ches simples sous la conduite d???autres personnes."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsNetwork" value={100} />}
              label="Doit appliquer les r??gles en mati??re de s??curit??."
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
