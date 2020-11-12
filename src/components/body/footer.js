import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    box:{
        padding: theme.spacing(7),
    }
}))

function Copyright(){
    return(
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        WebDEV.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
     </Typography>
    )
}


function Footer(){
    const classes = useStyles();
    return(
        <Box pt={4} className={classes.box}>
          <Copyright />
        </Box>
    )
}

export default Footer;