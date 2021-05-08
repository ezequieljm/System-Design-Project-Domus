import React from 'react';
import CorporateClient from './CorporateClient/CorporateClient';
import PrivateClient from './PrivateClient/PrivateClient';
import UpdateClient from './UpdateClient/UpdateClient';

function Clients({inxTool}) {
  return (
    <>
      {
        inxTool === 0 
          ? <UpdateClient /> 
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
