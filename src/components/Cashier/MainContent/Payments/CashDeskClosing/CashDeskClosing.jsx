import { Button, Typography } from "@material-ui/core";
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
	IconButton,
	Collapse,
	Box,
	Modal,
	Fade,
	Backdrop,
} from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

const useRowStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function createData(name, calories, fat, carbs, protein, price) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price,
		history: [
			{ date: "2020-01-05", customerId: "11091700", amount: 3 },
			{ date: "2020-01-02", customerId: "Anonymous", amount: 1 },
		],
	};
}

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row'>
					{row.name}
				</TableCell>
				<TableCell align='right'>{row.calories}</TableCell>
				<TableCell align='right'>{row.fat}</TableCell>
				<TableCell align='right'>{row.carbs}</TableCell>
				<TableCell align='right'>{row.protein}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box margin={1}>
							<Typography variant='h6' gutterBottom component='div'>
								History
							</Typography>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>
										<TableCell>Customer</TableCell>
										<TableCell align='right'>Amount</TableCell>
										<TableCell align='right'>Total price ($)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.date}>
											<TableCell component='th' scope='row'>
												{historyRow.date}
											</TableCell>
											<TableCell>{historyRow.customerId}</TableCell>
											<TableCell align='right'>{historyRow.amount}</TableCell>
											<TableCell align='right'>
												{Math.round(historyRow.amount * row.price * 100) / 100}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
	createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
	createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
	createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

function CollapsibleTable() {
	return (
		<TableContainer component={Paper}>
			<Table aria-label='collapsible table'>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align='right'>Calories</TableCell>
						<TableCell align='right'>Fat&nbsp;(g)</TableCell>
						<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
						<TableCell align='right'>Protein&nbsp;(g)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>Entradas</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Caja de alquieres</TableCell>
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
					</TableRow>
					{rows.map((row) => (
						<Row key={row.name} row={row} />
					))}
					<TableRow>
						<TableCell colSpan={4} />
						<TableCell>Subtotal</TableCell>
						<TableCell />
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell>Caja de Ventas</TableCell>
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
					</TableRow>
					{rows.map((row) => (
						<Row key={row.name} row={row} />
					))}
					<TableRow>
						<TableCell colSpan={4} />
						<TableCell>Subtotal</TableCell>
						<TableCell />
					</TableRow>
					<br />
					<TableRow>
						<TableCell colSpan={4} />
						<TableCell>Total Ingresos</TableCell>
						<TableCell />
					</TableRow>

					<TableRow>
						<TableCell>Salidas</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Caja de alquieres</TableCell>
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
					</TableRow>
					{rows.map((row) => (
						<Row key={row.name} row={row} />
					))}
					<TableRow>
						<TableCell colSpan={4} />
						<TableCell>Subtotal</TableCell>
						<TableCell />
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell>Caja de Ventas</TableCell>
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
						<TableCell />
					</TableRow>
					{rows.map((row) => (
						<Row key={row.name} row={row} />
					))}
					<TableRow>
						<TableCell colSpan={4} />
						<TableCell>Subtotal</TableCell>
						<TableCell />
					</TableRow>
					<br />
					<TableRow>
						<TableCell colSpan={4} />
						<TableCell>Total Egresos</TableCell>
						<TableCell />
					</TableRow>
					<br />
					<br />
					<TableRow>
						<TableCell colSpan={4} />
						<TableCell>Total General</TableCell>
						<TableCell />
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}

function TransitionsModal({ open, handleClose, handleOpen}) {
	const classes = useRowStyles();

	return (
		<div>
			<Button
				type='submit'
				variant='contained'
				color='primary'
        onClick={handleOpen}
				className={classes.btn}>
				Imprimir Balance
			</Button>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<h1 id='transition-modal-title'>Locatario no encontrado</h1>
						<p id='transition-modal-description'>
							Asegurese de que el código de cliente sea el correcto
						</p>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default function CashDeskClosing() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = (e) => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<div
				style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
				<Typography variant='h4' style={{ marginRight: "2rem" }}>
					Último cierre de caja
				</Typography>
				<Typography variant='h6'>05/05/2021</Typography>
			</div>
			<div
				style={{
					border: "1px solid black",
				}}>
				<CollapsibleTable />
			</div>
			<TransitionsModal open={open} handleClose={handleClose} handleOpen={handleOpen} />
		</>
	);
}
