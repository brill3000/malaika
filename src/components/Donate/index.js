import React from 'react';
import Appbar from '../Appbar'
import Footer from '../footer';
import Body from './body';

function Donate(){
    return(
        <>
            <Appbar 
            logoSizePc="-0, -40, 1200, 280" 
            logoSizeMobile="-0, -40, 600, 280"
            logoSizeTablet="-0, -50, 900, 280"
            />
            <Body />
            <Footer />
        </>
    )
}

export default Donate;