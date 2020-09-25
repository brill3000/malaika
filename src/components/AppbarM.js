import React from 'react';
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
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
}

export default AppbarM;