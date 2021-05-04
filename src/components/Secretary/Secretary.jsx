import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './UseStyles/UseStyles';
import arrIconsList from './Icons/ExportIcons';
import AddBox from '@material-ui/icons/AddBox';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'


const txtTab = ['Clientes', 'Agenda', 'Solicitudes'];
const requestsTool = ['Listar Solicitudes', 'Actualizar Lista', 'Imprimir', 'Herramientas'];

const Secretary = ({exit}) => {
  const classes = useStyles();

  /* State main content */ 
  const [mainContent, setContent] = React.useState('');
  const changeMainContent = aValue => setContent(txtTab[aValue]);

  /* This state is for the list items */
  const [selectedIndex, setSelectedIndex] = React.useState();
  const handleListItemClick = (event, index) => setSelectedIndex(index);


  const getDate = () => new Date().toDateString();

  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeMainContent(newValue);
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
            <Tab label={txtTab[0]} />
            <Tab label={txtTab[1]} />
            <Tab label={txtTab[2]} />
          </Tabs>
          <h4>{getDate()}</h4>
        </div>
      </AppBar>


      <Drawer className={classes.drawer} variant="permanent" classes={{ paper:classes.drawerPaper}}>
        <Toolbar />
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key="crear-cita" onClick={() => console.log('Crear cita')}>
              <ListItemIcon>
                <AddBox />
              </ListItemIcon>
              <ListItemText primary="Crear Cita" />
            </ListItem>
            {requestsTool.map((text, index) => (
              <ListItem 
                button 
                key={text} 
                selected={selectedIndex === index} 
                onClick={e => handleListItemClick(e, index)}
              >
                <ListItemIcon>
                  {arrIconsList[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <List>
            {['Configuración', 'Recargar página', 'Reportar problema', 'Consultar manual'].map((text, index) => (
              <ListItem 
                button 
                key={text}
                selected={selectedIndex === index + 4}
                onClick={e => handleListItemClick(e, index + 4)}
              >
                <ListItemIcon>{arrIconsList[index + 4]}</ListItemIcon>
                <ListItemText primary={
                  <Typography variant="caption" display="block" gutterBottom className={classes.fontListText}>
                    {text}
                  </Typography>
                }/>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Toolbar />
        <Typography paragraph variant='h4'>{mainContent}</Typography>
      </main>
    </div>
  );
}

export default Secretary;