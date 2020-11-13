import React from 'react';
import Appbar from '../Appbar';
import Body from './body/index';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root:{
      background:"rgb(228 128 23 / 9%)",
      height: '100vh',
      margin: 0
   }
}))

function Home(){
   const classes = useStyles();
   return(
    <>
    <div className={classes.root}>
      <Appbar 
      logoSizePc="-0, -40, 800, 280" 
      logoSizeMobile="-0, -45, 400, 280" 
      logoSizeTablet="-0, -50, 700, 280"
      />
      <Body />
   </div>
    </>
   )
}

export default Home;