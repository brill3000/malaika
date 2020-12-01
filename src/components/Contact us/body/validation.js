import React, {useState} from 'react';
//import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/*const useStyles = makeStyles( theme => ({
    container: {
    }
}))*/

function ValidationAndErrorDisplay(){
    //const classes = useStyles();


    const [message, setMessage] = useState('');
    const [inputs, setInputs] = useState([
        {
            id: 'name',
            label: 'Name',
            placeHolder: 'Your name...',
            value: '',
            error: false,
            helperText: 'Enter you name',
            getHelperText: error => 
                error 
                    ? 'Woops, not a valid email address'
                    : '',
            isValid: value => true
        },
        {
            id: 'email',
            label: 'email',
            placeHolder: 'johndoe@email.con',
            value: '',
            error: false,
            helperText: 'Any valid email address will do',
            getHelperText: error => 
                error 
                    ? 'Woops, not a valid email address'
                    : 'Any valid email address will do',
            isValid: value => /\S+@\S+\.\S+/.test(value)
        },
        
    ]);

    const onChange = ({ target: { id, value} }) => {
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
    }

    return(
    <>
        <Grid container spacing={4} orientation="vertical">
            { inputs.map(input => (
                <Grid item key={input.id}>
                    <TextField
                        id={input.id}
                        label={input.label}
                        placeholder={input.placeHolder}
                        helperText={input.helperText}
                        value={input.value}
                        onChange={onChange}
                        error={input.error}
                    />
                </Grid>
                ) 
            )}
            <Grid item xs={12}>
                <TextField
                    multiline
                    id="message"
                    label="Message"
                    placeholder="Hello Mwagulafu..."
                    helperText="Enter message"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
            </Grid>
            <Grid item xs={12}>
                <Button 
                variant='outlined' 
                size='large'
                color="primary"
                >Send Message</Button>
            </Grid>
        </Grid> 
    </>

    )

}

export default ValidationAndErrorDisplay;