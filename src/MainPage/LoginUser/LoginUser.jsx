import React from 'react';
import db from '../../samples/db.json';
import './login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';

const att = {user:false, pass:false, hepUs:"", hepPass: ""};

const LoginUser = ({goToVirtualOffice}) => {
  const [dataUserInput, setDatosUser] = React.useState({user:'', pass:''});
  const [attribError, setAttErr] = React.useState(att);

  const queryUserDB = user => user.usuario === dataUserInput.user && user.pass === dataUserInput.pass;

  const showChange = e => {
    e.target.id === 'outlined-basic1'
      ?  setDatosUser({...dataUserInput, user:e.currentTarget.value})
      :  setDatosUser({...dataUserInput, pass:e.currentTarget.value})
    ;
  }

  const controlUserPass = () => {
    db.usuarios.some(user => user.usuario === dataUserInput.user)
      ? setAttErr({...attribError, pass:true, hepPass: "Contraseña Incorrecta"})
      : setAttErr({...attribError, user:true, hepUs: "Usuario Incorrecto"})
  };

  const checkeDatas = e => {
    e.preventDefault();
    db.usuarios.findIndex(queryUserDB) !== (-1)
      ? goToVirtualOffice(dataUserInput.user)
      : controlUserPass()
    ;
  }

  return (
    <div className="login">
      <FormControl action="" className="form-control">
        <TextField 
          id="outlined-basic1" 
          label="Usuario" 
          variant="outlined" 
          required
          autoFocus
          onChange={showChange}
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
          onChange={showChange}
          color="primary"
          fullWidth
          error={attribError.pass}
          helperText={attribError.hepPass}
          onFocus={() => setAttErr({...attribError, pass:false, hepPass:""})}
        />
        <Button variant="contained" color="primary" onClick={checkeDatas}>Iniciar Sesión</Button>
      </FormControl>
    </div>
  )
}

export default LoginUser;