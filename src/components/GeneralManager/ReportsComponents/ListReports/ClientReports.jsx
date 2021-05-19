/* import React from "react";
import { Typography, } from "@material-ui/core";

export default function ClientReports() {
	return (
		<>
			<Typography variant='h1'>Reportes de Clientes</Typography>
		</>
	);
} */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		minWidth: 700,
		maxHeight: 500,
	},
});

function createRow(
	house,
	type,
	address,
	locale,
	ower,
	date,
	agent,
	occupant,
	contract,
	price
) {
	return {
		house,
		type,
		address,
		locale,
		ower,
		date,
		agent,
		occupant,
		contract,
		price,
	};
}
const rows = [
	createRow(
		"Johnny Bravo",
		"40659752",
		"Resistencia",
		"Departamento",
		"Compra",
		"11/04/2021",
	),
	createRow(
		"Timmy Turner",
		"40659752",
		"Resistencia",
		"Departamento",
		"Compra",
		"11/04/2021",
	),
	createRow(
		"Gallo Claudio",
		"40659752",
		"Resistencia",
		"Local",
		"Compra",
		"11/04/2021",
	),
	createRow(
		"Gumball Watterson",
		"40659752",
		"Resistencia",
		"Casa",
		"Compra",
		"11/04/2021",
	),
];



// const total = rows.reduce((acc, curr) => acc + Number(curr.price), 0);

export default function ClientReports() {
	const classes = useStyles();
	return (
		<TableContainer component={Paper} className={classes.table}>
			<Table className={classes.table} stickyHeader>
				<TableHead style={{ background: "#9fa8da" }}>
					<TableRow>
						<TableCell>Propiedad</TableCell>
						<TableCell align='right'>Tipo de Inmueble</TableCell>
						<TableCell align='right'>Dirección</TableCell>
						<TableCell align='right'>Localidad</TableCell>
						<TableCell align='right'>Propietario</TableCell>
						<TableCell align='right'>Fecha</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={4}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>4</TableCell>
					</TableRow>
					<br />
					<br />
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={4}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>4</TableCell>
					</TableRow>
					<br />
					<br />
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={4}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>4</TableCell>
					</TableRow>
					<br />
					<br />
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={4}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>4</TableCell>
					</TableRow>
					<br />
					<br />
					{rows.map((row) => (
						<TableRow key={row.house}>
							<TableCell>{row.house}</TableCell>
							<TableCell align='right'>{row.type}</TableCell>
							<TableCell align='right'>{row.address}</TableCell>
							<TableCell align='right'>{row.locale}</TableCell>
							<TableCell align='right'>{row.ower}</TableCell>
							<TableCell align='right'>{row.date}</TableCell>
						</TableRow>
					))}
					<br />
					<TableRow>
						<TableCell colSpan={4}></TableCell>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>4</TableCell>
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell colSpan={1}>Total General</TableCell>
						<TableCell align='right'>
							16
						</TableCell>
					</TableRow>
					<br />
					<br />
				</TableBody>
			</Table>
		</TableContainer>
	);
}

