import React from "react";
import {
	InputAdornment,
	TextField,
	makeStyles,
	Button,
	Paper,
	Typography,
	Modal,
	Backdrop,
	Fade,
	Grow,
} from "@material-ui/core";
import { Search, StreetviewTwoTone } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import DataHouse from "./DataHouse";

const useStyles = makeStyles((theme) => ({
	rootDiv: {
		width: "80%",
		height: "120px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	btn: {
		width: "20%",
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

function TransitionsModal({ open, handleClose }) {
	const classes = useStyles();

	return (
		<div>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				className={classes.btn}>
				Buscar
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

const validUser = "fa1234";
export default function RantalPayment({ changeInput }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [idClient, setIdClient] = React.useState("");
	const [currentView, setView] = React.useState(0);

	const handleOpen = (e) => {
		e.preventDefault();
		validUser === idClient ? setView(1) : setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const showChange = (e) => setIdClient(e.currentTarget.value);

	return (
		<>
			{currentView === 0 && (
				<Grow in>
					<Paper elevation={5}>
						<Typography variant='h3'>Buscar Cliente</Typography>
						<form className={classes.rootDiv} onSubmit={handleOpen}>
							<TextField
								label='Código del cliente'
								InputProps={{
									endAdornment: (
										<InputAdornment>
											<IconButton>
												<Search />
											</IconButton>
										</InputAdornment>
									),
								}}
								fullWidth
								variant='outlined'
								onChange={showChange}
								required
							/>
							<TransitionsModal open={open} handleClose={handleClose} />
						</form>
					</Paper>
				</Grow>
			)}
			{currentView === 1 && (
				<Grow in>
					<Paper elevation={5}>
            <DataHouse />
						<Button onClick={() => setView(0)}>Volver</Button>
					</Paper>
				</Grow>
			)}
		</>
	);
}
