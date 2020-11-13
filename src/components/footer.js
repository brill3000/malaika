import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import Mail from '@material-ui/icons/Mail';



import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    box:{
        padding: theme.spacing(7),
    },
    margin:{
      marginTop: theme.spacing(7),
      marginLeft: theme.spacing(10)
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
      <>
      <Grid container >
        <Grid item xs={7} className={classes.margin}>
          <Grid container orientation="verticle">
            <Grid item xs={7}>
              <Typography variant="h4">
                Contact us
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <IconButton>
                <Facebook /> <Typography>Facebook</Typography>
              </IconButton>
              <IconButton>
                <Twitter /> <Typography>Twitter</Typography>
              </IconButton>
              <IconButton>
                <Instagram /> <Typography>Instagram</Typography>
              </IconButton>
              <IconButton>
                <Mail /> <Typography>G mail</Typography>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
        <Box pt={4} className={classes.box}>
          <Copyright />
        </Box>
      </>
    )
}

export default Footer;