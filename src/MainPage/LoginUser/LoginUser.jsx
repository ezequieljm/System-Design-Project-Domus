import React from 'react';
import db from '../../samples/db.json';
import './login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const att = {user:false, pass:false, hepUs:"", hepPass: ""};

const LoginUser = ({setupVirtualOffice}) => {
  const [dataUserInput, setDatosUser] = React.useState({user:'', pass:''});
  const [attribError, setAttErr] = React.useState(att);

  const queryUserDB = user => user.usuario === dataUserInput.user && user.pass === dataUserInput.pass;

  const changeInput = e => {
    e.target.id === 'outlined-basic1'
      ?  setDatosUser({...dataUserInput, user:e.currentTarget.value})
      :  setDatosUser({...dataUserInput, pass:e.currentTarget.value})
    ;
  }

  const controlUserAndPassword = () => {
    db.usuarios.some(user => user.usuario === dataUserInput.user)
      ? setAttErr({...attribError, pass:true, hepPass: "Contraseña Incorrecta"})
      : setAttErr({...attribError, user:true, hepUs: "Usuario Incorrecto"})
  };

  const checkeDatas = e => {
    e.preventDefault();
    db.usuarios.findIndex(queryUserDB) !== (-1)
      ? setupVirtualOffice(dataUserInput.user)
      : controlUserAndPassword()
    ;
  }

  return (
    <div className="login">
      <Typography variant="h4">Oficina Virtual</Typography>
      <form action="" className="form-control" onSubmit={checkeDatas}>
        <TextField 
          id="outlined-basic1" 
          label="Usuario" 
          variant="outlined" 
          required
          autoFocus
          onChange={changeInput}
          color="primary"
          fullWidth
          error={attribError.user}
          helperText={attribError.hepUs}
          onFocus={() => setAttErr({...attribError, user:false, hepUs:""})}
        />
        <TextField 
          id="outlined-basic2" 
          label="Contraseña" 
          variant="outlined" 
          type="password"
          required
          onChange={changeInput}
          color="primary"
          fullWidth
          error={attribError.pass}
          helperText={attribError.hepPass}
          onFocus={() => setAttErr({...attribError, pass:false, hepPass:""})}
        />
        <Button type="submit" variant="contained" color="primary" >Iniciar Sesión</Button>
      </form>
    </div>
  )
}

export default LoginUser;