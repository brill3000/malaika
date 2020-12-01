import React /*,{useRef}*/from 'react';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Divider } from '../../../resources/Asset 1.svg';
import { ReactComponent as Heart } from '../../../resources/heart.svg';
import { makeStyles , useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
    textShadow: {
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.13)',
        lineHeight: 1.3
    },
    textShadow2: {
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.10)',
        paddingBottom: theme.spacing(1),
    },
    body2:{
        paddingTop: theme.spacing(1),
    },
    padding:{
        padding: theme.spacing(2),
        marginTop: -80

    },

    padding2:{
        paddingLeft: theme.spacing(0),
        paddingTop: theme.spacing(4),
    },
    sideText:{
        writingMode: 'vertical-lr',
        textOrientation: 'upright',
        paddingLeft: theme.spacing(24),
        paddingTop: theme.spacing(18),
        marginTop: -80

    }
}));

function Intro(){
    const classes = useStyles();
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const text = "Malaika wa Bubujiko La Furaha";
    /*let introHead = useRef(null);
    let caption = useRef(null);
    let introText = useRef(null);*/
   

    return(
        <>
        <Grid item lg={5} md={5} sm={5} xs={2} >
            {
                matches 
                ?
                <>
                    <Typography
                    className={classes.sideText}
                    color="textSecondary"
                    >
                        Hope
                    </Typography>
                    <Heart viewBox="-500 0 1000 600"/>
                </>
                :
                <></>
            }
            
        </Grid>
        <Grid item lg={7} md={7} sm={7} xs={10}> 
  
                    {
                        matches ? 
                        <>

                <Grid container justify="flex-start" className={classes.padding}>
                    <Grid item lg={6} md={5} sm={10} xs={10}>
                        <Typography variant="h2" 
                        //ref={el => {introHead = el}} 
                        className={classes.textShadow}
                        >
                        {text}
                        </Typography>
                            <Divider viewBox='0,-40,1000,130' title=""/>
                                <Typography 
                                variant="h6" 
                                color="textSecondary"
                                //ref={el => {caption = el}}
                                >
                                    Mission
                                </Typography>
                                    <Typography 
                                    variant="body2" 
                                    //ref={el => {introText = el}}
                                    className={classes.body2}
                                    >
                                        To cater and care for children that 
                                        are vulnerable by providing them
                                        with basic needs such as food, shelter,
                                        clothing, health and education
                                    </Typography>
                        
                    </Grid>
                    <Grid item lg={6} md={7} sm ={2} xs={2}></Grid>
                </Grid>
                        </> :
                        <>
                <Grid container justify="flex-start" className={classes.padding2}>
                    <Grid item lg={6} md={5} sm={10} xs={10}>
                        <Typography variant="h3" 
                        //ref={el => {introHead = el}} 
                        className={classes.textShadow2}
                        >
                        {text}
                        </Typography>
                            <Divider viewBox='0,-40,1200,130' title=""/>
                            <Typography 
                            variant="body1" 
                            color="textSecondary"
                            //ref={el => {caption = el}}
                            >
                                Mission
                            </Typography>
                                <Typography 
                                variant="body2" 
                                //ref={el => {introText = el}}
                                className={classes.body2}
                                >
                                    To cater and care for children that 
                                    are vulnerable by providing them
                                    with basic needs such as food, shelter,
                                    clothing, health and education {matches}
                                </Typography>
                    </Grid>
                    <Grid item lg={6} md={7} sm ={2} xs={2}></Grid>
                </Grid>
                        </>
                    }
            </Grid>        
        </>
    )
}

export default Intro;