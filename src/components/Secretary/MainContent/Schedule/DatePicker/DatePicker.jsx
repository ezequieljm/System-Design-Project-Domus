import "date-fns";
import React from "react";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DatePicker
} from "@material-ui/pickers";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A700,
      },
    },
    MuiPickersDay: {
      day: {
        color: '#4caf50',
      },
      daySelected: {
        backgroundColor: lightBlue["400"],
      },
      dayDisabled: {
        color: '#d32f2f',
      },
      current: {
        color: lightBlue["900"],
      },
    },
  },
});


export default function DatePickerCustom() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [date, changeDate] = React.useState(new Date());

  const handleDateChange = date => setSelectedDate(date);
  const disableRandomDates = () => Math.random() > 0.7;
  const showAndChangeDate = e => changeDate(e);

  return (
    <ThemeProvider theme={materialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Seleccionar fecha"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            shouldDisableDate={disableRandomDates}
          />
        <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Seleccionar hora"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <div style={{border: '1px solid black', width: '450px'}}>
            <DatePicker
              autoOk
              orientation="landscape"
              variant="static"
              openTo="date"
              value={date}
              onChange={showAndChangeDate}
              shouldDisableDate={disableRandomDates}
            />
          </div>

      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}