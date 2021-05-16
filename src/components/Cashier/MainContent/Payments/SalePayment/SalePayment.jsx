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
import { Search } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import DataHouseAndUser from "./DataHouseAndUser";

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
						<h1 id='transition-modal-title'>Propiedad no encontrado</h1>
						<p id='transition-modal-description'>
							Asegurese de que el código de la propiedad sea el correcto
						</p>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

const validHouse = "0000";
export default function SalePayment() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [idClient, setIdClient] = React.useState("");
	const [currentView, setView] = React.useState(0);

	const handleOpen = (e) => {
		e.preventDefault();
		validHouse === idClient ? setView(1) : setOpen(true);
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
						<Typography variant='h3'>Buscar Propiedad</Typography>
						<form className={classes.rootDiv} onSubmit={handleOpen}>
							<TextField
								label='Código de la propiedad'
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
						<DataHouseAndUser />
						<Button onClick={() => setView(0)}>Volver</Button>
					</Paper>
				</Grow>
			)}
		</>
	);
}
