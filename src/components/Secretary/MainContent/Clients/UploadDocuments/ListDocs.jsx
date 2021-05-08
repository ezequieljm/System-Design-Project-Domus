import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Delete from '@material-ui/icons/Delete';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'description', label: 'Descripción', minWidth: 170 },
  { id: 'delete', label: 'Eliminar', minWidth: 170, align: 'right'},
];

const createData = name => description => ({ name, description});

const rows = [
  createData('file1.txt')('domicilio del cliente'),
  createData('file2.txt')('documentación'),
  createData('file3.txt')('declaración jurada'),
  createData('file4.txt')('fotos y dni'),
  createData('file5.txt')('domicilio del cliente'),
  createData('file6.txt')('domicilio del cliente'),
  createData('file7.txt')('domicilio del cliente'),
  createData('file8.txt')('domicilio del cliente'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '2rem',
  },
  container: {
    maxHeight: '250px',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} style={{minWidth: column.minWidth, background: 'grey'}}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row =>
              <TableRow key={row.name}>
                {columns.map(column => 
                  <TableCell key={column.id} align={column.align}>
                    {column.id === 'name' ? row.name : column.id === 'description' ? row.description : <Delete />}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}