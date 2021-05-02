import React from 'react';
import NavbarOffice from '../GeneralComponents/Header/NavbarOffice/NavbarOffice';

const Secretary = ({fnExit}) => {
  const [changeTitle, setTitle] = React.useState('Oficina virtual de Secretaria');

  return (
    <>
      <NavbarOffice 
        extendFn={fnExit} 
        appbar={['Clientes', 'Agenda', 'Solicitudes']}
        chgTitle={(e, val) => setTitle(val)}/>
      <h1>{changeTitle}</h1>
    </>
  )
}
export default Secretary;