import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardHeader } from '@material-ui/core';
import pic1 from '../../../resources/pic_1.jpg';
import pic2 from '../../../resources/pic_3.jpg';
import pic3 from '../../../resources/drought 4.jpeg';
import Pink from '@material-ui/core/colors/pink';

const useStyles = makeStyles((theme) => ({
    fullLength:{
       // background:"#000000",
        marginTop: theme.spacing(0),
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(25),
    },
    imgContainer:{
        width :625,
        height: 500,
        position: 'relative',
        overflow: 'hidden',
        paddingTop: theme.spacing(10),
        marginLeft: theme.spacing(0),
        '&::after':{
            content: 'none',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
            background: Pink[400],

        }
        
    },
    img:{
        width: 625,
        position: 'absolute',
        
    },
    textWhite:{
        color: '#c5c5c5'
    },
    textGrey:{
        color: "#9a9999",
        marginTop: theme.spacing(3)
    },
    parGrey:{
        color: "#9a9999",
        marginTop: theme.spacing(10)
    },
    textHorizontal:{
        color: "#9a9999",
        writingMode: 'vertical-lr',
        textOrientation: 'upright',
        marginTop: theme.spacing(17),
        marginLeft: theme.spacing(0)
    }
}));

const items = [
    {
        image: pic1,
        title: "Family",
        subheader: "Creating Happier Community"
    },
    {
        image: pic2,
        title: "Families",
        subheader: "Forming tight knit families"
    },
    {
        image: pic3,
        title: "Rescue",
        subheader: "Rescuing children from neglect"
    }
]


function JourneyMobile(){

    const classes = useStyles();


    return(
        <>
        <Grid container className={classes.fullLength}>
            <Grid item xs={12}>
                <Typography variant="h3" className={classes.textWhite}>Our Journey</Typography>
                <Typography variant="body1" className={classes.textGrey}>
                    Working with Compassion
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.imgContainer}>
                <Grid container justify='center'>
                  <img src={pic1} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid item xs={2} className={classes.textHorizontal}>
                <Typography 
                variant="body1"
                >
                    Recovery
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography
                    variation="body2"
                    className={classes.parGrey}
                >
                    Covid 19 has hit hard at populations due to loss of economic anchorage 
                    of persons that were already living below the poverty line. 
                    In Kenya and especially in informal settlements the lockdown has 
                    led to unprecedented levels of stress and depression due to lack of 
                    basic necessities and limited space for families that are living in 
                    squalid conditions.
                <br/>
                <br/>
                    MWABULAFU rises to this occasion on a rescue
                    mission to offer a new lease of life to 
                    these angels and put a smile on their faces. 
                </Typography>
            </Grid>
        </Grid>
        </>
    )
}

export default JourneyMobile;