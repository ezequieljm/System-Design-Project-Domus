import React from 'react';
import CorporateClient from './CorporateClient/CorporateClient';
import PrivateClient from './PrivateClient/PrivateClient';

function Clients({inxTool}) {
  return (
    <>
      {
        inxTool === 3 
          ? <PrivateClient /> 
          : inxTool === 2 
            ? <CorporateClient />
            : <h1>Actualizar Datos</h1>
      }
    </>
  )
}

export default Clients;
