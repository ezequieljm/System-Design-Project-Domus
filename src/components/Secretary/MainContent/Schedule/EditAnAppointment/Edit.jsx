import React from 'react';
import { Typography, Grow, Paper, } from '@material-ui/core';
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns"
import { materialTheme, CalendarVertical  } from '../DatePicker/DatePicker';
import { ThemeProvider } from "@material-ui/styles";
import ListOfAppointment from './ListOfAppointment';
import DetailedAccordion from './ListAppointment/DetailAccordion';

function RandomComponent({day}) {
  return(
    <Grow in>
      <div style={{maxWidth: '70%', minWidth: '65%', maxHeight: '700px',padding: '1rem',}}>
        <Typography variant="h4" color="primary" style={{marginBottom: '1rem'}}>Mie May 05</Typography>
        <div style={{height: '90%', overflow: 'auto'}}>
          <DetailedAccordion />
        </div>
      </div>
    </Grow>
  )
};

export default function EditAnAppointment() {
  const [day, setDay] = React.useState(0);
  return (
    <>
      <Grow in>
        <Paper elevation={5} style={{padding: '1rem', }}>
          <Typography variant="h4" style={{marginBottom: '1rem'}}>Agenda</Typography>
          <div style={{display: 'flex', justifyContent: 'space-between',}}>
            {day === 0 ? <h1>Elije una fecha en el calendario</h1> : <RandomComponent day={day}/>}
            <div style={{maxWidth:'35%'}} >
                <ThemeProvider theme={materialTheme}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                    <CalendarVertical setDayTwo={setDay} disableToolbar/>
                  </MuiPickersUtilsProvider>
                </ThemeProvider>
            </div>
          </div>
        </Paper>
      </Grow>
    </>
  )
};