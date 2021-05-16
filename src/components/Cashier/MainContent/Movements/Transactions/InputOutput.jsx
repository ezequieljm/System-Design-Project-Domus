import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { green } from "@material-ui/core/colors";
import {
	Fade,
	Backdrop,
	Modal,
	Box,
	Fab,
	Zoom,
	Tabs,
	Tab,
	AppBar,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: "100%",
		position: "relative",
		minHeight: 200,
	},
	fab: {
		position: "absolute",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	fabGreen: {
		color: theme.palette.common.white,
		backgroundColor: green[500],
		"&:hover": {
			backgroundColor: green[600],
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

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`action-tabpanel-${index}`}
			aria-labelledby={`action-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `action-tab-${index}`,
		"aria-controls": `action-tabpanel-${index}`,
	};
}

function TransitionsModal({ open, handleClose }) {
	const classes = useStyles();
	const [openTwo, setOpen] = React.useState(false);

	const handleOpenTwo = () => {
		setOpen(true);
	};

	const handleCloseTwo = () => {
		setOpen(false);
	};

	const addTrans = () => {
		handleClose();
		handleOpenTwo();
	};

	return (
		<div>
			<Modal
				className={classes.modal}
				open={open}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 id='transition-modal-title'>Transition modal</h2>
						<p id='transition-modal-description'>
							react-transition-group animates me.
						</p>
						<button onClick={addTrans}>Agregar</button>
					</div>
				</Fade>
			</Modal>
			<Modal
				className={classes.modal}
				open={openTwo}
				closeAfterTransition
				onClose={handleCloseTwo}
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={openTwo}>
					<div className={classes.paper}>
						<h2 id='transition-modal-title'>Transition modal</h2>
						<p id='transition-modal-description'>
							react-transition-group animates me.
						</p>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default function InputOutput() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	/* 	const handleChangeIndex = (index) => {
		setValue(index);
	}; */

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	};

	const fabs = [
		{
			color: "primary",
			className: classes.fab,
			icon: <AddIcon />,
			label: "Add",
		},
		{
			color: "secondary",
			className: classes.fab,
			icon: <AddIcon />,
			label: "Edit",
		},
	];

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='fullWidth'>
					<Tab label='Entradas' {...a11yProps(0)} />
					<Tab label='Salidas' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<div>
				<TabPanel value={value} index={0} dir={theme.direction}>
					Listado de entradas
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					Listado de Salidas
				</TabPanel>
			</div>
			{fabs.map((fab, index) => (
				<Zoom
					key={fab.color}
					in={value === index}
					timeout={transitionDuration}
					style={{
						transitionDelay: `${
							value === index ? transitionDuration.exit : 0
						}ms`,
					}}
					unmountOnExit>
					<Fab className={fab.className} color={fab.color} onClick={handleOpen}>
						{fab.icon}
					</Fab>
				</Zoom>
			))}
			<TransitionsModal open={open} handleClose={handleClose} />
		</div>
	);
}





/* 

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(number, occupant, ower, date, amount) {
  return { number, occupant, ower, date, amount };
}

const rowsEntry = [
  createData("#AE8765", "Johnny Bravo", "#FA9876", "06/04/2021", 7654.99),
  createData("#AE7653", "Leonel Messi", "#FA9323", "06/04/2021", 7532.99),
  createData("#AE9862", "Cristiano Ronaldo", "#FA9235", "06/04/2021", 8769.99),
  createData("#A64533", "Tom Cruise", "#FA9673", "06/04/2021", 6534.99)
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Número</TableCell>
            <TableCell align="right">Inquilino</TableCell>
            <TableCell align="right">Inmueble</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{ fontSize: "1.5rem" }}>Alquileres</TableCell>
          </TableRow>
          <TableRow style={{ background: "green" }}>
            <TableCell style={{ fontSize: "1rem" }}>Entradas</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          {rowsEntry.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.occupant}</TableCell>
              <TableCell align="right">{row.ower}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">Subtotal</TableCell>
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">
              {rowsEntry.reduce((acc, curr) => acc + curr.amount, 0)}
            </TableCell>
          </TableRow>
          <TableRow style={{ background: "green" }}>
            <TableCell style={{ fontSize: "1rem" }}>Salidas</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          {rowsEntry.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.occupant}</TableCell>
              <TableCell align="right">{row.ower}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">Subtotal</TableCell>
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">
              {rowsEntry.reduce((acc, curr) => acc + curr.amount, 0)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">Total Neto</TableCell>
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">
              {rowsEntry.reduce((acc, curr) => acc + curr.amount, 0) * 2}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(number, buyer, ower, house, date, amount) {
  return { number, buyer, ower, house, date, amount };
}

const rowsEntry = [
  createData(
    "#AD8765",
    "Johnny Bravo",
    "Donald Trump",
    "#FA0000",
    "07/05/2021",
    765432.99
  ),
  createData(
    "#AD8765",
    "Johnny Bravo",
    "Donald Trump",
    "#FA0000",
    "07/05/2021",
    792345.99
  ),
  createData(
    "#AD8765",
    "Johnny Bravo",
    "Donald Trump",
    "#FA0000",
    "07/05/2021",
    234433.99
  ),
  createData(
    "#AD8765",
    "Johnny Bravo",
    "Donald Trump",
    "#FA0000",
    "07/05/2021",
    100000.99
  )
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Número</TableCell>
            <TableCell align="right">Comprador</TableCell>
            <TableCell align="right">Propietario</TableCell>
            <TableCell align="right">Inmueble</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{ fontSize: "1.5rem" }}>Ventas</TableCell>
          </TableRow>
          <TableRow style={{ background: "green" }}>
            <TableCell style={{ fontSize: "1rem" }}>Entradas</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          {rowsEntry.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.buyer}</TableCell>
              <TableCell align="right">{row.ower}</TableCell>
              <TableCell align="right">{row.house}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">
              Subtotal
            </TableCell>
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">
              {rowsEntry.reduce((acc, curr) => acc + curr.amount, 0)}
            </TableCell>
          </TableRow>
          <TableRow style={{ background: "green" }}>
            <TableCell style={{ fontSize: "1rem" }}>Salidas</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          {rowsEntry.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.buyer}</TableCell>
              <TableCell align="right">{row.ower}</TableCell>
              <TableCell align="right">{row.house}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">
              Subtotal
            </TableCell>
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">
              {rowsEntry.reduce((acc, curr) => acc + curr.amount, 0)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">
              Total Neto
            </TableCell>
            <TableCell />
            <TableCell style={{ fontSize: "1rem" }} align="right">
            {rowsEntry.reduce((acc, curr) => acc + curr.amount, 0) * 2}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
*/