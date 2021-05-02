import React from 'react';

const Secretary = ({fnExit}) => {
  return (
    <>
      <h1>Oficina virtual de Secretaria</h1>
      <button onClick={fnExit}>Salir</button>
    </>
  )
}
export default Secretary;