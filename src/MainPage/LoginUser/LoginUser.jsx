import React from "react";
import db from "../../samples/db.json";
import "./login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "400px",
	},
	margin: {},
	withoutLabel: {
		marginTop: theme.spacing(3),
	},
	textField: {},
}));

const att = { user: false, pass: false, hepUs: "", hepPass: "" };

function PasswordField({
	setDatosUser,
	dataUserInput,
	attribError,
	setAttErr,
}) {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});

	const handleChange = (prop) => (e) => {
		setValues({ ...values, [prop]: e.target.value });
		e.target.id === "outlined-basic1"
			? setDatosUser({ ...dataUserInput, user: e.currentTarget.value })
			: setDatosUser({ ...dataUserInput, pass: e.currentTarget.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className={classes.root}>
			<FormControl
				fullWidth
				className={clsx(classes.margin, classes.textField)}
				variant='outlined'>
				<InputLabel htmlFor='outlined-adornment-password'>
					Contraseña
				</InputLabel>
				<OutlinedInput
					id='outlined-adornment-password'
					type={values.showPassword ? "text" : "password"}
					value={values.password}
					onChange={handleChange("password")}
					error={attribError.pass}
					onFocus={() =>
						setAttErr({ ...attribError, pass: false, hepPass: "" })
					}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge='end'>
								{values.showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}
					labelWidth={70}
				/>
			</FormControl>
			{attribError.pass && (
				<Typography style={{ color: "red" }} variant='subtitle1'>
					{attribError.hepPass}
				</Typography>
			)}
		</div>
	);
}

const LoginUser = ({ setupVirtualOffice }) => {
	const [dataUserInput, setDatosUser] = React.useState({ user: "", pass: "" });
	const [attribError, setAttErr] = React.useState(att);

	const queryUserDB = (user) =>
		user.usuario === dataUserInput.user && user.pass === dataUserInput.pass;

	const changeInput = (e) => {
		e.target.id === "outlined-basic1"
			? setDatosUser({ ...dataUserInput, user: e.currentTarget.value })
			: setDatosUser({ ...dataUserInput, pass: e.currentTarget.value });
	};

	const controlUserAndPassword = () => {
		db.usuarios.some((user) => user.usuario === dataUserInput.user)
			? setAttErr({
					...attribError,
					pass: true,
					hepPass: "Contraseña Incorrecta",
			  })
			: setAttErr({ ...attribError, user: true, hepUs: "Usuario Incorrecto" });
	};

	const checkeDatas = (e) => {
		e.preventDefault();
		db.usuarios.findIndex(queryUserDB) !== -1
			? setupVirtualOffice(dataUserInput.user)
			: controlUserAndPassword();
	};

	return (
		<div className='login'>
			<Typography variant='h4'>Oficina Virtual</Typography>
			<form action='' className='form-control' onSubmit={checkeDatas}>
				<div style={{ width: 400 }}>
					<TextField
						id='outlined-basic1'
						label='Usuario'
						variant='outlined'
						required
						autoFocus
						onChange={changeInput}
						color='primary'
						fullWidth
						error={attribError.user}
						onFocus={() =>
							setAttErr({ ...attribError, user: false, hepUs: "" })
						}
					/>
					{attribError.user && (
						<Typography style={{ color: "red" }} variant='subtitle1'>
							{attribError.hepUs}
						</Typography>
					)}
				</div>
				{/* 				<TextField
					id='outlined-basic2'
					label='Contraseña'
					variant='outlined'
					type='password'
					required
					onChange={changeInput}
					color='primary'
					fullWidth
					error={attribError.pass}
					helperText={attribError.hepPass}
					onFocus={() =>
						setAttErr({ ...attribError, pass: false, hepPass: "" })
					}
				/> */}
				<PasswordField
					setDatosUser={setDatosUser}
					dataUserInput={dataUserInput}
					attribError={attribError}
					setAttErr={setAttErr}
				/>
				<Button type='submit' variant='contained' color='primary'>
					Iniciar Sesión
				</Button>
			</form>
		</div>
	);
};

export default LoginUser;
