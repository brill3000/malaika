import React ,{useState}from 'react';
import {makeStyles} from '@material-ui/core/styles'

import Fab from '@material-ui/core/Fab'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Car from '@material-ui/icons/DirectionsCar';
import CarOutlined from '@material-ui/icons/DirectionsCarOutlined';
import Bus from '@material-ui/icons/DirectionsBus';
import BusOutlined from '@material-ui/icons/DirectionsBusOutlined';
import Train from '@material-ui/icons/Train';
import TrainOutlined from '@material-ui/icons/TrainOutlined';


const useStyles = makeStyles(theme => ({
    fab: {
        margin: 0,
        top: 'auto',
        left: 'auto',
        bottom: 20,
        right: 30,
        position: 'fixed'
    }

}));

const Donate = () => <FontAwesomeIcon icon={faDonate} size="lg"/>
export default function DonateDialog(){
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [methodOfPayment, setMethodOfPayment] = useState('');
    const [accountName, setAccountName] = useState('');
    const [ammount, setAmmount] = useState();
    const [value, setValue] = useState('train');
    
    const onChange = e => {
       setMethodOfPayment(e.target.value);
       setValue(e.target.value)
    };

    const onDialogOpen = () => setDialogOpen(true);

    const onDialogClose = () => {
        setDialogOpen();
        setMethodOfPayment('');
        setAccountName('');
        setAmmount(0);
    }

    const onSnackBarClose = (e, reason) => {
        if (reason === 'clickaway'){
            return;
        }
        setSnackbarOpen(false)
        setSnackbarMessage('')
    }

    const onCreate = () => {
        if(ammount <= 0){
            setSnackbarOpen(false)

        }else{
        setSnackbarOpen(true);
        setSnackbarMessage(`Thank you for donating usd. ${ammount} this will go a long way in helping us`)
        onDialogClose();
        }
        }
    const [inputs, setInputs] = useState([
        {
            id: 'accountNo',
            label: 'Account Number',
            placeHolder: 'account number',
            value:'',
            error: false,
            helperText: `Enter valid ${methodOfPayment} number`,
            getHelperText: error => 
                error
                ? `Whoops not a valid ${methodOfPayment} number`
                : '',
            isValid: value => value.length !== ''
        },
        {
            id: 'ammountDonated',
            label: 'Ammount',
            placeHolder: '$ 0',
            value: '',
            error: false,
            helperText: `Enter ammount`,
            getHelperText: error => 
                error
                ? `Enter an ammount above more than 0`
                : '',
            isValid: value => value > 0
        }
    ])


    const onChangeText = ({ target: { id, value} }) => {
        const newInputs = [...inputs];
        const index = inputs.findIndex(input => input.id === id);
        const input = inputs[index];
        const isValid = input.isValid(value);

        newInputs[index] = {
            ...input,
            value: value,
            error: !isValid,
            helperText: input.getHelperText(!isValid)
        };
        setInputs(newInputs);
        if(input.id === 'accountNo'){
            setAccountName(value)
        }else if(input.id === 'ammountDonated'){
            setAmmount(value)
        }
    }

    
    return(
        <>

        <Dialog open={dialogOpen} onClose={onDialogClose}>
        <DialogTitle>Donate {methodOfPayment === ''? '' : `with ${methodOfPayment}`} </DialogTitle>
            <DialogContent>
                <FormControl component="fieldset">
                    <FormLabel component="legend" >Method of Payment</FormLabel>
                    <RadioGroup name="Paypal" value={value} onChange={onChange} row>
                        <FormControlLabel
                            value='Paypal'
                            control={
                                <Radio
                                    color='primary'
                                    icon={<CarOutlined />}
                                    checkedIcon={<Car />}
                                />
                            }
                            label="Paypal"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="MasterCard"
                            control={
                            <Radio
                                color="primary"
                                icon={<BusOutlined />}
                                checkedIcon={<Bus />}
                            /> 
                            }
                            label="MasterCard"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="Visa"
                            control={
                            <Radio
                                color="primary"
                                icon={<TrainOutlined />}
                                checkedIcon={<Train />}
                            /> 
                            }
                            label="Visa"
                            labelPlacement="bottom"
                        />

                    </RadioGroup>
                </FormControl>
                    { inputs.map(input => (
                            <TextField
                                id={input.id}
                                fullWidth
                                label={input.label}
                                placeholder={input.placeHolder}
                                helperText={input.helperText}
                                value={input.value}
                                onChange={onChangeText}
                                error={input.error}
                                key={input.id}
                            />
                        ) 
                    )}

            </DialogContent>
            <DialogActions>
                <Button onClick={onDialogClose} color="primary">
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={onCreate}
                    color="primary"
                >
                    Donate
                </Button>

            </DialogActions>
        </Dialog>
        <Snackbar
            open={snackbarOpen}
            message={snackbarMessage}
            onClose={onSnackBarClose}
            autoHideDuration={4000}
        />
        <Fab className={classes.fab} color="secondary" onClick={onDialogOpen}>
          <Donate />
        </Fab>
        </>
    )
}

