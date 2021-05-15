import React from "react";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

export default function CalendarOfReports() {
	const [selectedDate, handleDateChange] = React.useState(new Date());
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
			<DatePicker
				autoOk
				orientation='landscape'
				variant='static'
				value={selectedDate}
				onChange={handleDateChange}
				disableToolbar
			/>
		</MuiPickersUtilsProvider>
	);
}
