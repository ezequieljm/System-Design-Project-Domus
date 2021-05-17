import React from "react";
import MakeQueryOfClient from "./ClientData";
import {
	Paper,
	makeStyles,
	Typography,
	Grow,
	Modal,
	Fade,
	Backdrop,
	Button,
} from "@material-ui/core";
import FormFill from "./FormOfUpdateClient";
import UploadDocs from "./UploadDocsEditClient";
import {CheckCircleOutline} from '@material-ui/icons';

const dbUsers = [
	{
		id: "298023",
		firtsname: "Jill",
		surname: "Valentine",
		razónSocial: "Dependiente",
		cuitCuil: "33-234235235-1",
		cellPhone: "+54-787699834",
		email: "jillValentine@stars.com",
		address: "Raccoon City 9862",
		houseAgent: "Gordon Freeman",
	},
];

const useStyle = makeStyles((theme) => ({
	rootPaper: {
		width: "70%",
		height: "300px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
	},
	divContent: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		background: "white",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		textAlign: "center",
	},
}));

export default function UpdateClient() {
	const classes = useStyle();
	const [open, setOpen] = React.useState(false);
	const [entryUser, setEntryUser] = React.useState("");
	const [renderViewFinedUser, setFinedUser] = React.useState(false);
	const [openConfirm, setOpenConfirm] = React.useState(false);

	const getFullName = (db, inx) => db[inx].firtsname + " " + db[inx].surname;
	const handleOpen = (e) => {
		e.preventDefault();
		getFullName(dbUsers, 0) === entryUser ? setFinedUser(true) : setOpen(true);
	};
	const handleClose = () => setOpen(false);

	React.useEffect(() => {
		setEntryUser("");
	}, [renderViewFinedUser]);

	const handleOpenConfirm = () => {
		setOpenConfirm(true);
	};
	const handleCloseConfirm = () => {
		setOpenConfirm(false);
		setFinedUser(!renderViewFinedUser);
	};

	return (
		<>
			{!renderViewFinedUser ? (
				<Grow in>
					<div className={classes.divContent}>
						<Paper elevation={3} className={classes.rootPaper}>
							<Typography variant='h3'>Buscar Cliente</Typography>
							<MakeQueryOfClient
								changeInput={setEntryUser}
								handleOpen={handleOpen}
							/>
						</Paper>
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
									<i
										class='fas fa-user-times'
										style={{
											marginBottom: "1rem",
											fontSize: "9rem",
											color: "#ef5350",
										}}></i>
									<Typography variant='h5'>Cliente no encontrado</Typography>
									<Typography variant='subtitle1'>
										{`El cliente "${entryUser}" no se encuentra registrado`}
									</Typography>
								</div>
							</Fade>
						</Modal>
					</div>
				</Grow>
			) : (
				<Paper
					elevation={3}
					style={{
						padding: "1rem",
						display: "flex",
						justifyContent: "space-around",
					}}>
					<div style={{ width: "45%" }}>
						<Typography variant='h4' style={{ marginBottom: "1rem" }}>
							{dbUsers[0].firtsname + " " + dbUsers[0].surname}
						</Typography>
						<FormFill />
						<div>
							<Button
								variant='contained'
								color='primary'
								style={{ marginTop: "1rem" }}
								onClick={handleOpenConfirm}>
								Confirmar
							</Button>
							<Modal
								className={classes.modal}
								open={openConfirm}
								onClose={handleCloseConfirm}
								closeAfterTransition
								BackdropComponent={Backdrop}
								BackdropProps={{
									timeout: 500,
								}}>
								<Fade in={openConfirm}>
									<div className={classes.paper}>
										<CheckCircleOutline
											style={{
												color: "green",
												fontSize: "9rem",
												margintBottom: "2rem",
											}}
										/>
										<h1 id='transition-modal-title'>
											Cliente actualizado exitosamente
										</h1>
									</div>
								</Fade>
							</Modal>
						</div>
					</div>
					<UploadDocs />
				</Paper>
			)}
		</>
	);
}
