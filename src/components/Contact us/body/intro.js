import React from 'react';
import {Grid}from '@material-ui/core';
import {ReactComponent as Main} from '../../../resources/communication.svg';
import {makeStyles} from '@material-ui/core';
import {Typography} from '@material-ui/core';

import ValidationAndErrorDisplay from './validation'

const useStyles = makeStyles((theme) => ({
    
    textIntro:{
        padding: theme.spacing(10),
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(8),
    },
    textField:{
        paddingLeft: theme.spacing(10),
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(2),
    },
    margin:{
        marginTop: theme.spacing(4)
    }
}))

function Intro(){

    const classes = useStyles();


    return(
        <>
        <Grid container >
            <Grid item  md={2} lg={2}></Grid>
            <Grid item xs={12} mg={8} lg={8} className={classes.alignItems}>
                <Main  viewBox="0, 0, 2000,1000"/>
                <Typography color="textSecondary" className={classes.textIntro}>
                    We are always happy to here from you, send us an email and we will get back to you in a momment
                </Typography>
            </Grid>
            <Grid item  md={2} lg={2}></Grid>
            <Grid item  md={2} lg={2}></Grid>
            <Grid item xs={12} md={8} lg={8}className={classes.textField}>
                <ValidationAndErrorDisplay />
            </Grid>
            <Grid item  md={2} lg={2}></Grid>

            
        </Grid>   
        </>
    )
}

export default Intro;