import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { Link, Switch, Route, NavLink} from 'react-router-dom';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'

import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuOpen from '@material-ui/icons/MenuOpen';
import Menu from '@material-ui/icons/Menu'
import ContactSupportOutlined from '@material-ui/icons/ContactSupportOutlined';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDonate, faSmile } from '@fortawesome/free-solid-svg-icons'


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
    marginLeft: theme.spacing(10)
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
  },
  drawer :{
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
}));

const styles = theme => ({
  activeListItem: {
    color: theme.palette.primary.main
  }
});

const NavListItem = withStyles(styles)(
  ({ classes, Icon, text, active, ...other }) => (
    <ListItem component={NavLink}{...other}>
      <ListItemIcon
        classes={{
          root: clsx({ [classes.activeListItem]: active})
        }}>
          <Icon />
      </ListItemIcon>
      <ListItemText
        classes= {{
          primary: clsx({
            [classes.activeListItem]: active
          })
        }}>
          {text}
      </ListItemText>
    </ListItem>
  )
)

const NavItem = props => (
  <Switch>
    <Route
      exact
      path={props.to}
      render={ () => <NavListItem active={true} {...props}/> }
    />
      <Route path="/" render={ () => <NavListItem {...props} /> } /> 
  </Switch>
)

const Donate = () => <FontAwesomeIcon icon={faDonate} size="lg"/>
const Smile = () => <FontAwesomeIcon icon={faSmile} size="lg"/>



export default function Appbar(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [items] = useState([
      { label: <Typography color="secondary">Home</Typography>, 
        Icon: HomeIcon, 
        link: "/home"
      },
      { label: <Typography color="secondary">About Us</Typography>,
        Icon: Smile, 
        link: "/about" 
      },
      { label: <Typography color="secondary">Contact Us</Typography>,
        Icon: ContactSupportOutlined, 
        link: "/contact"
      },
      { label: <Typography color="secondary">Donate</Typography>,
        Icon: Donate,
        link: "/donate"
      }
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
                  <Button size="large" component={Link} to="/home" >Home</Button>
                </Grid>
                <Grid item className={classes.appMargin} >
                  <Button size="large" component={Link} to="/about" >About us</Button>
                </Grid>
                <Grid item className={classes.appMargin}>
                  <Button size="large" component={Link} to="/contact">Contacts</Button>
                </Grid>
                <Grid item className={classes.appBarLinks} >
                  <Button variant='outlined' size="large" component={Link} to="/donate">Donate</Button>
                </Grid>
              </Grid>
              <Grid item >
                <Grid container className={classes.mobile}>
                
                <Grid item >

                        <Drawer
                        open={open}
                        onClose={() => setOpen(false)}
                        >
                          <List 
                            className={classes.drawer}
                          >
                            {items
                              .filter(({hidden}) => !hidden)
                              .map(({label, Icon, link}, i) =>(
                                <NavItem
                                  button
                                  key={i}
                                  to={link}
                                  text={label}
                                  Icon={Icon}
                                  onClick={onClick(label)}
                                />
                              ))}
                          </List>
                      </Drawer>
                  </Grid >
                    <Grid item className={classes.appMargin2}>
                      <IconButton onClick={() => setOpen(!open)}>
                         { open ? <MenuOpen fontSize="large" /> : <Menu fontSize="large"/> }       
                      </IconButton>
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
