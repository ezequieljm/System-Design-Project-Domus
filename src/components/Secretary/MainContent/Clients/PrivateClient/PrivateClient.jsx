import React from 'react';
import { makeStyles } from '@material-ui/core';
import { 
  Card,
  Typography
} from '@material-ui/core';
import StepperHorizontal from '../StepperHorizontal'

const useStyles = makeStyles({
  card: {
    minWidth: '600px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: '2rem'
  },
  divFormPrivateClient: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const PrivateClient = () => {
  const classes = useStyles();
  return (
    <div id="form-private-client" className={classes.divFormPrivateClient} >
      <Card className={classes.card} >
        <Typography variant="h5" style={{marginBottom: '1rem'}}>Nuevo Cliente Perticular</Typography>
        <StepperHorizontal />
      </Card>
    </div>
  )
};

export default PrivateClient;