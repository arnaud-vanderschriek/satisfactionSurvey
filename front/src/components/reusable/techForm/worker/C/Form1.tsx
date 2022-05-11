import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';
import { setInfractec2Stats, setPutmanServicesStats } from '../../../../../redux/actions/user.action';

function Form1(props: any) {
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
      <Typography variant="h5" gutterBottom>
        Questionnaire technique: 
        Ouvrier "C" spécialisé 1re catégorie
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
              label="Comprendre des schémas simples et pouvoir travailler d’après ceux-ci."
              onChange={handleButtonRadio}
            />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Faire rapport sur les difficultés rencontrées."
            onChange={handleButtonRadio}
         />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Travaille le plus souvent sous la conduite de quelqu’un."
            onChange={handleButtonRadio}
          />
        </Grid>   
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Est en mesure d’exécuter une grande diversité de travaux sur des installations."
            onChange={handleButtonRadio}
          />
        </Grid>   
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Exécuter correctement et avec rendement le travail exigé."
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
          control={<Checkbox color="secondary" name="checkSOnnel" value={100} />}
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
          label="Comprendre des schémas simples et pouvoir travailler d’après ceux-ci."
          onChange={handleButtonRadio}
        />
    </Grid>
    <Grid item xs={12}>
      <FormControlLabel
        control={<Checkbox color="secondary" name="skillsNetwork" value={100} />}
        label="Faire rapport sur les difficultés rencontrées."
        onChange={handleButtonRadio}
     />
    </Grid>
    <Grid item xs={12}>
      <FormControlLabel
        control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
        label="Travaille le plus souvent sous la conduite de quelqu’un."
        onChange={handleButtonRadio}
      />
    </Grid>   
    <Grid item xs={12}>
      <FormControlLabel
        control={<Checkbox color="secondary" name="skillsBook" value={100} />}
        label="Est en mesure d’exécuter une grande diversité de travaux sur des installations."
        onChange={handleButtonRadio}
      />
    </Grid>   
    <Grid item xs={12}>
      <FormControlLabel
        control={<Checkbox color="secondary" name="mapSkills" value={100} />}
        label="Exécuter correctement et avec rendement le travail exigé."
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

export default connect(mapStateToProps, mapDispatchToProps)(Form1)
