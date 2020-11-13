import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardHeader } from '@material-ui/core';
import pic1 from '../../../resources/pic_1.jpg';
import pic2 from '../../../resources/pic_3.jpg';
import pic3 from '../../../resources/drought 4.jpeg';

const useStyles = makeStyles((theme) => ({
    fullLength:{
        background:"rgb(119 42 88 / 11%)",
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(15)
    },
    headerText:{
        textAlign:'center',
        marginTop: theme.spacing(9)
    },
    bodyText:{
        textAlign:'center',
        marginTop: theme.spacing(3)
    },
    media2: {
        width: 322,
        height: 322,
        [theme.breakpoints.down('md')]:{    
            width: 420,
            height: 420
        },
    },
    imgSize2:{
        maxWidth: 322,
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(8),
        backgroundColor: "rgb(119 42 88 / 5%)",
        boxShadow:'0px -5px 30px 0px rgb(26 55 64 / 20%)',
        textAlign: 'left',
        [theme.breakpoints.down('md')]:{    
            maxWidth: 420,
            marginLeft: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft: theme.spacing(1),
        }
    },
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

    return(
        <>
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
        </>
    )
}

export default Journey;
