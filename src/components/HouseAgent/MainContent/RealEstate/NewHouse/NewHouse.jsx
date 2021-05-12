import React from 'react';
import { Typography, Grow, Paper } from '@material-ui/core';

export default function NewHouse() {
  return (
    <Grow in>
      <Paper elevation={5} style={{padding: '1rem'}}>
        <Typography variant="h4">Nueva Propiedad</Typography> 
      </Paper>
    </Grow>
  )
};