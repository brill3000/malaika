import React, {useRef, useEffect}from 'react';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Divider } from '../../resources/Asset 1.svg';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {TweenMax, Power3} from 'gsap';

const useStyles = makeStyles((theme) => ({
    textShadow: {
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.16)',
        opacity: 0

    },
    body2:{
        paddingTop: theme.spacing(1),
    },
}));

function Intro(){
    const classes = useStyles();
    const text = "Malaika wa Bubujiko La Furaha";
    let introHead = useRef(null);
    let caption = useRef(null);
    let introText = useRef(null);
    useEffect(() => {
        console.log(introHead);
        TweenMax.to(
            introHead,
            {
                duration: .8,
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            caption,
            {
                duration: .8,
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .2
            }
        )
        TweenMax.to(
            introText,
            {
                duration: .8,
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .25
            }
        )
    },[])

    return(
        <>
        <Grid item xs={5}>
        </Grid>
        <Grid item xs={7}>
            <Grid container justify="flex-start">
                <Grid item xs={6} >
                    <Typography variant="h2" 
                    ref={el => {introHead = el}} 
                    className={classes.textShadow}>
                        {text}
                    </Typography>
                    <Divider viewBox='0,-40,800,130' title=""/>
                    <Typography 
                    variant="h5" 
                    color="textSecondary"
                    ref={el => {caption = el}}>
                        Mission
                    </Typography>
                    <Typography 
                    variant="body1" 
                    ref={el => {introText = el}}
                    className={classes.body2}
                    >
                        To cater and care for children that 
                        are vulnerable by providing them
                        with basic needs such as food, shelter,
                        clothing, health and education
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                </Grid>
            </Grid>
        </Grid>
        
        </>
    )
}

export default Intro;