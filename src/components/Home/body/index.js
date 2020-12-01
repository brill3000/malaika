import React from 'react';

import Grid from '@material-ui/core/Grid';
import {makeStyles /*,theme*/} from '@material-ui/core/styles';
import Intro from './intro';
import Vision from './vision'
import Journey from './journey'
import Process from './process';
import Footer from '../../footer';
import Proprieters from './propertiers';
import Teal from '@material-ui/core/colors/teal'


const useStyles = makeStyles( theme => ({
    vision:{
        background: 'rgb(101 110 175 / 18%)',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(28),
        borderRadius: '100px  0  100px  0',
        [theme.breakpoints.down('sm')]:{
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(10),
            borderRadius: '20px  0  20  0',

        }

    },
    intro:{
        paddingBottom: theme.spacing(15)
    },
    journey:{
        background: '#000000',
        borderRadius:'0 100px 100px 0',
        paddingLeft: theme.spacing(15),
        margin:0,
        [theme.breakpoints.down('md')]:{
            paddingLeft: theme.spacing(7),
        }
    },
    proprieters:{
        background: Teal[100],
        borderRadius: '100px 0 100px 0',
        margin: 0
    }
}))


function Body(){
    const classes = useStyles();

    return(
        <>
        <Grid container className={classes.intro}>
            <Intro/>
        </Grid>
        <div className={classes.vision}>
            <Vision/>
        </div>
        <div className={classes.journey}>
        <Journey />
        </div>
        <Process />
        <div className={classes.proprieters}>
        <Proprieters />
        </div>
        <Footer />
        </>
    );
}

export default Body;