import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolBar: {
    display: 'flex', 
    justifyContent: 'space-between',
    height: '50px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    height: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
  }
}));

const Secretary = ({exit}) => {
  const classes = useStyles();
  const getDate = () => new Date().toDateString();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" noWrap>
            Oficina Virtual
          </Typography>
          <Button onClick={exit} variant="contained" color="secondary">Salir</Button>
        </Toolbar>
        <div className={classes.divTabDate}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            className={classes.tabsStyles}
          >
            <Tab label="Clientes" />
            <Tab label="Agenda" />
            <Tab label="Solicitudes" />
          </Tabs>
          <h4>{getDate()}</h4>
        </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key="crear-cita" onClick={() => alert('Usted está creando una cita')}>
              <ListItemText primary="Crear Cita" />
            </ListItem>
            {['Listar Solicitudes', 'Actualizar Lista', 'Imprimir', 'Herramientas'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <List>
            {['Configuración', 'Recargar página', 'Reportar problema', 'Consultar manual'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Toolbar />
        <Typography paragraph variant='h4'>Solicitudes</Typography>
      </main>
    </div>
  );
}

export default Secretary;