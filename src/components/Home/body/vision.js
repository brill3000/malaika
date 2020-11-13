import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Divider } from '../../../resources/Asset 1.svg';
import Grid from '@material-ui/core/Grid'
import { Card, CardMedia, CardHeader } from '@material-ui/core';
import pic from '../../../resources/pic2.jpg';
import { makeStyles , useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles((theme) => ({
    body2:{
        paddingTop: theme.spacing(1),
    },
    scrollMargin:{
        marginTop: theme.spacing(15),
        marginLeft: theme.spacing(17),
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(4)
    }, 
    scrollMargin2:{
        marginTop: theme.spacing(15),
        marginLeft: theme.spacing(17),
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(15)
    }, 
    imgSize:{
        maxWidth: 500,
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]:{
            marginLeft: theme.spacing(0),
        },
        marginBottom: theme.spacing(3),
        backgroundColor: "rgb(119 42 88 / 5%)",
        boxShadow:'0px -5px 30px 0px rgb(26 55 64 / 24%)',
        paddingBottom: theme.spacing(3),

    },
    media: {
        width: 500,
        height: 500
    },
    leftBg:{
        marginTop: theme.spacing(13),
        background:"rgb(101 110 175 / 11%)",
    },
}))

function Vision(){
    const classes = useStyles();
    const text2 = "Nurturing Young Minds That are less Previlaged ";
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    return(
        <>
        <Grid item xs={12} md={6} sm={12} lg={5} >
           { matches ? 
                <Grid container justify="flex-start" className={classes.scrollMargin}>
                    <Grid item lg={5} md={5} sm={8} xs={8} >
                        <Typography variant="h3">{text2}</Typography>
                        <Divider viewBox='0,-40,800,130' title=""/>
                        <Typography variant="h5" color="textSecondary">Vision</Typography>
                        <Typography variant="body1" className={classes.body2}>
                        To be a haven and a fountain of joy and
                        hope to children from backgrounds that 
                        have been wanting
                        </Typography>
                    </Grid>
                    <Grid item lg={7} md={5} sm={4} xs={4}>
                    </Grid>
                </Grid> 
                    :
                <Grid container justify="flex-start" className={classes.scrollMargin2}>
                    <Grid item lg={5} md={5} sm={8} xs={8} >
                        <Typography variant="h3">{text2}</Typography>
                        <Divider viewBox='0,-40,1000,130' title=""/>
                        <Typography variant="h6" color="textSecondary">Vision</Typography>
                        <Typography variant="body2" className={classes.body2}>
                        To be a haven and a fountain of joy and
                        hope to children from backgrounds that 
                        have been wanting
                        </Typography>
                    </Grid>
                    <Grid item lg={7} md={5} sm={4} xs={4}>
                    </Grid>
                </Grid>   
            } 
                      
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={7} className={classes.leftBg}>
            <Card className={classes.imgSize} elevation={5}>
                <CardMedia
                    className={classes.media}
                    image={pic}
                    title=""
                />   
                <CardHeader title="Better life" subheader="Educating next generation for a better life" />
            </Card>
        </Grid>
        </>
    )
}

export default Vision;