import React from 'react';
import Catalogo from './Catalogo';
import CatalogoDos from './CatalogoDos';

export default function RealEstate({ selectedIndex }) {
  return (
    <>
      {selectedIndex === 0 && <CatalogoDos /> } 
      {selectedIndex === 1 && <h1>Lista de propiedades</h1>}
      {selectedIndex === 2 && <h1>Nueva Propiedad</h1>}
      {selectedIndex > 2 && <h1>Herramientas de la página</h1>}
    </>
  )
};