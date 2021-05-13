import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';
import './styles.css'

export default function GeneralManager({fnExit}) {
  return (
    <>
      <h1 id="titulo">Gerente general</h1>
      <Button variant="contained" color="secondary" onClick={fnExit}>Salir</Button>
    </>
  )
};