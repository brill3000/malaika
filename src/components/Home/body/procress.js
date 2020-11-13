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

    procress:{
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(20)
    },
}))

function Procress(){
    const classes = useStyles();

    return(

        <Grid container className={classes.procress}>
            <Grid item lg={5} md={5} sm={12} xs={12} className={classes.headerText}>
                <Typography variant="h2">Our Process</Typography>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12} className={classes.progress}>
            <CustomStepper />
            </Grid>
        </Grid>
    )
}

export default Procress;

