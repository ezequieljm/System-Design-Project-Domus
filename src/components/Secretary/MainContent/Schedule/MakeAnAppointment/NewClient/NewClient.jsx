import React from 'react';
import { Button, Typography, Paper, FormControl, TextField, Grow } from '@material-ui/core';
import DatePickerCustom from '../../DatePicker/DatePicker';
import MenuItem from '@material-ui/core/MenuItem';

/* Component of new client form */
function FormNewClient() {
  return(
    <form action="" >
        <FormControl style={{marginRight: '2rem'}}>
          <TextField label="Nombre" helperText="Nombre y Apellido del cliente" />
        </FormControl>

        <FormControl style={{marginRight: '2rem'}}>
          <TextField label="Teléfono" helperText="Número de Teléfono" />
        </FormControl>

        <FormControl >
          <TextField label="Email" helperText="Correo electrónico" />
        </FormControl>
    </form>
  );
};


/* Component selection house agent */
function SelectHouseAgent({dayAvailable}) {
  const [currency, setCurrency] = React.useState('Ned Bigby');

  const currencies = [
    {
      agent: 'Ned Bigby',
      label: '$',
    },
    {
      agent: 'Gordon Freeman',
      label: '€',
    },
    {
      agent: 'Barney Calhoun',
      label: '฿',
    },
    {
      agent: 'John Price',
      label: '¥',
    },
  ];

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <TextField
        id="standard-select-currency"
        select
        label="Agente inmobiliario"
        value={currency}
        onChange={handleChange}
        helperText={`Agentes disponibles para fecha ${dayAvailable}`}
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.agent} value={option.agent}>
            {option.agent}
          </MenuItem>
        ))}
      </TextField>
    </>
  )
}

/* Main Component */
export default function NewClient({setView}) {
  const [day, setDay] = React.useState(new Date().toLocaleDateString());

  return (
    <Grow in>
      <Paper elevation={5} style={{padding: '2rem'}}>
        <Typography variant="h4">Cita Nuevo Cliente</Typography>
        <br />
        <Typography variant="h6">1. Complete los campos con los datos del cliente</Typography>
        <FormNewClient />
        <br />
        <Typography variant="h6">2. Seleccione un día y horario para la cita</Typography>
        <DatePickerCustom setDay={setDay}/>
        <br />
        <Typography variant="h6">3. Seleccione un agente inmobiliario</Typography>
        <SelectHouseAgent dayAvailable={day}/>
        <br />
        <br />
        <Typography variant="h6">4. Ingrese el código de al propiedad</Typography>
        <br />
        <Button variant="contained" onClick={() => alert('Cita Agendada')}>Agendar Cita</Button>
        <Button onClick={() => setView(2)}>Volver</Button>
      </Paper>
    </Grow>

  );
};
