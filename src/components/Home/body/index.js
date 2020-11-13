import React from 'react';

import Grid from '@material-ui/core/Grid';

import Intro from './intro';
import Vision from './vision'
import Journey from './journey'
import Procress from './procress';
import Footer from '../../footer';
import Proprieters from './propertiers';




function Body(){

    return(
        <>
        <Grid container spacing = {4}>
            <Intro/>
            <Vision/>
        </Grid>
        <Journey />
        <Procress />
        <Proprieters />
        <Footer />
        </>
    );
}

export default Body;