import './stylesMarketing.css';
import Button from '@material-ui/core/Button';

const Marketing = ({fnExit}) => {
  return (
    <>
    <div className="contenedor">
      <h1 id="titulo-marketing-1">Marketing</h1>
      <Button variant="contained" color="primary" onClick={fnExit}>Salir</Button>
    </div>
    </>
  )
}

export default Marketing;