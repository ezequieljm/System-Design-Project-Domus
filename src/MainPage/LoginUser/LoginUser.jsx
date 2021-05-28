import React from "react";
import db from "../../samples/db.json";
import "./login.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Checkbox,
  FormControlLabel,
  Link,
  Grow,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
  },
  margin: {},
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {},
}));

const att = { user: false, pass: false, hepUs: "", hepPass: "" };

const PasswordField = ({
  setDatosUser,
  dataUserInput,
  attribError,
  setAttErr,
}) => {
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
    setDatosUser({ ...dataUserInput, pass: e.currentTarget.value });
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
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">
          Contraseña
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          error={attribError.pass}
          onFocus={() =>
            setAttErr({ ...attribError, pass: false, hepPass: "" })
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      {attribError.pass && (
        <Typography style={{ color: "red" }} variant="subtitle1">
          {attribError.hepPass}
        </Typography>
      )}
    </div>
  );
};

const LoginUser = () => {
  const classes = useStyles();
  const history = useHistory();

  const [dataUserInput, setDatosUser] = React.useState({ user: "", pass: "" });
  const [attribError, setAttErr] = React.useState(att);

  const queryUserDB = (user) =>
    user.usuario === dataUserInput.user && user.pass === dataUserInput.pass;

  const controlUserAndPassword = () => {
    db.usuarios.some((user) => user.usuario === dataUserInput.user)
      ? setAttErr({
        ...attribError,
        pass: true,
        hepPass: "Contraseña Incorrecta",
      })
      : setAttErr({ ...attribError, user: true, hepUs: "Usuario Incorrecto" });
  };

  const check = (e) => {
    e.preventDefault();
    if (db.usuarios.some(queryUserDB) === true) {
      switch (dataUserInput.user) {
        case "jennifer":
          history.push("/secretaria");
          break;
        case "felipeRuiz":
          history.push("/gerencia")
          break;
        case "cookie":
          history.push("/marketing")
          break;
        case "micaela":
          history.push("/administracion")
          break;
        case "liliana":
          history.push("/caja")
          break;
        case "foxMulder":
          history.push("/sitio")
          break;
        case "jorgelina":
          history.push("/comercio")
          break;
        case "nedBigby":
          history.push("/asesoria")
          break;
      }
    } else {
      controlUserAndPassword()
    }
  }

  return (
    <Grow in >
      <div className="login">
        <Typography variant="h4">Oficina Virtual</Typography>
        <form action="" className="form-control" onSubmit={check}>
          <div className={classes.root}>
            <TextField
              label="Usuario"
              variant="outlined"
              required
              autoFocus
              onChange={(e) =>
                setDatosUser({ ...dataUserInput, user: e.target.value })
              }
              color="primary"
              fullWidth
              error={attribError.user}
              onFocus={() =>
                setAttErr({ ...attribError, user: false, hepUs: "" })
              }
            />
            {attribError.user && (
              <Typography style={{ color: "red" }} variant="subtitle1">
                {attribError.hepUs}
              </Typography>
            )}
          </div>
          <PasswordField
            setDatosUser={setDatosUser}
            dataUserInput={dataUserInput}
            attribError={attribError}
            setAttErr={setAttErr}
          />
          <div className={classes.root}>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Recordar sesión"
            />
          </div>
          <div className={classes.root}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "100%" }}
            >
              Iniciar Sesión
            </Button>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1">
                <Link href="#">Olvidaste la contraseña?</Link>
              </Typography>
              <Typography variant="subtitle1">
                <Link href="#">Contactar con soporte técnico</Link>
              </Typography>
            </div>
          </div>
        </form>
        <Typography
          variant="subtitle1"
          style={{ marginTop: "2rem", color: "grey" }}
        >
          Copyright Group-11 2021
        </Typography>
      </div>
    </Grow>
  );
};

export default LoginUser;
