import React from 'react';
import Appbar from '../Appbar'
import Footer from '../footer';
import Body from './body';

function AboutUs(){
    return(
        <>
            <Appbar 
            logoSizePc="-100, -40, 1400, 280" 
            logoSizeMobile="-0, -90, 500, 340"
            logoSizeTablet="-0, -50, 900, 280"
            />
            <Body />
            <Footer />
        </>
    )
}

export default AboutUs;