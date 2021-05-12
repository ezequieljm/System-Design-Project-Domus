import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainContent from './MainContent/MainContent';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {CssBaseline, Avatar, Drawer, List, Typography, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, Tabs, Tab, Button, Collapse, } from '@material-ui/core';
import { arrIconsList, arrIconsSchedule, arrIconsClient } from './Icons/ExportIcons';
import { BusinessCenter, Today, NotificationsNone, ArrowForwardIos, } from '@material-ui/icons';

const configs = ['Configuración', 'Recargar página', 'Reportar problema', 'Consultar manual'];
const requestsTool = ['Listar Solicitudes', 'Actualizar Lista', 'Imprimir', 'Herramientas'];
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarMain: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appbarNav: {
    background: 'white',
    zIndex: theme.zIndex.drawer + 1,
    color: 'black',
  },
  toolBar: {
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  tabsStyles: {
    color: 'black',
    backgroundColor: 'white',
  },
  divTabDate: {
    display: 'flex', 
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black'
  },
  fontListText: {
    fontSize: '.9rem',
  },
  buttonExit: {
    background: 'linear-gradient(to bottom, #cb2d3e, #ef473a)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 38,
    padding: '0 20px',
  },
  divsAppbar: {
    width: '300px', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
}));

function RequestListTools({hand, inx}) {
  return(
    <List>
      {requestsTool.map((text, index) => (
        <ListItem button key={text} selected={inx === index} onClick={e => hand(e, index)} >
          <ListItemIcon>
            {arrIconsList[index]}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}

function ScheduleListTools({hand, inx}) {
  const scheduleTool = ['Agendar Cita', 'Mostrar Agenda'];
  return(
    <List>
      {scheduleTool.map((text, index) => (
        <ListItem 
          button 
          key={text} 
          selected={inx === index} 
          onClick={e => hand(e, index)}
        >
          <ListItemIcon>
            {arrIconsSchedule[index]}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}

function ClientListTools({hand}) {
  const arrTool = ['Actualizar Datos', 'Nuevo Cliente'];
  const arrSubTool = ['Corporativo', 'Particular'];

  const [stateTool, setStateTool] = React.useState({open: false, index: 0});
  const handleClick = (event, inx) => {
    hand(event, inx);
    inx === 1 
      ? setStateTool({...stateTool, open: !stateTool.open, index: inx}) 
      : setStateTool({...stateTool, open: false, index: inx})
  }
  
  const handleSubTool = (event, inx) => {
    hand(event, inx);
    setStateTool({...stateTool, index: inx});
  }

  return(
    <List>
      {arrTool.map((text, index) => (
          <ListItem button key={text} onClick={e => handleClick(e, index)} selected={stateTool.index === index}>
            <ListItemIcon>{arrIconsClient[index]}</ListItemIcon>
            <ListItemText primary={text}/>
            {index === 1 && (stateTool.open ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
      ))}
      <Collapse in={stateTool.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {arrSubTool.map((text, index) => (
              <ListItem button key={text} style={{paddingLeft: 40}} onClick={e => handleSubTool(e, index + 2)} 
                selected={stateTool.index === index + 2}
              >
                <ListItemIcon>{arrIconsClient[index + 2]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

function PageTools({hand, inx}) {
  return (
    <List>
      {configs.map((text, index) => (
        <ListItem 
          button 
          key={text}
          selected={inx === index + 4}
          onClick={e => hand(e, index + 4)}
        >
          <ListItemIcon>{arrIconsList[index + 4]}</ListItemIcon>
          <ListItemText primary={text}/>
        </ListItem>
      ))}
    </List>
  );
}

export default function Secretary({exit}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);
  const handleListItemClick = (event, index) => setSelectedIndex(index);
  const getDate = () => new Date().toDateString();

  return (
    <div className={classes.root}>
      <CssBaseline /> 
      <AppBar position="fixed" className={classes.appbarNav}>
        <Toolbar />
          <div className={classes.toolBar}>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              indicatorColor="primary" 
              style={{paddingLeft: '2rem'}}
            >
              <Tab label="Clientes" />
              <Tab label="Agenda" />
              <Tab label="Solicitudes" />
            </Tabs>
            <Typography style={{paddingRight: '2rem'}}>{getDate()}</Typography>
          </div>
      </AppBar>
      <AppBar position="fixed" className={classes.appBarMain}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.divsAppbar}>
            <BusinessCenter />
            <Typography variant="h5" noWrap>Oficina Virtual</Typography>
            <ArrowForwardIos />
            <Typography variant="p" noWrap>Secretaría</Typography>
          </div>
          <div className={classes.divsAppbar}>
            <Today />
            <NotificationsNone />
            <Avatar className={classes.green}>J</Avatar>
            <Button onClick={exit} color="secondary" variant="contained">Salir</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer 
        className={classes.drawer} 
        variant="permanent" 
        classes={{ paper:classes.drawerPaper }}
      >
        <Toolbar />
        <Toolbar />
        <div className={classes.drawerContainer}>
          { value === 2 && <RequestListTools hand={handleListItemClick} inx={selectedIndex} /> }
          { value === 1 && <ScheduleListTools hand={handleListItemClick} inx={selectedIndex} /> } 
          { value === 0 && <ClientListTools hand={handleListItemClick} /> }
          <PageTools hand={handleListItemClick} inx={selectedIndex} />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Toolbar />
        <MainContent val={value} inxTool={selectedIndex}/>
      </main>
    </div>
  );
}