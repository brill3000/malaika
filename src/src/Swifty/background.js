import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme/muiTheme';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    heigh: 120,
    width: 200
  }

}));

export default function Background (){
  const classes = useStyles();
  return (
    <ThemeProvider theme = {theme}>
    <Paper elevation={3}><Typography variant="subtitle1">This</Typography></Paper>
    </ThemeProvider>
  );
}
