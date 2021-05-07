import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import useStyles from './UseStyles/UseStyles.styles';
import MainContent from './MainContent/MainContent';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// Icons
import { arrIconsList, arrIconsSchedule, arrIconsClient } from './Icons/ExportIcons';

const txtTab = ['Clientes', 'Agenda', 'Solicitudes'];
const configs = ['Configuración', 'Recargar página', 'Reportar problema', 'Consultar manual'];
const requestsTool = ['Listar Solicitudes', 'Actualizar Lista', 'Imprimir', 'Herramientas'];
const scheduleTool = ['Agendar Cita', 'Editar Cita', 'Eliminar Cita', 'Mostrar Agenda'];

function RequestListTools({handleListItemClick, selectedIndex}) {
  return(
    <List>
      {requestsTool.map((text, index) => (
        <ListItem button key={text} selected={selectedIndex === index} onClick={e => handleListItemClick(e, index)} >
          <ListItemIcon>
            {arrIconsList[index]}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}

function ScheduleListTools({handleListItemClick, selectedIndex}) {
  return(
    <List>
      {scheduleTool.map((text, index) => (
        <ListItem 
          button 
          key={text} 
          selected={selectedIndex === index} 
          onClick={e => handleListItemClick(e, index)}
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

function ClientListTools({handleListItemClick}) {
  const arrTool = ['Actualizar Datos', 'Nuevo Cliente'];
  const arrSubTool = ['Corporativo', 'Particular'];

  const [stateTool, setStateTool] = React.useState({open: false, index: 0});
  const handleClick = (event, inx) => {
    handleListItemClick(event, inx);
    inx === 1 
      ? setStateTool({...stateTool, open: !stateTool.open, index: inx}) 
      : setStateTool({...stateTool, open: false, index: inx})
  }
  
  const handleSubTool = (event, inx) => {
    handleListItemClick(event, inx);
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

function PageTools({handleListItemClick, selectedIndex}) {
  return (
    <List>
      {configs.map((text, index) => (
        <ListItem 
          button 
          key={text}
          selected={selectedIndex === index + 4}
          onClick={e => handleListItemClick(e, index + 4)}
        >
          <ListItemIcon>{arrIconsList[index + 4]}</ListItemIcon>
          <ListItemText primary={
            <Typography variant="caption" display="block" gutterBottom>{text}</Typography>
          }/>
        </ListItem>
      ))}
    </List>
  );
}

const Secretary = ({exit}) => {
  /* Styles jss */
  const classes = useStyles();

  /* This is state for navbar CLIENTES AGENDA SOLUCITUDES  */ 
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => setValue(newValue);

  /* This state is for the list items */
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    console.log(index);
    setSelectedIndex(index);
  }

  /* To get current date of system */
  const getDate = () => new Date().toDateString();

  return (
    <div className={classes.root}>

      {/* Header */} 
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" noWrap>
            Oficina Virtual
          </Typography>
          <Button onClick={exit} className={classes.buttonExit}>Salir</Button>
        </Toolbar>
        <div className={classes.divTabDate}>
          <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabsStyles}>
            <Tab label={txtTab[0]} />
            <Tab label={txtTab[1]} />
            <Tab label={txtTab[2]} />
          </Tabs>
          <h4>{getDate()}</h4>
        </div>
      </AppBar>

      {/* Left Menu */}
      <Drawer className={classes.drawer} variant="permanent" classes={{paper:classes.drawerPaper}}>
        <Toolbar />
        <Toolbar />
        <div className={classes.drawerContainer}>
          {
            value === 2 
              ? <RequestListTools handleListItemClick={handleListItemClick} selectedIndex={selectedIndex}/>
              : value === 1
                ? <ScheduleListTools handleListItemClick={handleListItemClick} selectedIndex={selectedIndex} />
                : <ClientListTools handleListItemClick={handleListItemClick}/>
          }
          <PageTools handleListItemClick={handleListItemClick} selectedIndex={selectedIndex}/>
        </div>
      </Drawer>

      {/* Main Content */}
      <main className={classes.content}>
        <Toolbar />
        <Toolbar />
        <MainContent val={value} inxTool={selectedIndex}/>
      </main>
    </div>
  );
}

export default Secretary;