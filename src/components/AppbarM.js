/*import React from 'react';
import AppBar from '@material-ui/core/Appbar';
import PropTypes from 'prop-types';
import { Toolbar, makeStyles, Button,
         IconButton, Typography } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles'
//import MenuIcon from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff",
        color: "#555",
        boxShadow:
          "0 0px 0px 0px rgba(0, 0, 0, 0.12), 0 7px 4px -5px rgba(0, 0, 0, 0.15)",
    },    
    button: {
            background: 'primary',
            border: 0,
            borderRadius: '0 10px 10px 10px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'black',
            height: 48,
            padding: '0 30px',
            margin:'100px',
    }
}));

function AppbarM(props){
    const classes = useStyles();
    return(
        <>
        <AppBar position='absolute' className={classes.appBar}>
            <Toolbar>
                <IconButton
                    edge = 'start'
                    color = 'inherit'
                >
                </IconButton>
                <Typography component = 'h1' variant = 'h6' color = 'inherit'>Mumbi Audits</Typography>
            </Toolbar>
        </AppBar>
        <Button className={classes.button}>Test</Button>
        </>
    );
}*/

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import theme from '../theme/muiTheme';
import { ReactComponent as Logo } from '../resources/logo.svg';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),

  },
  toolbar: {
    minHeight: 70,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  signUpButton: {
    margin: theme.spacing(1),
    borderRadius: 5,
    size: 'large',
  },
  appBarLinks: {
    marginRight: 14,
  },
  paper: {
    height: 10,
    width: 10,
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  grow: {
    flexGrow: 1,
    marginTop: 8
  },
  appMargin:{
    marginTop: 50
  }

}));

export default function AppbarM() {
  const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
  return (
    <ThemeProvider theme = {theme}>
    <div className={classes.root}>
      <AppBar
        position="static"
        color='transparent'
        elevation={0}
        >
        <Toolbar className={classes.toolbar}>
          <Grid container justify={'center'} alignItems={'start'} spacing={5}>
            <Grid item className={classes.grow}>
            <Logo viewBox='-100, -40, 1000, 500'/>
            </Grid>
            <Grid item  className={classes.appMargin}>
              <Button >Home</Button>
            </Grid>
            <Grid item className={classes.appMargin}>
              <Button >About us</Button>
            </Grid>
            <Grid item className={classes.appMargin} >
              <Button>Contacts</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}
