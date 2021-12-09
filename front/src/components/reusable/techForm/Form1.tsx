import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Form1() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
      L'ouvrier est capable de réaliser fréquemment différents travaux d’ordre général suivant sa classification professionnelle et la tâche qui lui
      est définie.
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Donner des consignes et des instructions à l’équipe dont il a la charge."
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Transférer des connaissances et des idées."
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Rapporter à son supérieur."
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Echanger des informations avec divers services internes (ressources humaines, service technique, …)."
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Peut éventuellement avoir un contact avec le magasin et le service technique, SIPP, d’autres corps de métier."
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="veiller à ce qu’aucune difficulté technique - de quelque nature que ce soit - ne surgisse pendant l’exécution du travail,
            en la prévoyant et en cherchant à appliquer la solution adéquate afin d’éviter des retards dans les travaux."
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="est responsable de la conduite du chantier tant sur le plan technique que sur le plan organisationnel;"
          />
        </Grid>   <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="fait des rapports écrits à ses supérieurs, discute avec eux des possibilités de réalisation, fait appel à leur aide si nécessaire;"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}