import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';
import { setInfractec2TechPm, setInfratec2TechInfos, setPutmanServicesTechInfos, setPutmanServicesTechPm } from '../../../../../redux/actions/user.action';


function Form1(props: any) {
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
      <Typography variant="h5" gutterBottom>
        Questionnaire technique: 
        Ouvrier "A" non qualifié
      </Typography>
      {props.user.division === "Putman Services" &&
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <p>Objectif de la fonction: </p>
              <FormControlLabel
                control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
                label="Donner un appui aux équipes d’ouvriers spécialisés en assumant des tâches manuelles d’ordre général."
                onChange={handleButtonRadio}
                />
          </Grid>
          <Grid item xs={12}>
            <p>Description générale: nature des activites </p>
              <FormControlLabel
                control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
                label="L'ouvrier est capable de réaliser fréquemment différents travaux d’ordre général suivant sa classification professionnelle et la tâche qui lui est définie."
                onChange={handleButtonRadio}
              />
          </Grid>
          <Grid item xs={12}>
            <p>Interaction sociale: </p>
              <FormControlLabel
                control={<Checkbox color="secondary" name="electricPlan" value={100} />}
                label="Rendre compte au responsable du chantier et se concerter au sujet du chantier, des tâches à exécuter et savoir travailler en équipe.
                Peut éventuellement avoir un contact avec le magasin et le service technique, SIPP, d’autres corps de métier."
                onChange={handleButtonRadio}
              />
          </Grid>
          <Grid item xs={12}>
              <p>Responsabilites/ TÂCHES principales: </p>
              <FormControlLabel
                control={<Checkbox color="secondary" name="electricBox" value={100} />}
                label="exécuter minutieusement les instructions."
                onChange={handleButtonRadio}
              />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricBox" value={100} />}
              label="exécution des tâches ne requérant pas de formation professionnelle spécifique."
              onChange={handleButtonRadio}
          />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricBox" value={100} />}
              label="travail essentiellement manuel et éventuellement l’entretien des locaux."
              onChange={handleButtonRadio}
            />
          </Grid>   
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricBox" value={100} />}
              label="travaille uniquement sous la conduite d’un ouvrier plus qualifié."
              onChange={handleButtonRadio}
            />
          </Grid>   
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricBox" value={100} />}
              label="bien exécuter les instructions données."
              onChange={handleButtonRadio}
            />
          </Grid>
        </Grid>
      }

      {props.user.division === "Infratec2" &&
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <p>Objectif de la fonction: </p>
              <FormControlLabel
                control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
                label="Donner un appui aux équipes d’ouvriers spécialisés en assumant des tâches manuelles d’ordre général."
                onChange={handleButtonRadio}
                />
          </Grid>
          <Grid item xs={12}>
            <p>Description générale: nature des activites </p>
              <FormControlLabel
                control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
                label="L'ouvrier est capable de réaliser fréquemment différents travaux d’ordre général suivant sa classification professionnelle et la tâche qui lui est définie."
                onChange={handleButtonRadio}
              />
          </Grid>
          <Grid item xs={12}>
            <p>Interaction sociale: </p>
              <FormControlLabel
                control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
                label="Rendre compte au responsable du chantier et se concerter au sujet du chantier, des tâches à exécuter et savoir travailler en équipe.
                Peut éventuellement avoir un contact avec le magasin et le service technique, SIPP, d’autres corps de métier."
                onChange={handleButtonRadio}
              />
          </Grid>
          <Grid item xs={12}>
              <p>Responsabilites/ TÂCHES principales: </p>
              <FormControlLabel
                control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
                label="exécuter minutieusement les instructions."
                onChange={handleButtonRadio}
              />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
              label="exécution des tâches ne requérant pas de formation professionnelle spécifique."
              onChange={handleButtonRadio}
          />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsNetwork" value={100} />}
              label="travail essentiellement manuel et éventuellement l’entretien des locaux."
              onChange={handleButtonRadio}
            />
          </Grid>   
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
              label="travaille uniquement sous la conduite d’un ouvrier plus qualifié."
              onChange={handleButtonRadio}
            />
          </Grid>   
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsNetwork" value={100} />}
              label="bien exécuter les instructions données."
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

export default connect(mapStateToProps, mapDispatchToProps)(Form1)
