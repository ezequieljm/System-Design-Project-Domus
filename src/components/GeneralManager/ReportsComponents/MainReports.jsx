import React from "react";
import { Typography, Paper } from "@material-ui/core";
import {
	ReportsSale,
	ReportsRental,
	ReportsClients,
	ReportsHouses,
} from "./ReportsComponents";
import CalendarOfReports from "./CalendarOfReports";
import CustomizedRadios from "./RadioGroup";
import ListReport from "./ListReport";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		// border: "1px solid black",
	},
	calendarReports: {
		// border: "1px solid black",
	},
}));

export default function MainReports() {
	const classes = useStyles();
	const [typeOfReport, setReport] = React.useState("");
	const [showReportOrList, setRepList] = React.useState(0);

	return (
		<>
			<Paper elevation={5} style={{ padding: "1rem" }}>
				<Typography variant='h4'>Reportes</Typography>
				<div className={`${classes.root} ${classes.calendarReports}`}>
					<CalendarOfReports />
					<CustomizedRadios setReport={setReport} setRepList={setRepList} />
				</div>
				{showReportOrList === 1 && (
					<div>
						{typeOfReport === "ventas" && <ReportsSale showList={setRepList} />}
						{typeOfReport === "alquileres" && (
							<ReportsRental showList={setRepList} />
						)}
						{typeOfReport === "clientes" && (
							<ReportsClients showList={setRepList} />
						)}
						{typeOfReport === "propiedades" && (
							<ReportsHouses showList={setRepList} />
						)}
					</div>
				)}
				{showReportOrList === 2 && (
					<ListReport setRepList={setRepList} typeOfReport={typeOfReport} />
				)}
			</Paper>
		</>
	);
}
