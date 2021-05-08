import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';
import { 
  InputLabel, 
  Input, 
  FormHelperText, 
} from '@material-ui/core';

const useStyles = makeStyles({
  form: {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
  },
  divsContent: {
    width: '671px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px'
  },
  divFormPrivateClient: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const FormPrivateClient = () => {
  const classes = useStyles();

  return (
    <div id="form-private-client" className={classes.divFormPrivateClient} >
      <form action="" className={classes.form} >
        <div className={classes.divsContent}>
          <FormControl required fullWidth style={{marginRight: '2rem'}}>
            <InputLabel htmlFor="my-input">Nombre/s</InputLabel>
            <Input id="input-name" aria-describedby="my-helper-text" type="text" />
            <FormHelperText id="my-helper-text">Nombre/s del Cliente.</FormHelperText>
          </FormControl>
          <FormControl required  fullWidth >
            <InputLabel htmlFor="my-input">Apellido/s</InputLabel>
            <Input id="input-surname" aria-describedby="my-helper-text" type="text" />
            <FormHelperText id="my-helper-text">Apellido/s del Cliente.</FormHelperText>
          </FormControl>
        </div>

        <div className={classes.divsContent}>
          <FormControl required fullWidth style={{marginRight: '2rem'}}>
            <InputLabel htmlFor="my-input">DNI</InputLabel>
            <Input id="input-dni" aria-describedby="my-helper-text" type="text" />
            <FormHelperText id="my-helper-text">DNI del Cliente.</FormHelperText>
          </FormControl>
          <FormControl required fullWidth>
            <InputLabel htmlFor="my-input">CUIL/CUIT</InputLabel>
            <Input id="input-phone" aria-describedby="my-helper-text" type="text" />
            <FormHelperText id="my-helper-text">CUIL/CUIT del Cliente.</FormHelperText>
          </FormControl>
        </div>

        <div className={classes.divsContent}>
          <FormControl required fullWidth style={{marginRight: '2rem'}}>
            <InputLabel htmlFor="my-input">Teléfono</InputLabel>
            <Input id="input-phone" aria-describedby="my-helper-text" type="text" />
            <FormHelperText id="my-helper-text">Teléfono del Cliente.</FormHelperText>
          </FormControl>
          <FormControl required fullWidth>
            <InputLabel htmlFor="my-input">Fecha de Nacimiento</InputLabel>
            <Input id="input-birth" aria-describedby="my-helper-text" type="text" />
            <FormHelperText id="my-helper-text">Fecha de Nacimiento del Cliente.</FormHelperText>
          </FormControl>
        </div>

        <div className={classes.divsContent}>
          <FormControl required fullWidth>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="input-email" aria-describedby="my-helper-text" type="email" fullWidth/>
            <FormHelperText id="my-helper-text">Email del Cliente.</FormHelperText>
          </FormControl>
        </div>
      </form>
    </div>
  )
};

export default FormPrivateClient;