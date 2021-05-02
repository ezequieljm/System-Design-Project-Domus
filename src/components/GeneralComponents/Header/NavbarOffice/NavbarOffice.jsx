import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export const ButtonAppBar = ({sendFn}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Oficina Virtual
          </Typography>
          <Avatar className={classes.purple}>J</Avatar>
          <Button color="inherit" onClick={sendFn}>Salir</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export const CenteredTabs = ({arrLbl, fnTitle}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    fnTitle(event,event.target.innerHTML);
  };

  return (
    <Paper className="">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label={arrLbl[0]} />
        <Tab label={arrLbl[1]} />
        <Tab label={arrLbl[2]} />
      </Tabs>
    </Paper>
  );
}

const NavbarOffice = ({extendFn, appbar, chgTitle}) => {
  return (
    <div className="navbar-office">
      <ButtonAppBar sendFn={extendFn}/>
      <CenteredTabs arrLbl={appbar} fnTitle={chgTitle}/>
    </div>
  );
};

export default NavbarOffice;