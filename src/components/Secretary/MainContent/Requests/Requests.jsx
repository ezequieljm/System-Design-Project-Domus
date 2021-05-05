import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ContentCards from './Cards';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, phone, email, age) {
  return {
    name,
    phone,
    email,
    age,
    descripcionDetallada:{
      asunto: 'Primera visita a la propiedad', 
      text: 'Hola, me gustaría....', 
      fechaDeCita: 'Mayo 04 2021', 
      hours: '00:23',
      revisado:'NO'
    },
  };
}

const rows = [
  createData('Ned Bigby', 234532342,'ned99@gmail.com', 25),
  createData('Jennyfer Mously', 234532342,'mous@gmail.com', 25),
  createData('Simon Nelson Cook', 234532342,'cookie99@gmail.com', 25),
  createData('Teacher Monroe', 234532342,'monroe99@gmail.com', 25),
  createData('Suzie Crabgrass ', 234532342,'suzie99@gmail.com', 25),
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.age}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                {row.descripcionDetallada.asunto}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Contenido</TableCell>
                    <TableCell align="right">Fecha</TableCell>
                    <TableCell align="right">Hora</TableCell>
                    <TableCell align="right">Revisado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    <TableRow >
                      <TableCell component="th" scope="row"> {row.descripcionDetallada.text}</TableCell>
                      <TableCell align="right">{row.descripcionDetallada.fechaDeCita}</TableCell>
                      <TableCell align="right">{row.descripcionDetallada.hours}</TableCell>
                      <TableCell align="right">{row.descripcionDetallada.revisado}</TableCell>
                    </TableRow>
                  }
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Teléfono</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">Edad&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <Row key={row.name} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Request = () => {
  return (
    <div>
      <Typography variant="h5">Solicitudes</Typography>
      <ContentCards />
      <div style={{height:'400px', overflow: 'auto'}}>
        <CollapsibleTable />
      </div>
    </div>
  );
};

export default Request;