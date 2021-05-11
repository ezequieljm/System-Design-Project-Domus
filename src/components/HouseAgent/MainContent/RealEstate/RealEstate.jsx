import React from 'react';

export default function RealEstate({ selectedIndex }) {
  return (
    <h1>
      {
        selectedIndex === 0 
          ? <h1>Catálogo</h1>
          : selectedIndex === 1
            ? <h1>Lista de propiedades</h1>
            : selectedIndex === 2
              ? <h1>Nueva Propiedad</h1>
              : <h1>Herramientas de la página</h1>
      }
    </h1>
  )
};