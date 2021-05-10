import React from 'react';
import { Typography, Grow, Paper } from '@material-ui/core';
import { MuiPickersUtilsProvider, } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns"
import { CalendarCustom, materialTheme  } from '../DatePicker/DatePicker';
import { ThemeProvider } from "@material-ui/styles";
import ListOfAppointment from './ListOfAppointment';

function RandomComponent({day}) {
  return(
    <Grow in>
      <div>
        <Typography variant="h6">Citas programadas para el {day}</Typography>
        <ListOfAppointment day={day}/>
      </div>
    </Grow>
  )
};

export default function EditAnAppointment() {
  const [day, setDay] = React.useState(0);
  return (
    <>
      <Grow in>
        <Paper>
          <Typography variant="h4">Editar Cita</Typography>
          <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <CalendarCustom setDayTwo={setDay} />
              </div>
            </MuiPickersUtilsProvider>
          </ThemeProvider>
          {day === 0 ? <h1>Elije una fecha en el calendario</h1> : <RandomComponent day={day}/>}
        </Paper>
      </Grow>
    </>
  )
};