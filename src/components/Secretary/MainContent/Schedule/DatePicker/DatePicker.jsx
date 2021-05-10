import "date-fns";
import React from "react";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker
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

function TimerCustom() {
  const [date, changeDate] = React.useState(new Date());
  return(
    <div style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <TimePicker
        autoOk
        ampm={false}
        variant="static"
        orientation="landscape"
        openTo="minutes"
        value={date}
        onChange={changeDate}
      />
    </div>
  );
};

function CalendarCustom({setDayTwo}) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    setDayTwo(new Date(date).toLocaleDateString());
  };

  function disableRandomDates(day, pickerProps) {
    return Math.random() > 0.7;
  }
  return (
    <div style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={selectedDate}
        onChange={handleDateChange}
        shouldDisableDate={disableRandomDates}
      />
    </div>
  )
};

export default function DatePickerCustom({setDay}) {
  return (
    <div>
      <ThemeProvider theme={materialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <CalendarCustom setDayTwo={setDay} />
            <TimerCustom />
          </div>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </div>
  );
}