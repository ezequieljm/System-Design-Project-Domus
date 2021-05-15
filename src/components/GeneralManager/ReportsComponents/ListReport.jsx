import React from "react";
import { Typography, Button, Grow } from "@material-ui/core";
import SaleList from "./ListReports/SaleList";
// Here to import all list, renta, clients and houses

export default function ListReport({ setRepList, typeOfReport }) {
	return (
		<Grow in>
			<div>
				<Typography variant='h5'>{typeOfReport.toUpperCase()}</Typography>
				<SaleList />
				<Button
					variant='contained'
					color='primary'
					style={{ marginTop: "1rem" }}
					onClick={() => setRepList(1)}>
					Reportes
				</Button>
			</div>
		</Grow>
	);
}
