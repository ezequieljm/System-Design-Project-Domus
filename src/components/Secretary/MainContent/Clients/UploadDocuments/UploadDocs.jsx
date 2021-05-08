import React from 'react';
import { 
  Typography, 
  makeStyles, 
  TextField,
  Button,
} from '@material-ui/core';
import { Publish } from '@material-ui/icons';
import ListDocs from './ListDocs';

const useStyles = makeStyles({
  root: {
    width: '900px',
    height: '230px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  dropBox: {
    width: '500px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px dashed black',
  },
  icons: {
    fontSize: '5rem',
    color: 'grey'
  },
  nameDescrip: {
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
})

export default function UploadDocs() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div id="dropzone-files" className={classes.dropBox}>
          <Publish className={classes.icons} />
          <Typography variant="h5" style={{color: 'grey'}}>Arrastra el archivo aquí</Typography>
        </div>
        <div className={classes.nameDescrip}>
          <TextField label="Nombre" multiline variant="outlined" fullWidth placeholder="file.txt"/>
          <TextField label="Descriptción" multiline rows={4} variant="outlined" fullWidth/>
          <Button variant="contained" color="primary">Agregar</Button>
        </div>
      </div>
      <ListDocs />
    </>
  );
};