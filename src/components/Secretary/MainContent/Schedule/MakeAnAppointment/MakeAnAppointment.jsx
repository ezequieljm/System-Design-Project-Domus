import React from 'react';
import NewClient from './NewClient/NewClient';
import OldClient from './OldClient/OldClient';
import { Button, Grow } from '@material-ui/core';

function MenuOptions({setView}) {
  return (
    <Grow in>
      <div> 
        <Button onClick={() => setView(0)}>
          Cita nuevo cliente
        </Button> 
        <Button onClick={() => setView(1)}>
          Cliente de la empresa
        </Button>
      </div>
    </Grow>
  );
};

export default function MakeAnAppointment() {
  /* 0 - New Client,  1 - Old Client, 2 - Buttons options */ 
  const [viewRender, setView] = React.useState(2);

  return (
    <>
      { viewRender === 2
          ? <MenuOptions setView={setView} />
          : viewRender === 1 
            ? <OldClient setView={setView}/>
            : viewRender === 0
              ? <NewClient setView={setView}/>
              : <h1>Not Found 404</h1>
      }
    </>
  );
};