import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionActions,
  AccordionDetails,
  Typography,
  Button,
  Divider,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ModalDelete } from './ModalDelete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(16)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(16),
    // color: theme.palette.text.secondary,
    color: 'grey',
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {},
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const arr = [
  {
    title: "Half life",
    description: {
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      agente: "Gordon Freeman",
      propiedad: "4352",
      estado: 'En Proceso'
    }
  },
  {
    title: "Raccoon City",
    description: {
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      agente: "Gordon Freeman",
      propiedad: "4352",
      estado: 'Finalizada'
    }
  },
  {
    title: "Dead Space",
    description: {
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      agente: "Gordon Freeman",
      propiedad: "4352",
      estado: 'Cancelada'
    }
  },
  {
    title: "Dead Space",
    description: {
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      agente: "Gordon Freeman",
      propiedad: "4352",
      estado: 'Cancelada'
    }
  },
  {
    title: "Dead Space",
    description: {
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      agente: "Gordon Freeman",
      propiedad: "4352",
      estado: 'Cancelada'
    }
  }
];

function Row({ row }) {
  const selectColor = color => {
    return (
      color === 'En Proceso'
        ? 'blue'
        : color === 'Finalizada'
          ? 'green'
          : 'red'
    )
  }

  return (
    <TableRow>
      <TableCell />
      <TableCell align="right">{row.description.fecha}</TableCell>
      <TableCell align="right">{row.description.hora}</TableCell>
      <TableCell align="right">{row.description.agente}</TableCell>
      <TableCell align="right">{row.description.propiedad}</TableCell>
      <TableCell align="right" style={{color: selectColor(row.description.estado)}}>
        {row.description.estado}
      </TableCell>
    </TableRow>
  );
}

export default function DetailedAccordion() {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = React.useState(false);

  return (
    <div className={classes.root}>
      {arr.map((appointment) => (
        <Accordion defaultExpanded >
          <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: 'grey'}}/>} id="panel1c-header">
            <div className={classes.column}>
              <Typography className={classes.heading}>
                {appointment.title}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Some descripttion random
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.details} style={{background: 'white',}}>
            <div style={{ width: "100%" }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell align="right">Fecha</TableCell>
                      <TableCell align="right">Hora</TableCell>
                      <TableCell align="right">Agente</TableCell>
                      <TableCell align="right">Propiedad</TableCell>
                      <TableCell align="right">Estado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <Row key={appointment.title} row={appointment} />
                  </TableBody>
                </Table>
              </TableContainer>
              {openEdit && <Typography variant="h1">Open Edit</Typography>}
            </div>
          </AccordionDetails>
          <Divider style={{background: 'grey',}}></Divider>
          <AccordionActions style={{background: 'white',}}>
            <Button size="small" variant="contained" onClick={() => setOpenEdit(!openEdit)}>
              Editar
            </Button>
            <ModalDelete />
          </AccordionActions>
        </Accordion>
      ))}
    </div>
  );
}