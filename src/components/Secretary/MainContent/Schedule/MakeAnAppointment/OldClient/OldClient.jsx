import React from 'react';
import { Button, } from '@material-ui/core';

export default function OldClient({setView}) {
  return (
    <>
      <h1>Cliente Viejo</h1>
      <Button onClick={() => setView(2)}>Volver</Button>
    </>
  );
};