import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import theme from '../theme/muiTheme';
import { ReactComponent as Logo } from '../resources/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),

  },
  toolbar: {
    minHeight: 70,
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  signUpButton: {
    margin: theme.spacing(1),
    borderRadius: 5,
    size: 'large',
  },
  appBarLinks: {
    marginRight: 0,
    marginTop: 40
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
    alignSelf: 'center',
    maxWidth: '50%'
  },
  appMargin:{
    marginTop: 40,
  },

}));

export default function Appbar() {
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
          <Grid container justify={'center'} alignItems={'flex-start'} spacing={5}>
            <Grid item className={classes.grow}>
            <Logo viewBox='-0, -40, 800, 280'/>
            </Grid>
            <Grid item  className={classes.appMargin}>
              <Button size="large">Home</Button>
            </Grid>
            <Grid item className={classes.appMargin}>
              <Button size="large">About us</Button>
            </Grid>
            <Grid item className={classes.appBarLinks} >
              <Button size="large">Contacts</Button>
            </Grid>
            <Grid item className={classes.appBarLinks} >
              <Button variant='outlined' size="large">Donate</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}
