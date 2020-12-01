import React from 'react';
import picMain from '../../../resources/pic_1.jpg';
import { Grid, Typography } from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    mainMobile:{
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(10),
        alignItems: 'center',
    },
    imgContainerMobile:{
        width :525,
        height: 400,
        position: 'relative',
        overflow: 'hidden',
        
    },
    imgMobile:{
        width: 525,
        position: 'absolute',
    },
    introTextMobile:{
        writingMode: 'vertical-lr',
        textOrientation: 'upright',

    },
    spacingCircle:{
        marginLeft: theme.spacing(5)
    }

}))



function IntroMobile(){
    const classes = useStyles();

    return(
       
        <>
        <Grid container className={classes.mainMobile}>
            <Grid item xs={2} className={classes.introTextMobile}>
                <Typography 
                variant="h6" 
                color="textPrimary"
                >
                About us
                </Typography>
                </Grid>
            <Grid item xs={10} className={classes.imgContainerMobile}>
                <img src={picMain} alt="nothing found" className={classes.imgMobile}/>
            </Grid>
        </Grid>

        <Grid container className={classes.mainMobile}>
                    <Grid item xs={9}>
                        <Typography variant="body1" color="textSecondary">
                            We are dedicated organization full of compassionate individuals,
                            giving hope to the community.
                            Our aim is to create a better society from it's roots, 
                            which are the young childern
                        </Typography>
                    </Grid>
                    <Grid item xs={3}></Grid>
        </Grid>
        </>
        
        
   
    )
}

export default IntroMobile;