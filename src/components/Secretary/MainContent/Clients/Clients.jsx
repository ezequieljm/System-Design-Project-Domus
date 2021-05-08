import React from 'react';
import CorporateClient from './CorporateClient/CorporateClient';
import PrivateClient from './PrivateClient/PrivateClient';

function Clients({inxTool}) {
  return (
    <>
      {
        inxTool === 0 
          ? <h1>Actualizar Datos</h1> 
          : inxTool === 1 
            ? <h1>Nuevo Cliente</h1> 
            : inxTool === 2
              ? <CorporateClient />
              : inxTool === 3
                ? <PrivateClient />
                : <h1>Tool Page</h1>
      }
    </>
  )
}

export default Clients;
