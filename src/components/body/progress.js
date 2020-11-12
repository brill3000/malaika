import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CustomStepper from './steeper';

const useStyles = makeStyles((theme) => ({
    headerText:{
        textAlign:'center',
        marginTop: theme.spacing(9)
    },

    progress:{
        marginTop: theme.spacing(10),
    },
}))

function Progress(){
    const classes = useStyles();

    return(

        <Grid container className={classes.progress}>
            <Grid item xs={4} className={classes.headerText}>
                <Typography variant="h2">Our Process</Typography>
            </Grid>
            <Grid item xs={8} className={classes.progress}>
            <CustomStepper />
            </Grid>
        </Grid>
    )
}

export default Progress;

