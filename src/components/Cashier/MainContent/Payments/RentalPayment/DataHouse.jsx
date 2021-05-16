import React from "react";
import {
	Button,
	Typography,
	Modal,
	Fade,
	Backdrop,
	Grow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckCircleOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
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
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	mainContent: {
		display: "flex",
		flexDirection: "column",
	},
	borderBlack: {
		border: "1px solid black",
	},
}));

function TransitionsModal({ open, handleClose }) {
	const classes = useStyles();

	return (
		<div className={classes.modal}>
			<Button type='submit' variant='contained' color='primary'>
				Asentar el Pago
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
						<CheckCircleOutline
							style={{
								color: "green",
								fontSize: "9rem",
								margintBottom: "2rem",
							}}
						/>
						<h1 id='transition-modal-title'>
							Transacción registrada exitosamente
						</h1>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default function DataHouse() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [print, setPrint] = React.useState(false);

	const handleOpen = (e) => {
		e.preventDefault();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setPrint(true);
	};

	return (
		<div className={classes.mainContent}>
			<div className={classes.borderBlack}>
				<Typography variant='h4'>Datos del inmueble</Typography>
			</div>
			<div className={classes.borderBlack}>
				<Typography variant='h4'>Formulario para rellenar</Typography>
			</div>
			<form action='' onSubmit={handleOpen}>
				<TransitionsModal open={open} handleClose={handleClose} />
			</form>
			{print && (
				<Grow in>
					<div>
						<Button variant='contained'>Imprimir Ticket</Button>
					</div>
				</Grow>
			)}
		</div>
	);
}
