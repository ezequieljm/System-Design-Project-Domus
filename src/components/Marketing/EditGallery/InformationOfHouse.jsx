import React from "react";
import { Typography, Button, Paper, Grow } from "@material-ui/core";

function InformationComp({dataClick}) {
  return (
    <>
      <Typography variant="h5">{dataClick.title}</Typography>
      <Typography variant="h5">{dataClick.description}</Typography>
      <Typography variant="h5">{dataClick.available}</Typography>
      <Typography variant="h5">{dataClick.id}</Typography>
      <Typography variant="h5">{dataClick.kindHouse}</Typography>
      <Typography variant="h5">{dataClick.location}</Typography>
      <Typography variant="h5">{dataClick.amountOf.toilets}</Typography>
      <Typography variant="h5">{dataClick.amountOf.bedroom}</Typography>
      <Typography variant="h5">{dataClick.amountOf.suites}</Typography>
      <Typography variant="h5">{dataClick.acient}</Typography>
      <Typography variant="h5">{dataClick.spaceWithAccount}</Typography>
      <Typography variant="h5">{dataClick.artefactWithAccount}</Typography>
      <Typography variant="h5">{dataClick.adeheredServices[0]}</Typography>
      <Typography variant="h5">{dataClick.adeheredServices[1]}</Typography>
      <Typography variant="h5">{dataClick.adeheredServices[2]}</Typography>
      <Typography variant="h5">{dataClick.owerDetails.numberId}</Typography>
      <Typography variant="h5">{dataClick.owerDetails.kind}</Typography>
      <Typography variant="h5">{dataClick.owerDetails.firstname}</Typography>
      <Typography variant="h5">{dataClick.owerDetails.surname}</Typography>
      <Typography variant="h5">{dataClick.owerDetails.dni}</Typography>
      <Typography variant="h5">{dataClick.owerDetails.phone}</Typography>
      <Typography variant="h5">{dataClick.owerDetails.email}</Typography>
      <Typography variant="h5">{dataClick.owerDetails.address}</Typography>
      <Typography variant="h5">{dataClick.contractOptions}</Typography>
    </>
  )
}

export default function InformationOfHouse({ setViewHouse, dataClick }) {
	return (
		<Grow in>
			<Paper elevaton={5} style={{ padding: "1rem" }}>
				<Typography variant='h4'>Informacion de Propiedad</Typography>
        <div>
          <InformationComp dataClick={dataClick}/>
        </div>
				<Button
					onClick={() => setViewHouse(2)}
					variant='contained'
					color='primary'>
					Editar Galeria
				</Button>
				<Button
					onClick={() => setViewHouse(0)}
					variant='contained'
					color='primary'>
					Volver
				</Button>
			</Paper>
		</Grow>
	);
}
