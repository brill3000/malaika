import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {ReactComponent as SideDivider} from '../../../resources/side divider.svg'

import pic from '../../../resources/pic2.jpg';
import { makeStyles , useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles((theme) => ({
   
    imgContainer:{
        width: 400,
        height: 480,
        position: 'relative',
        overflow: 'hidden',
        marginTop: theme.spacing(4),

    },
    media: {
        width: 400,
        position: 'absolute',
        top: '3px'
    },
    right:{
        paddingLeft: theme.spacing(24)
    },
    sideText:{
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
    },
    textPosition:{
        marginTop: theme.spacing(28),
        paddingLeft: theme.spacing(5)
    },
    imgContainerMobile:{
        width: 322,
        height: 422,
        position: 'relative',
        overflow: 'hidden',
        marginTop: theme.spacing(4),

    },
    mediaMobile: {
        width: 322,
        position: 'absolute',
        top: '3px'
    },
    rightMobile:{
        paddingLeft: theme.spacing(8),
        paddingTop: theme.spacing(8)
    },
    sideTextMobile:{
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
    },
    textPositionMobile:{
        marginTop: theme.spacing(3),
        paddingLeft: theme.spacing(0)
    },
}))

function Vision(){
    const classes = useStyles();
    //const text2 = "Nurturing Young Minds That are less Previlaged ";
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return(
        <>
        {
            matches
            ?
        <Grid item xs={12} className={classes.right}>
            <Grid container>
                <Grid item xs={5}>
                    <Typography variant="h3" color="textSecondary" className={classes.test}>
                        Nurturing young minds that are less previlaged
                    </Typography>
                </Grid>
                <Grid item xs={7}></Grid>
                <Grid item xs={6}>
                    <Grid container className={classes.imgContainer}>
                            <img src={pic} className={classes.media} alt=''/>
                    </Grid>
                </Grid>
                <Grid item xs={3} className={classes.textPosition}>
                    <Typography variant="h6" color="textSecondary">
                        Vision
                    </Typography>
                    <br/>
                    <Typography variant="body1" color="textSecondary">
                        Educating and caring for the next generation
                    </Typography>
                </Grid>
                <Grid item xs={1}><SideDivider /></Grid>
                <Grid item xs={2} className={classes.textPosition}>
                    <Typography
                        className={classes.sideText}
                        variant="body1"
                        color="textSecondary"
                    >
                        Love
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

            :
        <Grid item xs={12} className={classes.rightMobile}>
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant="h3" color="textSecondary" >
                        Nurturing young minds that are less previlaged
                    </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={12}>
                    <Grid container className={classes.imgContainerMobile}>
                            <img src={pic} className={classes.mediaMobile} alt=''/>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.textPositionMobile}>
                    <Typography variant="h5" color="textSecondary">
                        Vision
                    </Typography>
                    <br/>
                    <Typography variant="body1" color="textSecondary">
                        Educating and caring for the next generation
                    </Typography>
                </Grid>
                
            </Grid>
        </Grid>
        }
        
        </>
    )
}

export default Vision;