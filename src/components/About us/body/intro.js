import React from 'react';
import Typography from '@material-ui/core/Typography';
import picMain from '../../../resources/pic_1.jpg';
import { Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main:{
        width: 1440,
        height: 625,

    },
}))


function Intro(){
    const classes = useStyles();

    return(
        <>
        <Grid container className={classes.main}>


        </Grid>
        </>
    )
}

export default Intro;