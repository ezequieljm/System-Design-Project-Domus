import React from "react";
import { Typography, Button, Grow } from "@material-ui/core";
import SaleList from './ListReports/SaleList';

export default function ListReport({ setRepList }) {
	return (
		<Grow in>
			<div>
				<Typography variant="h5">Reporte particular</Typography>
        <SaleList />
				<Button onClick={() => setRepList(1)}>Reportes</Button>
			</div>
		</Grow>
	);
}
