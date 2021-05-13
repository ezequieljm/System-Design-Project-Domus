import React from 'react';

export default function SiteAdministrator({fnExit}) {
  return (
    <>
      <h1>Administrador del sitio</h1>
      <button onClick={fnExit}>Salir</button>
    </>
  )
};
