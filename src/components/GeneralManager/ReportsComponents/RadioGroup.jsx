import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
	Button,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	icon: {
		borderRadius: "50%",
		width: 16,
		height: 16,
		boxShadow:
			"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
		backgroundColor: "#f5f8fa",
		backgroundImage:
			"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
		"$root.Mui-focusVisible &": {
			outline: "2px auto rgba(19,124,189,.6)",
			outlineOffset: 2,
		},
		"input:hover ~ &": {
			backgroundColor: "#ebf1f5",
		},
		"input:disabled ~ &": {
			boxShadow: "none",
			background: "rgba(206,217,224,.5)",
		},
	},
	checkedIcon: {
		backgroundColor: "#137cbd",
		backgroundImage:
			"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
		"&:before": {
			display: "block",
			width: 16,
			height: 16,
			backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
			content: '""',
		},
		"input:hover ~ &": {
			backgroundColor: "#106ba3",
		},
	},
});

function StyledRadio(props) {
	const classes = useStyles();

	return (
		<Radio
			className={classes.root}
			disableRipple
			color='default'
			checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
			icon={<span className={classes.icon} />}
			{...props}
		/>
	);
}

export default function CustomizedRadios({ setReport, setRepList }) {
	const [valueRadioGroup, setValueRadio] = React.useState("ventas");

	const handleSubmitReport = (e) => {
		e.preventDefault();
		setReport(valueRadioGroup);
		setRepList(1);
	};

	return (
		<form action='' onSubmit={handleSubmitReport}>
			<Typography variant='h5' style={{ marginBottom: "1rem" }}>
				Tipo de Reporte
			</Typography>
			<FormControl component='fieldset' style={{ marginBottom: "1rem" }}>
				<RadioGroup
					style={{ display: "flex", flexDirection: "row" }}
					defaultValue='ventas'
					name='customized-radios'>
					<FormControlLabel
						value='ventas'
						control={<StyledRadio />}
						label='Ventas'
						onChange={(e) => setValueRadio(e.currentTarget.value)}
					/>
					<FormControlLabel
						value='alquileres'
						control={<StyledRadio />}
						label='Alquileres'
						onChange={(e) => setValueRadio(e.currentTarget.value)}
					/>
					<FormControlLabel
						value='clientes'
						control={<StyledRadio />}
						label='Clientes'
						onChange={(e) => setValueRadio(e.currentTarget.value)}
					/>
					<FormControlLabel
						value='propiedades'
						control={<StyledRadio />}
						label='Propiedades'
						onChange={(e) => setValueRadio(e.currentTarget.value)}
					/>
				</RadioGroup>
			</FormControl>
			<div style={{marginBottom: '1rem'}}>
				<Button type='submit' variant='contained' color='primary'>
					Mostrar
				</Button>
			</div>
		</form>
	);
}
