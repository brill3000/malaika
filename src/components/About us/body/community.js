import React from 'react';
import {Grid, Hidden} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import picMain from '../../../resources/pic_3.jpg';
import {ReactComponent as Hope} from '../../../resources/hope.svg'


const useStyles = makeStyles((theme) => ({
    main:{
        marginLeft: theme.spacing(18),
        marginTop: theme.spacing(10),
        marginRight: theme.spacing(28),
        alignItems: 'center',
    },
    introText:{
        writingMode: 'vertical-lr',
        textOrientation: 'upright',
        marginTop: theme.spacing(5)
    },
    padding:{
        paddingRight: theme.spacing(3)
    },
    imgContainer:{
        height: 600,
        position: 'relative',
        overflow: 'hidden',
    },
    img:{
        width: 525,
        height: 600,
        position: 'absolute',
        objectFit: 'cover'
    },
    hope:{
        textAlign: 'start',
        paddingLeft: theme.spacing(22),
        paddingTop: theme.spacing(5)
    },
    community:{
        marginTop: theme.spacing(10),
    },
    
}))

function Community(){
    const classes = useStyles();

    return(
        <>
            <Grid container className={classes.main}>
                <Grid item  md={3} lg={3} >
                    <Hope viewBox='0 0 900 900' />
                </Grid>
                <Grid item xs={12} md={9} lg={9}>
                    <Grid container>
                        <Grid item xs={8} className={classes.imgContainer}>
                            <img src={picMain} alt="nothing found" className={classes.img} />
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={4} className={classes.padding}>
                                <Typography 
                                variant="h3" 
                                className={classes.introText}
                                color="primary"
                                >
                                Community
                                </Typography>
                            </Grid>  
                        </Hidden>
                        <Grid item xs={9} className={classes.hope}>
                            <Typography variant="body1" color="textSecondary"> Hope  |  Peace |  Service</Typography>
                        </Grid>   
                        <Grid item xs={3}>
                        </Grid>       
                    </Grid>
                </Grid>
                <Grid item  md={2} lg={2}></Grid>
                <Grid item xs={6} md={4} lg={4}className={classes.community}>  
                        <Typography variant="body1" color="textSecondary">
                        Families have been torn apart, marriages abandoned,
                        relationships ruined during the covid-19 pandemic. Unfortunately
                        children have been forced to bear the consequences of this,
                        since many have been neglected, the parents sighting the inability
                        to provide for them.
                    </Typography>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </>
    )
}

export default Community;