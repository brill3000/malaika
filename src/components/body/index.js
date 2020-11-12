import React from 'react';

import Grid from '@material-ui/core/Grid';

import Intro from './intro';
import Vision from './vision'
import Journey from './journey'
import Progress from './progress';
import Footer from './footer';
import Proprieters from './propertiers';




function Body(){

    return(
        <>
        <Grid container spacing = {4}>
            <Intro/>
            <Vision/>
        </Grid>
        <Journey />
        <Progress />
        <Proprieters />
        <Footer />
        </>
    );
}

export default Body;