import React from "react";
import { Typography, Paper, Grow, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListUsersJobs from './ListUsersJobs';

const useStyle = makeStyles((theme) => ({
	paperRoot: {
		padding: "1rem",
	},
}));

export default function DeleteUser() {
	const classes = useStyle();

	return (
		<Grow in>
			<Paper elevation={5} className={classes.paperRoot}>
				<Typography variant='h4' style={{marginBottom: '1rem'}}>Deshabilitar Usuario</Typography>
				<ListUsersJobs />
			</Paper>
		</Grow>
	);
}
