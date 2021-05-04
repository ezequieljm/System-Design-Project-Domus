import { makeStyles } from '@material-ui/core/styles';

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
  },
  fontListText: {
    fontSize: '.9rem',
  }
}));

export default useStyles;