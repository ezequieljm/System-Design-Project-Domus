import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'

function ComponentAppbar({classes, fExit, textTabs, changeMainContent}) {
  const getDate = () => new Date().toDateString();

  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeMainContent(newValue);
  };

  return (
   <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" noWrap>
            Oficina Virtual
          </Typography>
          <Button onClick={fExit} variant="contained" color="secondary">Salir</Button>
        </Toolbar>
        <div className={classes.divTabDate}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            className={classes.tabsStyles}
          >
            <Tab label={textTabs[0]} />
            <Tab label={textTabs[1]} />
            <Tab label={textTabs[2]} />
          </Tabs>
          <h4>{getDate()}</h4>
        </div>
      </AppBar>
  );
}
export default ComponentAppbar;