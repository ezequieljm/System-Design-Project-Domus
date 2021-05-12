import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { 
  Typography, 
  Grow, 
  Paper, 
  FormControl, 
  Input, 
  InputLabel, 
  FormHelperText, 
  Button, 
  FormGroup, 
  FormControlLabel, 
  Checkbox,
  RadioGroup,
  Radio,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formCtrl: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

function CheckboxLabels() {
  const [service, setService] = React.useState({
    luz: false,
    agua: false,
    internet: false,
    television: false,
  });

  const handleChangeService = e => {
    setService({ ...service, [e.target.name]: e.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <GreenCheckbox 
            checked={service.luz} 
            onChange={handleChangeService} 
            name="luz" 
          />
        }
        label="Luz"
      />
      <FormControlLabel
        control={
          <GreenCheckbox 
            checked={service.agua} 
            onChange={handleChangeService} 
            name="agua" 
          />
        }
        label="Agua"
      />
      <FormControlLabel
        control={
          <GreenCheckbox 
            checked={service.internet} 
            onChange={handleChangeService} 
            name="internet" 
          />
        }
        label="Internet"
      />
      <FormControlLabel
        control={
          <GreenCheckbox 
            checked={service.television} 
            onChange={handleChangeService} 
            name="television" 
          />
        }
        label="Televisión"
      />
    </FormGroup>
  );
}

export default function NewHouse() {
  const classes = useStyles();

  const submitedDatas = e => {
    e.preventDefault();
    alert("Data submited")
  };

  const [kindHouse, setKindHouse] = React.useState('Departamento');
  const handleChangeKindHouse = e => {
    setKindHouse(e.target.value);
  };

  const [kindClient, setKindClient] = React.useState('Corporativo');
  const handleChangeKindClient = e => {
    setKindClient(e.target.value);
  };

  const [kindContract, setKindContract] = React.useState('Venta');
  const handleChangeKindContract = e => {
    setKindContract(e.target.value);
  };

  /* const [service, setService] = React.useState('Luz');
  const handleChangeService = e => {
    setService(e.target.value);
  }; */

  return (
    <Grow in>
      <Paper elevation={5} style={{padding: '1rem'}}>
        <Typography variant="h4">Nueva Propiedad</Typography> 
        <form action="" onSubmit={submitedDatas}>
          <div id="kind">
            <Typography variant="h5">Tipo de Propiedad</Typography>
            <RadioGroup name="kindHouse" value={kindHouse} onChange={handleChangeKindHouse} className={classes.formCtrl}>
              <FormControlLabel value="Departamento" control={<Radio />} label="Departamento" />
              <FormControlLabel value="Casa" control={<Radio />} label="Casa" />
              <FormControlLabel value="Chalet" control={<Radio />} label="Chalet" />
              <FormControlLabel value="Local" control={<Radio />} label="Local" />
              <FormControlLabel value="Casa con local" control={<Radio />} label="Casa con local" />
              <FormControlLabel value="Cabaña" control={<Radio />} label="Cabaña" />
              <FormControlLabel value="Cochera" control={<Radio />} label="Cochera" />
            </RadioGroup>
          </div>
          <div id="location">
            <Typography variant="h5">Ubicación</Typography>
            <div>
              <FormControl required autofocus>
                <InputLabel htmlFor="my-input">País</InputLabel>
                <Input />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </FormControl>
              <FormControl required autofocus>
                <InputLabel htmlFor="my-input">Provincia</InputLabel>
                <Input />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </FormControl>
              <FormControl required autofocus>
                <InputLabel htmlFor="my-input">Localidad</InputLabel>
                <Input />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </FormControl>
            </div>

            <div>
              <FormControl required autofocus>
                <InputLabel htmlFor="my-input">Barrio</InputLabel>
                <Input />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </FormControl>
              <FormControl required autofocus>
                <InputLabel htmlFor="my-input">Dirección</InputLabel>
                <Input />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </FormControl>
              <FormControl required autofocus>
                <InputLabel htmlFor="my-input">Calle</InputLabel>
                <Input />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </FormControl>
            </div>
            
            <div>
              <FormControl required autofocus>
                <InputLabel htmlFor="my-input">Piso</InputLabel>
                <Input />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </FormControl>
              <FormControl required autofocus>
                <InputLabel htmlFor="my-input">Número</InputLabel>
                <Input />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </FormControl>
              <FormControl required autofocus>
                <InputLabel htmlFor="my-input">Código Postal</InputLabel>
                <Input />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </FormControl>
            </div>
          </div>

          <div id="cantidad">
            <Typography variant="h5">Cantidad</Typography>
            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Baños</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Dormitorios</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Suites</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Antiguedad</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Espacios con los que cuenta</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Artefactos con los que cuenta</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>
          </div>

          <Typography variant="h5">Servicios</Typography>
          <CheckboxLabels />
          <hr />
          <div id="propietario">
            <Typography variant="h5">Datos del propietario</Typography>
            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Número de cliente</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <RadioGroup name="kindClient" value={kindClient} onChange={handleChangeKindClient} className={classes.formCtrl}>
              <FormControlLabel value="corporativo" control={<Radio />} label="Corporativo" />
              <FormControlLabel value="particular" control={<Radio />} label="Particular" />
            </RadioGroup>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Nombre</InputLabel>
              <Input type="text" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Apellido</InputLabel>
              <Input type="text" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">DNI</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Teléfono</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input type="number" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>

            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Dirección</InputLabel>
              <Input type="text" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>
          </div>

          <Typography variant="h5">Tipo de contrato</Typography>
          <RadioGroup name="kindContract" value={kindContract} onChange={handleChangeKindContract} className={classes.formCtrl}>
            <FormControlLabel value="venta" control={<Radio />} label="Venta" />
            <FormControlLabel value="alquiler" control={<Radio />} label="Alquiler" />
          </RadioGroup>


          <FormControl required autofocus>
            <InputLabel htmlFor="my-input">Precio</InputLabel>
            <Input type="text" />
            <FormHelperText id="my-helper-text">Precio del inmueble</FormHelperText>
          </FormControl>

          <div>
            <FormControl required autofocus>
              <InputLabel htmlFor="my-input">Descripción</InputLabel>
              <Input type="text" />
              <FormHelperText id="my-helper-text">Breve descripción de la propiedad</FormHelperText>
            </FormControl>
            <TextField 
              id="standard-multiline-static" 
              label="Descripción detallada" 
              multiline 
              rows={4} 
              defaultValue="Escribe aquí..." 
            />
          </div>

          <Button type="submit" variant="contained" color="primary">Guardar Cambios</Button>
        </form>

      </Paper>
    </Grow>
  )
};