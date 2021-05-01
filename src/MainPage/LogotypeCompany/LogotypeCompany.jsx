import './logotype.css';
import Button from '@material-ui/core/Button';

const LogotypeCompany = ({eventIngresar}) => {
  return (
    <div className="content-logo">
      <section className="section-cont">
        <h1>DOMUS</h1>
        <p>Propiedad exclusiva, asesoramiento personal.</p>
      </section>
      <Button variant="contained" color="primary" onClick={eventIngresar}>Ingresar</Button>
    </div>
  )
}

export default LogotypeCompany;