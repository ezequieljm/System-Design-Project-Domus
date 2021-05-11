import React from "react";
import { ListSubheader, Collapse, Avatar, Drawer, AppBar, CssBaseline, Toolbar, List, Typography, ListItem, ListItemIcon, ListItemText, Button, Tab, Tabs } from "@material-ui/core";
import {ArrowForwardIos, NotificationsNone, Today, BusinessCenter, Mail, MoveToInbox } from '@material-ui/icons';
import { useStyles, } from "./styles";
import { ExpandLess, ExpandMore, } from "@material-ui/icons";

function HerramientasPropiedades({hanList, inx}) {
  return (
    <List>
      {["Agenda", "Propiedades"].map((text, index) => (
        <ListItem button key={text}
          selected={inx === index}
          onClick={(event) => hanList(event, index)}
        >
          <ListItemIcon>
            {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )
};

function HerramientasAgenda({hanList, inx}) {
  return (
    <List>
      {["Mostrar Agenda"].map((text, index) => (
        <ListItem button key={text}
          selected={inx === index}
          onClick={(event) => hanList(event, index)}
        >
          <ListItemIcon>
            {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )
};

export default function HouseAgent({fnExit}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [nestedList, setNestedList] = React.useState(true);

  const handleNavbarTab = (event, newValue) => setValue(newValue);
  const handleListItemClick = (event, index) => setSelectedIndex(index);
  const handleNestedList = () => setNestedList(!nestedList);

  const getCurrentDate = () => new Date().toDateString();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBarNav}>
      <Toolbar />
        <Toolbar className={classes.toolBar}>
          <Tabs 
            value={value} 
            onChange={handleNavbarTab} 
            indicatorColor="primary" 
          >
            <Tab label="Agenda" />
            <Tab label="Propiedades" />
          </Tabs>
          <Typography>{getCurrentDate()}</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" className={classes.appBarMain}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.appBarMainDivs}>
            <BusinessCenter />
            <Typography variant="h5" noWrap>Oficina Virtual</Typography>
            <ArrowForwardIos />
            <Typography variant="p" noWrap>Agente Inmobiliario</Typography>
          </div>
          <div className={classes.appBarMainIconsUs}>
            <Today />
            <NotificationsNone />
            <Avatar>N</Avatar>
            <Button variant="contained" color="secondary" onClick={fnExit}>Salir</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer 
        className={classes.drawer} 
        variant="permanent" 
        classes={{ paper: classes.drawerPaper }} 
      >
        <Toolbar />
        <Toolbar />
        <div className={classes.drawerContainer}>
          {
            value === 1 
              ? <HerramientasPropiedades hanList={handleListItemClick} inx={selectedIndex} />
              : <HerramientasAgenda hanList={handleListItemClick} inx={selectedIndex} />
          }
          <List>
            {["Configuración", "Recargar Página", "Reportar Problema", "Consultar Manual"].map((text, index) => (
              <ListItem button key={text}
                selected={selectedIndex === index + 2}
                onClick={(event) => handleListItemClick(event, index + 2)}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <BusinessCenter /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Toolbar />
        
      </main>
    </div>
  );
}