import React, {useState}from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function getSteps() {
    return [
    <Typography>Identifying the vunerable</Typography>,
    <Typography>Creating a home</Typography>, 
    <Typography>Giving them skills to enable self sustainability</Typography>];
  }

  const content = [
      "Children with physical Disabilities or mentally challenged",
      "Children below 5 years born of Jobless parents with more than 5 children",
      "Abandoned children below 5 years",
      "Sickly and mul-nourished children below 5 years",
      "Orphaned children below 5 years",
      "Children below 5 years born of Single mothers that are in their teenage",
      "Children born of extreme poor background"
  ]
  
function getStepContent(step) {
switch (step) {
    case 0:
    return <ul><Typography color="textSecondary">The aim is to identify these families based on their status and also pick those that are already abandoned;
            The target groups are as follows:</Typography><br/>
            {content.map((text, index) => (
                <li key={index}><Typography variant="body2"color="textSecondary">{text}</Typography></li>
            ))}
            </ul>
    case 1:
    return <Typography color="textSecondary">We are proposing to have these angels settled on a self sustaining 100
             acre highly intensive and technologically mechanized hydro-phonic farm</Typography>
    case 2:
    return <Typography color="textSecondary">The intention is to have a fully intergrated farm as an
             income generating activity besides other crafts such 
             as carving prcelein modelling, IT, weaving etc</Typography>
    default:
    return 'Unknown step';
}
}

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
    marginBottom: theme.spacing(2),
    },
    resetContainer: {
    padding: theme.spacing(3),
    },
}))


function CustomStepper(){
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const classes = useStyles();
    return(
        <>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel color="secondary">{label}</StepLabel>
                            <StepContent>
                            {getStepContent(index)}
                            <div className={classes.actionsContainer}>
                                <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                    color="secondary"
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                                </div>
                            </div>
                            </StepContent>
                        </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>You have viewed all the steps of our process</Typography>
                        <Button onClick={handleReset} variant="outlined"className={classes.button}>
                            View Again
                        </Button>
                        </Paper>
                    )} 
        </>
    );
}

export default CustomStepper;