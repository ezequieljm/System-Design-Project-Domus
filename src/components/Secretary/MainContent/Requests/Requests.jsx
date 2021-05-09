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
import TablePagination from '@material-ui/core/TablePagination';
import { Grow } from '@material-ui/core';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
    
  },
});

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '350px',
  },
});

function createData(name, phone, email, age) {
  return {
    name,
    phone,
    email,
    age,
    detailedDescription:{
      issue: 'Primera visita a la propiedad', 
      text: 'Hola, me gustaría....', 
      dateOfAppointment: 'Mayo 04 2021', 
      hours: '00:23',
      inspected:'NO'
    },
  };
}

const rows = [
  createData('Ned Bigby', 234532342,'ned99@gmail.com', 25),
  createData('Jennyfer Mously', 234532342,'mous@gmail.com', 25),
  createData('Simon Nelson Cook', 234532342,'cookie99@gmail.com', 25),
  createData('Teacher Monroe', 234532342,'monroe99@gmail.com', 25),
  createData('Suzie Crabgrass ', 234532342,'suzie99@gmail.com', 25),
  createData('Jeff Winger', 234532342,'suzie99@gmail.com', 25),
  createData('Annie Edison', 234532342,'suzie99@gmail.com', 25),
  createData('Britta Perry', 234532342,'suzie99@gmail.com', 25),
  createData('Pierce Hawthorne', 234532342,'suzie99@gmail.com', 25),
  createData('Abed Nadir', 234532342,'suzie99@gmail.com', 25),
  createData('Shirley Bennett', 234532342,'suzie99@gmail.com', 25),
  createData('Troy Barnes', 234532342,'suzie99@gmail.com', 25),
  createData('Ben Chang', 234532342,'suzie99@gmail.com', 25),
  createData('Duncan', 234532342,'suzie99@gmail.com', 25),
  createData('Craig Pelton', 234532342,'suzie99@gmail.com', 25),
];

const columns = [
  { id: 'noValue', label: '', minWidth: 170 },
  { id: 'Nombre', label: 'Nombre', minWidth: 170 },
  {
    id: 'teléfono',
    label: 'Teléfono',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'edad',
    label: 'Edad',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
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
                {row.detailedDescription.issue}
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
                      <TableCell component="th" scope="row"> {row.detailedDescription.text}</TableCell>
                      <TableCell align="right">{row.detailedDescription.dateOfAppointment}</TableCell>
                      <TableCell align="right">{row.detailedDescription.hours}</TableCell>
                      <TableCell align="right">{row.detailedDescription.inspected}</TableCell>
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

function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => <Row key={row.name} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const Request = () => {
  // const classes = useRowStyles();
  return (
    <Grow in>
      <Paper elevation={3} style={{padding: '2rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <Typography variant="h3">Solicitudes</Typography>
        <ContentCards />
        <StickyHeadTable />
      </Paper>
    </Grow>
  );
};
export default Request;