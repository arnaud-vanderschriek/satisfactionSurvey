import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';

import { setInfractec2Stats, setPutmanServicesStats } from '../../../../../redux/actions/user.action';

function Form3(props: any) {
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
{props.user.division === "Putman Services" &&

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
            label="Donner des consignes et des instructions ?? l?????quipe dont il a la charge."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
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
            control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
            label="Echanger des informations avec divers services internes (ressources humaines, service technique, ???)."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="plug" value={100} />}
            label="Peut ??ventuellement avoir un contact avec le magasin et le service technique, SIPP, d???autres corps de m??tier."
            onChange={handleButtonRadio}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="electricPlan" value={100} />}
            label="veiller ?? ce qu???aucune difficult?? technique - de quelque nature que ce soit - ne surgisse pendant l???ex??cution du travail,
            en la pr??voyant et en cherchant ?? appliquer la solution ad??quate afin d?????viter des retards dans les travaux."
            onChange={handleButtonRadio}
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="manoeuvre" value={100} />}
            label="est responsable de la conduite du chantier tant sur le plan technique que sur le plan organisationnel;"
            onChange={handleButtonRadio}
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="plug" value={100} />}
            label="fait des rapports ??crits ?? ses sup??rieurs, discute avec eux des possibilit??s de r??alisation, fait appel ?? leur aide si n??cessaire"
            onChange={handleButtonRadio}
          />
        </Grid>
      </Grid>
}
{props.user.division === "Infratec2" &&
   <Grid container spacing={6}>
   <Grid item xs={12}>
     <FormControlLabel
       control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
       label="Donner des consignes et des instructions ?? l?????quipe dont il a la charge."
       onChange={handleButtonRadio}
     />
   </Grid>
   <Grid item xs={12}>
     <FormControlLabel
       control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
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
       control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
       label="Echanger des informations avec divers services internes (ressources humaines, service technique, ???)."
       onChange={handleButtonRadio}
     />
   </Grid>
   <Grid item xs={12}>
     <FormControlLabel
       control={<Checkbox color="secondary" name="skillsNetwork" value={100} />}
       label="Peut ??ventuellement avoir un contact avec le magasin et le service technique, SIPP, d???autres corps de m??tier."
       onChange={handleButtonRadio}
     />
   </Grid>
   <Grid item xs={12}>
     <FormControlLabel
       control={<Checkbox color="secondary" name="skillsExplorer" value={100} />}
       label="veiller ?? ce qu???aucune difficult?? technique - de quelque nature que ce soit - ne surgisse pendant l???ex??cution du travail,
       en la pr??voyant et en cherchant ?? appliquer la solution ad??quate afin d?????viter des retards dans les travaux."
       onChange={handleButtonRadio}
     />
   </Grid>   <Grid item xs={12}>
     <FormControlLabel
       control={<Checkbox color="secondary" name="checkSonnel" value={100} />}
       label="est responsable de la conduite du chantier tant sur le plan technique que sur le plan organisationnel;"
       onChange={handleButtonRadio}
     />
   </Grid>   
   <Grid item xs={12}>
     <FormControlLabel
       control={<Checkbox color="secondary" name="skillsBook" value={100} />}
       label="fait des rapports ??crits ?? ses sup??rieurs, discute avec eux des possibilit??s de r??alisation, fait appel ?? leur aide si n??cessaire"
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

export default connect(mapStateToProps, mapDispatchToProps)(Form3)
