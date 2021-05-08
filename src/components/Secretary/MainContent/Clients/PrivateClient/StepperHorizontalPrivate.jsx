import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormPrivateClient from './FormPrivateClient';
import UploadDocs from '../UploadDocuments/UploadDocs';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '700px',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Complete los datos del cliente', 
    'Suba la documentación', 
    'Verifique si la información es correcta'
  ];
};

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Complete los campos con los datos del nuevo cliente particular. No debe haber campos incompletos';
    case 1:
      return 'Suba la documentación del cliente. Asegurese de agregar un nombre y una descripción';
    case 2:
      return 'Verifique se la información es correcta. Puede volver atras para corregir datos.';
    default:
      return 'Unknown stepIndex';
  };
};

function Check() {
  return (
    <h1>Verificar los datos</h1>
  );
};

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Todos los pasos han sido completados
            </Typography>
            <Button variant="contained" color="primary" onClick={handleReset}>
              Añadir Otro Cliente
            </Button>
          </div>
        ) : (
          <div>
            {
              activeStep === 0 
                ? <FormPrivateClient /> 
                : activeStep === 1
                  ? <UploadDocs />
                  : <Check />
            }
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button 
                variant="contained" 
                disabled={activeStep === 0} 
                onClick={handleBack} 
                className={classes.backButton}
              >
                Atras
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Confirmar' : 'Siguiente'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}