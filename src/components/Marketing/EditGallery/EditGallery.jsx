import React from "react";
import {
	Typography,
	Button,
	Paper,
	Grow,
	Modal,
	Backdrop,
	Fade,
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
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	},
}));
function SaveChanges({ setViewGallery }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setViewGallery(0);
	};

	return (
		<div>
			<Button onClick={handleOpen} variant='contained' color='primary'>
				Guardar Cambios
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
            <CheckCircleOutline style={{fontSize: '9rem', color: 'green', marginBottom: '1rem'}} />
						<Typography variant='h4'>
							Cambios Guardados Correctamente
						</Typography>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default function EditGallery({ setViewGallery }) {
	return (
		<Grow in>
			<Paper elevaton={5} style={{ padding: "1rem" }}>
				<Typography variant='h4'>Editar Galeria</Typography>
				<SaveChanges setViewGallery={setViewGallery} />
			</Paper>
		</Grow>
	);
}
