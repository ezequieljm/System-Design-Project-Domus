import React from 'react';
import NavbarOffice from '../GeneralComponents/Header/NavbarOffice/NavbarOffice';

const Secretary = ({fnExit}) => {
  return (
    <>
      <NavbarOffice extendFn={fnExit}/>
      <h1>Oficina virtual de Secretaria</h1>
    </>
  )
}
export default Secretary;