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
        Ouvrier "D" qualifif?? 3eme cat??gorie
      </Typography>
{props.userEval.division === "Putman Services" &&

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <p>Objectif de la fonction: </p>
            <FormControlLabel
              control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
              label="Effectue les m??tiers de l?????lectricien suivant sa classification professionnelle."
              onChange={handleButtonRadio}
              />
        </Grid>
        <Grid item xs={12}>
          <p>Description g??n??rale: nature des activites </p>
            <FormControlLabel
              control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
              label="L'ouvrier est capable de r??aliser fr??quemment diff??rents travaux d???ordre g??n??ral suivant sa classification professionnelle et la t??che qui lui est d??finie."
              onChange={handleButtonRadio}
            />
        </Grid>
        <Grid item xs={12}>
          <p>Interaction sociale: </p>
            <FormControlLabel
              control={<Checkbox color="secondary" name="electricPlan" value={100} />}
              label="Donner des consignes et des instructions ?? l?????quipe dont il a la charge."
              onChange={handleButtonRadio}
            />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Transf??rer des connaissances et des id??es."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Rapporter ?? son sup??rieur."
            onChange={handleButtonRadio}
         />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Echanger des informations avec divers services internes (ressources humaines, service technique, ???)."
            onChange={handleButtonRadio}
          />
        </Grid>   
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricBox" value={100} />}
            label="Peut ??ventuellement avoir un contact avec le magasin et le service technique, SIPP, d???autres corps de m??tier."
            onChange={handleButtonRadio}
          />
        </Grid> 
      </Grid>
}
{props.userEval.division === "Infratec2" &&
  <Grid container spacing={6}>
  <Grid item xs={12}>
    <p>Objectif de la fonction: </p>
      <FormControlLabel
        control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
        label="Effectue les m??tiers de l?????lectricien suivant sa classification professionnelle."
        onChange={handleButtonRadio}
        />
  </Grid>
  <Grid item xs={12}>
    <p>Description g??n??rale: nature des activites </p>
      <FormControlLabel
        control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
        label="L'ouvrier est capable de r??aliser fr??quemment diff??rents travaux d???ordre g??n??ral suivant sa classification professionnelle et la t??che qui lui est d??finie."
        onChange={handleButtonRadio}
      />
  </Grid>
  <Grid item xs={12}>
    <p>Interaction sociale: </p>
      <FormControlLabel
        control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
        label="Donner des consignes et des instructions ?? l?????quipe dont il a la charge."
        onChange={handleButtonRadio}
      />
  </Grid>
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
      label="Transf??rer des connaissances et des id??es."
      onChange={handleButtonRadio}
    />
  </Grid>
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="cartoSkills" value={100} />}
      label="Rapporter ?? son sup??rieur."
      onChange={handleButtonRadio}
   />
  </Grid>
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="mapSkills" value={100} />}
      label="Echanger des informations avec divers services internes (ressources humaines, service technique, ???)."
      onChange={handleButtonRadio}
    />
  </Grid>   
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="mapSkills" value={100} />}
      label="Peut ??ventuellement avoir un contact avec le magasin et le service technique, SIPP, d???autres corps de m??tier."
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
