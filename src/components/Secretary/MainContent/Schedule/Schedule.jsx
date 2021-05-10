import React from 'react';
import MakeAnAppointment from './MakeAnAppointment/MakeAnAppointment';
import EditAnAppointmentOrDelete from './EditAnAppointment/Edit';
import ShowSchedule from './ShowSchedule/ShowSchedule';

export default function Schedule({valueListTools}) {
  return (
    <>
      {
        valueListTools === 0
          ? <MakeAnAppointment />
          : valueListTools === 1
            ? <EditAnAppointmentOrDelete />
            : valueListTools === 2
              ? <ShowSchedule />
              : <h1>Herramientas de la página</h1>
      }
    </>
  )
}