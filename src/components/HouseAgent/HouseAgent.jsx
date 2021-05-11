import React from "react";
import { Avatar, Drawer, AppBar, CssBaseline, Toolbar, List, Typography, ListItem, ListItemIcon, ListItemText, Button, Tab, Tabs } from "@material-ui/core";
import {ArrowForwardIos, NotificationsNone, Today, BusinessCenter, Mail, MoveToInbox } from '@material-ui/icons';
import { useStyles, } from "./styles";

export default function HouseAgent({fnExit}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getCurrentDate = () => new Date().toDateString();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBarNav}>
      <Toolbar />
        <Toolbar className={classes.toolBar}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
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
      <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }} >
        <Toolbar />
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Agenda", "Propiedades"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <List>
            {["Configuración", "Recargar Página", "Reportar Problema", "Consultar Manual"].map((text, index) => (
              <ListItem button key={text}>
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}