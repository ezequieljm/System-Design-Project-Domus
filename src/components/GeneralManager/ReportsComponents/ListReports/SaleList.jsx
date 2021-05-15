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
} from "@material-ui/core";
const TAX_RATE = 0.07;

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

function ccyFormat(num) {
	return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
	return qty * unit;
}

function createRow(desc, qty, unit) {
	const price = priceRow(qty, unit);
	return { desc, qty, unit, price };
}

function subtotal(items) {
	return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
	createRow("Paperclips (Box)", 100, 1.15),
	createRow("Paper (Case)", 10, 45.99),
	createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SaleList() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='spanning table'>
				<TableHead>
					<TableRow>
						<TableCell>Propiedad</TableCell>
						<TableCell align='right'>Tipo de Inmueble</TableCell>
						<TableCell align='right'>Fecha</TableCell>
						<TableCell align='right'>Localidad</TableCell>
						<TableCell align='right'>Agente</TableCell>
						<TableCell align='right'>Comprador</TableCell>
						<TableCell align='right'>Vendendor</TableCell>
						<TableCell align='right'>Forma de pago</TableCell>
						<TableCell align='right'>Monto</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.desc}>
							<TableCell>{row.desc}</TableCell>
							<TableCell align='right'>{row.qty}</TableCell>
							<TableCell align='right'>{row.unit}</TableCell>
							<TableCell align='right'>{ccyFormat(row.price)}</TableCell>
							<TableCell align='right'>{row.desc}</TableCell>
							<TableCell align='right'>{row.qty}</TableCell>
							<TableCell align='right'>{row.unit}</TableCell>
							<TableCell align='right'>{ccyFormat(row.price)}</TableCell>
							<TableCell align='right'>{ccyFormat(row.price)}</TableCell>
						</TableRow>
					))}
					<br />
					<br />
					<br />
					<TableRow>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<Table className={classes.table} aria-label='spanning table'>
				<br />
				<br />
				<br />
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.desc}>
							<TableCell>{row.desc}</TableCell>
							<TableCell align='right'>{row.qty}</TableCell>
							<TableCell align='right'>{row.unit}</TableCell>
							<TableCell align='right'>{ccyFormat(row.price)}</TableCell>
							<TableCell align='right'>{row.desc}</TableCell>
							<TableCell align='right'>{row.qty}</TableCell>
							<TableCell align='right'>{row.unit}</TableCell>
							<TableCell align='right'>{ccyFormat(row.price)}</TableCell>
							<TableCell align='right'>{ccyFormat(row.price)}</TableCell>
						</TableRow>
					))}
					<br />
					<br />
					<br />
					<TableRow>
						<TableCell colSpan={1}>Subtotal</TableCell>
						<TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
