import React from 'react';
import NewClient from './MakeAnAppointment/NewClient/NewClient';
import OldClient from './MakeAnAppointment/OldClient/OldClient';

const Schedule = ({valueListTools}) => {

  const arrTool = ['Agregar Cita', 'Editar Cita', 'Eliminar Cita', 'Mostrar Agenda'];

  return (
    <>
      <h1>{`Agenda: ${arrTool[valueListTools]}`}</h1>
      <NewClient />
      <OldClient />
    </>
  )
}

export default Schedule;