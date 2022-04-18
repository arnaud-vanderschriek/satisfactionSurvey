import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';
import { setInfratec2TechInfos, setPutmanServicesTechInfos } from '../../../redux/actions/user.action';

function Form1(props: any) {
  function handleButtonRadio(e: any) {
    if(e.target.checked) {
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
    } else {
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
  }

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
      Questionnaire technique: 
      </Typography>
      {props.user.division === "Putman Services" &&
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
              label="Donner des consignes et des instructions à l’équipe dont il a la charge."
              onChange={handleButtonRadio}
            /> 
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
              label="Transférer des connaissances et des idées."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricPlan" value={100} />}
              label="Rapporter à son supérieur."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Echanger des informations avec divers services internes (ressources humaines, service technique, …)."
            onChange={handleButtonRadio}
            />
          </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="electricBox" value={100} />}
                label="Peut éventuellement avoir un contact avec le magasin et le service technique, SIPP, d’autres corps de métier."
                onChange={handleButtonRadio}
              />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="electricBox" value={100} />}
                label="veiller à ce qu’aucune difficulté technique - de quelque nature que ce soit - ne surgisse pendant l’exécution du travail,
                en la prévoyant et en cherchant à appliquer la solution adéquate afin d’éviter des retards dans les travaux."
                onChange={handleButtonRadio}
              />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="electricBox" value={100} />}
                label="est responsable de la conduite du chantier tant sur le plan technique que sur le plan organisationnel;"
                onChange={handleButtonRadio}
              />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="electricBox" value={100} />}
                label="fait des rapports écrits à ses supérieurs, discute avec eux des possibilités de réalisation, fait appel à leur aide si nécessaire;"
                onChange={handleButtonRadio}
              />
            </Grid>
          </Grid>
        }

        {props.user.division === "Infratec2" && 
         <Grid container spacing={6}>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="checksonnel" value={100} />}
              label="Donner un appui aux équipes d’ouvriers spécialisés en assumant des tâches manuelles d’ordre général."
              onChange={handleButtonRadio}
            />
           </Grid> 
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="checksonnel" value={100} />}
              label="L'ouvrier est capable de réaliser fréquemment différents travaux d’ordre général suivant sa classification professionnelle et la tâche qui lui est définie."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
              label="Rendre compte au responsable du chantier et se concerter au sujet du chantier, des tâches à exécuter et savoir travailler en équipe.
              Peut éventuellement avoir un contact avec le magasin et le service technique, SIPP, d’autres corps de métier."
              onChange={handleButtonRadio}
            />
          </Grid>
          <Grid item xs={12}>
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
      }  
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    putmanServicesStatsUser: state.putmanServicesStatsUser,
    userToFindInUsers: state.userToFindInUsers,
    infratec2StatsUser: state.infratec2StatsUser
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPutmanServicesTechInfos: (data: any) => dispatch(setPutmanServicesTechInfos(data)),
    setInfratec2TechInfos: (data: any) => dispatch(setInfratec2TechInfos(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form1)
