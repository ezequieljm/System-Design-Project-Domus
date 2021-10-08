// React Libs
import React from "react";

// Material UI Components
import MainContent from "./MainContent/MainContent";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { CssBaseline, Avatar, Drawer, List, Typography, ListItem } from "@material-ui/core";
import { AppBar, Tabs, Tab, Button, Collapse, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import { arrIconsList, arrIconsSchedule, arrIconsClient } from "./Icons/ExportIcons";
import { BusinessCenter, Today, NotificationsNone, ArrowForwardIos } from "@material-ui/icons";

// React Router
import { useHistory } from "react-router-dom";

// Styles
import { useMyStyles } from "./stylesSec";

const configs = [
	"Configuración",
	"Recargar página",
	"Reportar problema",
	"Consultar manual",
];

const requestsTool = [
	"Listar Solicitudes",
	"Actualizar Lista",
	"Imprimir",
	"Herramientas",
];

const RequestListTools = ({ hand, inx }) =>
    <List>
        {requestsTool.map((text, index) => (
            <ListItem
                button
                key={text}
                selected={inx === index}
                onClick={e => hand(e, index)}>
                <ListItemIcon>{arrIconsList[index]}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>

const PageTools = ({ hand, inx }) => 
    <List>
        {configs.map((text, index) =>
            <ListItem
                button
                key={text}
                selected={inx === index + 4}
                onClick={e => hand(e, index + 4)}>
                <ListItemIcon>{arrIconsList[index + 4]}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        )}
    </List>

const ScheduleListTools = ({ hand, inx }) => 
    <List>
        {["Agendar Cita", "Mostrar Agenda"].map((text, index) => (
            <ListItem
                button
                key={text}
                selected={inx === index}
                onClick={e => hand(e, index)}>
                <ListItemIcon>{arrIconsSchedule[index]}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>

function ClientListTools({ hand }) {
	const arrTool = ["Actualizar Datos", "Nuevo Cliente"];
	const arrSubTool = ["Corporativo", "Particular"];

	const [stateTool, setStateTool] = React.useState({ open: false, index: 0 });
	const handleClick = (event, inx) => {
		hand(event, inx);
		inx === 1
			? setStateTool({ ...stateTool, open: !stateTool.open, index: inx })
			: setStateTool({ ...stateTool, open: false, index: inx });
	};

	const handleSubTool = (event, inx) => {
		hand(event, inx);
		setStateTool({ ...stateTool, index: inx });
	};

	return (
		<List>
			{arrTool.map((text, index) => (
				<ListItem
					button
					key={text}
					onClick={(e) => handleClick(e, index)}
					selected={stateTool.index === index}>
					<ListItemIcon>{arrIconsClient[index]}</ListItemIcon>
					<ListItemText primary={text} />
					{index === 1 && (stateTool.open ? <ExpandLess /> : <ExpandMore />)}
				</ListItem>
			))}
			<Collapse in={stateTool.open} timeout='auto' unmountOnExit>
				<List component='div' disablePadding>
					{arrSubTool.map((text, index) => (
						<ListItem
							button
							key={text}
							style={{ paddingLeft: 40 }}
							onClick={(e) => handleSubTool(e, index + 2)}
							selected={stateTool.index === index + 2}>
							<ListItemIcon>{arrIconsClient[index + 2]}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Collapse>
		</List>
	);
}

const Secretary = () => {
	const classes = useMyStyles();
	const history = useHistory();
	const [value, setValue] = React.useState(0);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleChange = (event, newValue) => setValue(newValue);
	const handleListItemClick = (event, index) => setSelectedIndex(index);

	React.useEffect(() => {
		setSelectedIndex(0);
	}, [value]);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appbarNav}>
				<Toolbar />
				<div className={classes.toolBar}>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor='primary'
						style={{ paddingLeft: "2rem" }}>
						<Tab label='Clientes' />
						<Tab label='Agenda' />
						<Tab label='Solicitudes' />
					</Tabs>
					<Typography style={{ paddingRight: "2rem" }}>
						Viernes 14 de Mayo 2021
					</Typography>
				</div>
			</AppBar>
			<AppBar position='fixed' className={classes.appBarMain}>
				<Toolbar className={classes.toolBar}>
					<div className={classes.divsAppbar}>
						<BusinessCenter />
						<Typography variant='h5' noWrap>
							Oficina Virtual
						</Typography>
						<ArrowForwardIos />
						<Typography variant='subtitle1' noWrap>
							Secretaría
						</Typography>
					</div>
					<div className={classes.divsAppbar}>
						<Today />
						<NotificationsNone />
						<Avatar className={classes.green}>J</Avatar>
						<Button onClick={() => history.push("/")} color='secondary' variant='contained'>
							Salir
						</Button>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{ paper: classes.drawerPaper }}>
				<Toolbar />
				<Toolbar />
				<div className={classes.drawerContainer}>
					{value === 2 && (
						<RequestListTools hand={handleListItemClick} inx={selectedIndex} />
					)}
					{value === 1 && (
						<ScheduleListTools hand={handleListItemClick} inx={selectedIndex} />
					)}
					{value === 0 && <ClientListTools hand={handleListItemClick} />}
					<PageTools hand={handleListItemClick} inx={selectedIndex} />
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				<Toolbar />
				<MainContent val={value} inxTool={selectedIndex} />
			</main>
		</div>
	);
}

export default Secretary;
