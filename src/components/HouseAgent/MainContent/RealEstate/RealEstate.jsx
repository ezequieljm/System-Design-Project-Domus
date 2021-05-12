import React from 'react';
import Catalogo from './Catalogo';

export default function RealEstate({ selectedIndex }) {
  return (
    <>
      {selectedIndex === 0 && <Catalogo /> } 
      {selectedIndex === 1 && <h1>Lista de propiedades</h1>}
      {selectedIndex === 2 && <h1>Nueva Propiedad</h1>}
      {selectedIndex > 2 && <h1>Herramientas de la página</h1>}
    </>
  )
};