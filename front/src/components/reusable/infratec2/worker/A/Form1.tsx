import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';
import { setInfratec2TechInfos } from '../../../../../redux/actions/user.action';


function Form1(props: any) {
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
      <Typography variant="h5" gutterBottom>
        Questionnaire technique: 
        Ouvrier "A" non qualifié
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <p>Objectif de la fonction: </p>
            <FormControlLabel
              control={<Checkbox color="secondary" name="checksonnel" value={100} />}
              label="Donner un appui aux équipes d’ouvriers spécialisés en assumant des tâches manuelles d’ordre général."
              onChange={handleButtonRadio}
              />
        </Grid>
        <Grid item xs={12}>
          <p>Description générale: nature des activites </p>
            <FormControlLabel
              control={<Checkbox color="secondary" name="checksonnel" value={100} />}
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
            control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
            label="exécution des tâches ne requérant pas de formation professionnelle spécifique."
            onChange={handleButtonRadio}
         />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
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
            control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
            label="bien exécuter les instructions données."
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

export default connect(mapStateToProps, mapDispatchToProps)(Form1)
