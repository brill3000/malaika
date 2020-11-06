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
import { ReactComponent as SwiftyPhrase } from '../resources/swiftyPhrase.svg';
import HamburgerIcon from './hamburgerIcon';
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
  }

}));

export default function ProminentAppBar() {
  const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
  return (
    <ThemeProvider theme = {theme}>
    <div className={classes.root}>
      <AppBar
        position="static"
        color='transparent'
        elevation={4}
        >
        <Toolbar className={classes.toolbar}>
          <Grid container justify={'center'} alignItems={'center'} spacing={5}>
            <Grid item className={classes.grow}>
              <SwiftyPhrase viewBox='-150,-40,4400,300'/>
            </Grid>
            <Grid item >
              <Button >Home</Button>
            </Grid>
            <Grid item >
              <Button >Stores</Button>
            </Grid>
            <Grid item className={classes.appBarLinks} >
              <Button>Reviews</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}
