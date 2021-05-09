import React from 'react';
import { Button } from '@material-ui/core';
import CorporateClient from './CorporateClient/CorporateClient';
import PrivateClient from './PrivateClient/PrivateClient';

function ButtonsDep({fnDep}) {
  const deployChangeView = e => e.target.innerHTML === 'Cliente Corporativo' ? fnDep(1) : fnDep(2)
  return (
    <>
      <Button onClick={deployChangeView} variant="contained" color="primary">Cliente Corporativo</Button>
      <Button onClick={deployChangeView} variant="contained" color="primary">Cliente Particular</Button>
    </>
  )
}
export default function NewClient() {
  const [deploy, setDeploy] = React.useState(0);

  return(
    <>
      {
        deploy === 0
          ? <ButtonsDep fnDep={setDeploy}/>
          : deploy === 1
            ? <CorporateClient />
            : <PrivateClient />
      }
    </>
  ) 
}