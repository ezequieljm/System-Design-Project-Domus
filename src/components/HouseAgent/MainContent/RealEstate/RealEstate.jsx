import React from 'react';
import CatalogoDos from './CatalogoDos';
import ListOfHouses from './ListOfHouses/ListOfHouses';

export default function RealEstate({ selectedIndex }) {
  return (
    <>
      {selectedIndex === 0 && <CatalogoDos /> } 
      {selectedIndex === 1 && <ListOfHouses />}
      {selectedIndex === 2 && <h1>Nueva Propiedad</h1>}
      {selectedIndex > 2 && <h1>Herramientas de la página</h1>}
    </>
  )
};