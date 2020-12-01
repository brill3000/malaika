import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardHeader } from '@material-ui/core';
import pic1 from '../../../resources/pic_1.jpg';
import pic2 from '../../../resources/pic_3.jpg';
import pic3 from '../../../resources/drought 4.jpeg';
import Pink from '@material-ui/core/colors/pink';
import JourneyMobile from './journeyMobile';


const useStyles = makeStyles((theme) => ({
    fullLength:{
       // background:"#000000",
        marginTop: theme.spacing(0),
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(25),
    },
    imgContainer:{
        width :625,
        height: 500,
        position: 'relative',
        overflow: 'hidden',
        paddingTop: theme.spacing(10),
        marginLeft: theme.spacing(5),
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
        marginTop: theme.spacing(10)
    },
    textHorizontal:{
        color: "#9a9999",
        writingMode: 'vertical-lr',
        textOrientation: 'upright',
        marginTop: theme.spacing(17),
        marginLeft: theme.spacing(8)
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


function Journey(){

    const classes = useStyles();

    const theme =  useTheme();
    const matches = useMediaQuery( theme => theme.breakpoints.up('sm'))

    return(
        <>
        {
            matches 
            
            ?
        <Grid container className={classes.fullLength}>
            <Grid item xs={7} className={classes.imgContainer}>
                <Grid container justify='center'>
                  <img src={pic1} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h2" className={classes.textWhite}>Our Journey</Typography>
                <Typography variant="body1" className={classes.textGrey}>
                    Working with Compassion
                </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2} className={classes.textHorizontal}>
                <Typography 
                variant="body1"
                >
                    Recovery
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography
                    paragraph
                    className={classes.textGrey}
                >Covid 19 has hit hard at populations due to loss of economic anchorage 
                of persons that were already living below the poverty line. 
                In Kenya and especially in informal settlements the lockdown has 
                led to unprecedented levels of stress and depression due to lack of 
                basic necessities and limited space for families that are living in 
                squalid conditions.
                <br/>
                MWABULAFU rises to this occasion on a rescue
                mission to offer a new lease of life to 
                these angels and put a smile on their faces. 
                </Typography>
            </Grid>
        </Grid>
            :
        <JourneyMobile />

        }

        </>
    )
}

export default Journey;

/*function Test(){
    const classes = useStyles()
    return(

        <Grid container spacing={4} className={classes.fullLength}>
            <Grid item>
                <Grid container>
                    <Grid item xs={12} className={classes.headerText}>
                        <Typography variant="h2">Our Journey</Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={2} xs={1}></Grid>
                    <Grid item lg={4} md={4} sm={8} xs={10}className={classes.bodyText}>
                        <Typography variant="body1" color="textSecondary">
                        MWABULAFU is born out of the rising cases of children
                        below the age of 5 that being abandoned 
                        by their parents or guardians because of the covid 
                        19 pandemic.
                        <br/>
                        <br/>
                        Covid 19 has hit hard at populations due to
                        loss of economic anchorage of persons that were
                        already living below the poverty line. 
                        </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={2} xs={1}></Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            { items
                                .map(({image, title, subheader}, i) => (
                                    
                            <Grid item lg={4} md={4} sm={12} xs={12} key={i}>
                            <Card className={classes.imgSize2} elevation={5}>
                                <CardMedia
                                    className={classes.media2}
                                    image={image}
                                    title=""
                                />   
                                <CardHeader title={title} subheader={subheader} />
                            </Card>
                            </Grid>

                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}*/