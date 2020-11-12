import React from 'react';
import Appbar from './Appbar';
import Body from './body/index';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root:{
      background:"rgb(228 128 23 / 9%)",
      height: '100vh'
   }
}))

function Home(){
   const classes = useStyles();
   return(
    <>
    <div className={classes.root}>
      <Appbar />
      <Body />
   </div>
    </>
   )
}

export default Home;