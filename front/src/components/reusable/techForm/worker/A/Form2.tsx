import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { setInfractec2TechPm, setInfratec2TechInfos, setPutmanServicesTechInfos, setPutmanServicesTechPm } from '../../../../../redux/actions/user.action';
import { connect } from 'react-redux';


function Form2(props: any) {
  function handleButtonRadio(e: any) {
    if(e.target.checked) {
      if(props.user.poste === 'ouvrier') {
        if(props.user.division === "Putman Services") {
          const electricSkill = {...props.putmanServicesStatsUser}
          electricSkill[e.target.name] +=  +e.target.value
          props.setPutmanServicesTechInfos(electricSkill)
        } 
        if(props.user.division === "Infratec2") {
          const railwaySkills = {...props.infratec2StatsUser}
          railwaySkills[e.target.name] +=  +e.target.value
          props.setInfratec2TechInfos(railwaySkills)
        }   
      }
      if(props.user.poste === 'pm') {
        if(props.userEval.division === "Putman Services") {
          const electricSkillPm = { ...props.putmanServicesStatsPm }
          electricSkillPm[e.target.name] += +e.target.value
          props.setPutmanServicesTechPm(electricSkillPm)
        }
        if(props.userEval.division === "Infratec2") {
          const infratec2SkillPm = { ...props.infratec2StatsPm }
          infratec2SkillPm[e.target.name] += +e.target.value
          props.setInfractec2TechPm(infratec2SkillPm)
        }
      }
    } else {
      if(props.user.poste === 'ouvrier') {
        if(props.user.division === "Putman Services") {
          const electricSkill = {...props.putmanServicesStatsUser}
          electricSkill[e.target.name] +=  -e.target.value
          props.setPutmanServicesTechInfos(electricSkill)
        }
        if(props.user.division === "Infratec2") {
          const railwaySkills = {...props.infratec2StatsUser}
          railwaySkills[e.target.name] +=  -e.target.value
          props.setInfratec2TechInfos(railwaySkills)
        }
      }
      if(props.user.poste === 'pm') {
        if(props.userEval.division === "Putman Services") {
          const electricSkillPm = { ...props.putmanServicesStatsPm }
          electricSkillPm[e.target.name] += -e.target.value
          props.setPutmanServicesTechPm(electricSkillPm)
        }
        if(props.userEval.division === "Infratec2") {
          const infratec2SkillPm = { ...props.infratec2StatsPm }
          infratec2SkillPm[e.target.name] += -e.target.value
          props.setInfractec2TechPm(infratec2SkillPm)
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
              label="Informer le supérieur des difficultés rencontrées."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricPlan" value={100} />}
              label="Respecter les règles en bon père de famille."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <p>Aptitudes spécifiques / Exigences: </p>
            <FormControlLabel
              control={<Checkbox color="secondary" name="plug" value={100} />}
              label="Doit pouvoir travailler en équipe et aider un ouvrier plus spécialisé dans l’exécution de son travail."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricPlan" value={100} />}
              label="Doit pouvoir exécuter des ordres et des tâches simples sous la conduite d’autres personnes."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="plug" value={100} />}
              label="Doit appliquer les règles en matière de sécurité."
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
              label="Informer le supérieur des difficultés rencontrées."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
              label="Respecter les règles en bon père de famille."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <p>Aptitudes spécifiques / Exigences: </p>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsNetwork" value={100} />}
              label="Doit pouvoir travailler en équipe et aider un ouvrier plus spécialisé dans l’exécution de son travail."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
              label="Doit pouvoir exécuter des ordres et des tâches simples sous la conduite d’autres personnes."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsNetwork" value={100} />}
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
    putmanServicesStatsUser: state.putmanServicesStatsUser,
    infratec2StatsUser: state.infratec2StatsUser,
    putmanServicesStatsPm: state.putmanServicesStatsPm,
    infratec2StatsPm: state.infratec2StatsPm
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPutmanServicesTechInfos: (data: any) => dispatch(setPutmanServicesTechInfos(data)),
    setInfratec2TechInfos: (data: any) => dispatch(setInfratec2TechInfos(data)),
    setPutmanServicesTechPm: (data: any) => dispatch(setPutmanServicesTechPm(data)),
    setInfractec2TechPm: (data: any) => dispatch(setInfractec2TechPm(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form2)