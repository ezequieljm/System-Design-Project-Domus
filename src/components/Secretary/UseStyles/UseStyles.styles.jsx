// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolBar: {
    display: 'flex', 
    justifyContent: 'space-between',
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
  },
  fontListText: {
    fontSize: '.9rem',
  },
  buttonExit: {
    background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 38,
    padding: '0 40px',
  }
}));