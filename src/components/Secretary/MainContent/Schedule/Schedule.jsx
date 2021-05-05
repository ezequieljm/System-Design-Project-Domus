import React from 'react';
import MakeAnAppointment from './MakeAnAppointment/MakeAnAppointment';
import DeleteAnAppointment from './DeleteAppointment/Delete';
import EditAnAppointment from './EditAnAppointment/Edit';
import ShowSchedule from './ShowSchedule/ShowSchedule';

const Schedule = ({valueListTools}) => {

  return (
    <>
      {
        valueListTools === 0
          ? <MakeAnAppointment />
          : valueListTools === 1
            ? <EditAnAppointment />
            : valueListTools === 2 
              ? <DeleteAnAppointment />
              : <ShowSchedule />
      }
    </>
  )
}

export default Schedule;