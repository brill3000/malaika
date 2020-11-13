import React, {useState} from 'react';
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

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
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(5)
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
    marginTop: theme.spacing(5),
    marginRight:theme.spacing(5),
  },
  appMargin2:{
    marginTop: theme.spacing(2),
  },
  label:{
    paddingTop:theme.spacing(1),
    paddingRight:theme.spacing(1),
  },
  desktop:{
    [theme.breakpoints.down('sm')]:{
      display: 'none',
    }
  },
  mobile:{
    [theme.breakpoints.up('md')]:{
      display: 'none',
    }
  }

}));

export default function Appbar(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [items] = useState([
      { label: 'Home', Icon: HomeIcon },
      { label: 'Page 2', Icon: WebIcon },
      { label: 'Page 3', Icon: WebIcon, disabled: true },
      { label: 'Page 4', Icon: WebIcon },
      { label: 'Page 5', Icon: WebIcon, hidden: true }
  ]);

    const onClick = content => () => {
      setOpen(false);
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const matches2 = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color='transparent'
        elevation={0}
        >
        <Toolbar className={classes.toolbar}>
          <Grid container 
          justify={'center'} 
          alignItems={'flex-start'} 
          spacing={5}
          >
            <Grid item className={classes.grow}>
              {matches ? 
                        matches2 ?   
                                  <Logo viewBox={props.logoSizePc} />
                                  :
                                  <Logo viewBox={props.logoSizeTablet} />
                       :
                        <Logo viewBox={props.logoSizeMobile} />
              }
            </Grid>
            <Grid item>
              <Grid container
                className={classes.desktop}
              >
                <Grid item  className={classes.appMargin}>
                  <Button size="large">Home</Button>
                </Grid>
                <Grid item className={classes.appMargin}>
                  <Button size="large">About us</Button>
                </Grid>
                <Grid item className={classes.appMargin} >
                  <Button size="large">Contacts</Button>
                </Grid>
                <Grid item className={classes.appBarLinks} >
                  <Button variant='outlined' size="large">Donate</Button>
                </Grid>
              </Grid>
              <Grid item >
                <Grid container className={classes.mobile}>
                
                <Grid item >
                        <Drawer
                        open={open}
                        onClose={() => setOpen(false)}
                        >
                          <List>
                            {items
                              .filter(({hidden}) => !hidden)
                              .map(({label, disabled, Icon}, i) =>(
                                <ListItem
                                  button
                                  key={i}
                                  disabled={disabled}
                                  onClick={onClick(label)}
                                >
                                  <ListItemIcon>
                                    <Icon />
                                  </ListItemIcon>
                                  <ListItemText>
                                    {label}
                                  </ListItemText>
                                </ListItem>
                              ))}
                          </List>
                      </Drawer>
                  </Grid >
                    <Grid item className={classes.appMargin2}>
                      <Button variant="outlined" onClick={() => setOpen(!open)}>
                        {open ? "Open" : "Close"} Menu
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
AppBar.PropTypes={
  logoSizePc: PropTypes.node,
  logoSizeMobile: PropTypes.node,
  logoSizeTablet: PropTypes.node,
}
