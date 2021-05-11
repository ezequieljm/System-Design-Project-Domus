import React from 'react';
import { Paper, Grow } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from 'date-fns/locale/es';
import { makeStyles } from '@material-ui/core';
import { ListActivity } from './ListActivity';

const stylesOfDatePicker = makeStyles({
  datePick: {
    minWidth: '25%', 
    maxHeight: 300,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
});

const StaticDatePicker = () => {
  const classes = stylesOfDatePicker();
  const [date, changeDate] = React.useState(new Date());
  return (
      <div className={classes.datePick}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
          <DatePicker
            autoOk
            orientation="landscape"
            variant="static"
            openTo="date"
            value={date}
            onChange={changeDate}
          />
        </MuiPickersUtilsProvider>
      </div>
  );
};

const useStyles = makeStyles({
  mainPaper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  paperList: {
    width: '65%',
    minWidth: '50%',
    maxHeight: 400, 
    overflow: 'auto',
  }
});

export default function ReviewConsultUpdate(){
  const classes = useStyles();

  return (
    <Grow in>
      <Paper elevation={5} style={{padding: '1rem'}}>
        <h1>Revisar agenda, Consultar agenda, actualizar estado</h1>
        <div className={classes.mainPaper}>
          <StaticDatePicker />
          <Paper elevation={5} className={classes.paperList}>
            <ListActivity />
          </Paper>
        </div>
      </Paper>
    </Grow>
  );
};