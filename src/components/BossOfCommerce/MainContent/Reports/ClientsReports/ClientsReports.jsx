import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ClientsReports() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={months}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Mes" variant="outlined" />}
    />
  );
}

const months = [
  { month: 'Enero', },
  { month: 'Febrero', },
  { month: 'Marzo', },
  { month: 'Abril', },
  { month: 'Mayo', },
  { month: 'Junio', },
  { month: 'Julio', },
  { month: 'Agosto', },
  { month: 'Septiembre', },
  { month: 'Octubre', },
  { month: 'Noviembre', },
  { month: 'Diciembre', },
];