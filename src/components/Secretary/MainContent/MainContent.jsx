import React from 'react';
import Request from './Requests/Requests';
import Schedule from './Schedule/Schedule';

const MainContent = ({val, inxTool}) => {
  return (
    <>
      {
        val === 2
          ? <Request />
          : val === 1
            ? <Schedule valueListTools={inxTool}/>
            : <h1>Clientes</h1>
      }
    </>
  )
};

export default MainContent;