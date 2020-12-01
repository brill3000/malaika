import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CustomStepper from './steeper';

const useStyles = makeStyles((theme) => ({
    headerText:{
        textAlign:'center',
        marginTop: theme.spacing(0)
    },

    process:{
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(20),
        marginLeft: theme.spacing(10),
        [theme.breakpoints.down('md')]:{
            marginLeft: theme.spacing(2)
        }
    },
}))

function Process(){
    const classes = useStyles();

    return(

        <Grid container className={classes.process}>
            <Grid item lg={5} md={5} sm={12} xs={12} className={classes.headerText}>
                <Typography variant="h2">Our Process</Typography>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12} className={classes.procress}>
            <CustomStepper />
            </Grid>
            <Grid item lg={2} md={2}></Grid>
        </Grid>
    )
}

export default Process;

