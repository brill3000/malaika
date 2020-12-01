import React, {useRef} from 'react';
import picMain from '../../../resources/pic_1.jpg';
import { Grid, Typography } from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IntroMobile from './introMobile';
import Pink from '@material-ui/core/colors/pink'

const useStyles = makeStyles((theme) => ({
    main:{
        marginLeft: theme.spacing(18),
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(28),
        alignItems: 'center',
    },
    imgContainer:{
        width :725,
        height: 500,
        position: 'relative',
        overflow: 'hidden',

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
        width: 725,
        position: 'absolute',
        
    },
    introText:{
        writingMode: 'vertical-lr',
        textOrientation: 'upright',

    },
    circle:{
        borderRadius:'100%',
        height: 30,
        width: 30
    },
    spacingCircle:{
        marginLeft: theme.spacing(5)
    }

}))

function Circle(props){
    const classes = useStyles();

    return(
        <div className={classes.circle} style={{ backgroundColor : props.color}}/>
    )
} 

const circleColors = [
    {color: 'rgb(91 195 176)'},
    {color: 'rgb(202 60 60)'},
    {color: '#000000'},    
]


function Intro(){
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    let imgContainer = useRef(null);
    let img = useRef(null);

    return(
        <>
        {
            matches
            ?
        <>
        <Grid container className={classes.main}>
            <Grid item xs={2} className={classes.introText}>
                <Typography 
                variant="h6" 
                color="textPrimary"
                >
                About us
                </Typography>
                </Grid>
            <Grid item xs={10} 
            className={classes.imgContainer}
            ref = {el => imgContainer = el}
            >
                <img 
                src={picMain} 
                alt="nothing found" 
                className={classes.img}
                ref = {el => img = el}
                />
            </Grid>
        </Grid>

        <Grid container className={classes.main}>
                    <Grid item xs={3}>
                        <Typography variant="body1" color="textSecondary">
                            We are dedicated organization full of compassionate individuals,
                            giving hope to the community.
                            Our aim is to create a better society from it's roots, 
                            which are the young childern
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justify="center">
                            {circleColors.map((circle, index) =>
                                <Grid item className={classes.spacingCircle} key={index}>
                                    <Circle className={classes.circle} color={circle.color}/>                                
                                </Grid>  
                            )
                            }
                        </Grid>         
                    </Grid>
                    <Grid item xs={3}></Grid>
        </Grid>
        </>
            :
        <IntroMobile />
        }
        
        </>
    )
}

export default Intro;