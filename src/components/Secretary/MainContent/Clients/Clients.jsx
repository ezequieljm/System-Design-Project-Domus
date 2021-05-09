import React from 'react';
import CorporateClient from './CorporateClient/CorporateClient';
import PrivateClient from './PrivateClient/PrivateClient';
import UpdateClient from './UpdateClient/UpdateClient';
import NewClient from './NewClient';

function Clients({inxTool}) {
  return (
    <>
      {
        inxTool === 0 
          ? <UpdateClient /> 
          : inxTool === 1 
            ? <NewClient /> 
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
