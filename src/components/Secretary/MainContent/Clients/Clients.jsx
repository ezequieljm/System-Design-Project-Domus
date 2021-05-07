import React from 'react';

function Clients({inxTool}) {
  return (
    <h1>{
      `Clientes Index: ${
        inxTool === 0 
          ? 'Actualizar Datos' 
          : inxTool === 1 
            ? 'Nuevo Cliente' 
            : inxTool === 2 
              ? 'Nuevo Cliente > Corporativo'
              : 'Nuevo Cliente > Particular'}`
    }</h1>
  )
}

export default Clients;