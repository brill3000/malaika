import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dadPic from '../../../resources/Sylvester.png'
import { Card, CardContent, CardHeader, Avatar, CardActions } from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import IconButton from '@material-ui/core/IconButton';

const proprieters = [
    {
        title: "Sylvester Kaboi",
        subheader: "Director",
        caption: "Joined 2009",
        description: 
        `Compassionate and driven, Sylvester has dedicated his life an effort
        to help the vunerable. A climate change scientist by profession, he 
        strives to create a better world for our future generation... `
    },
    {
        title: "Julie Mumbua",
        subheader: "Volunteer",
        caption: "Joined 2009",
        description: 
        `A talented singer who brings joy to children using her voice, reaching out
        to them through music. She is a certified Geospasial engineer but down to earth
        at heart...`
    },
    {
        title: "Mayday Mumbi",
        subheader: "Volunteer",
        caption: "Joined 2009",
        description: 
        `Financial analysist by day, caregiver by night, having two children of her own, she 
        feel the insesent need to create a good home for those who have been suffering neglect...`,
    },
]


const useStyles = makeStyles((theme) => ({
    imgSize3:{
        maxWidth: 322,
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(8),
        backgroundColor: "rgb(255 255 255 / 80%)",
        boxShadow:'2px 2px 10px 0px rgb(26 55 64 / 30%)',
        textAlign: 'left'

    },
    fullLength:{
        //background:"rgb(42 98 119 / 11%)",
        marginTop: theme.spacing(0),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(20)
    },
    headerText:{
        textAlign:'center',
        marginTop: theme.spacing(9)
    },
    bodyText:{
        textAlign:'center',
        marginTop: theme.spacing(3)
    },
    imgContainer:{
        width :225,
        height: 345,
        position: 'relative',
        overflow: 'hidden',

        '&::after':{
            content: 'none',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,

        }
        
    },
    img:{
        width: 225,
        position: 'absolute',
        
    },
    

}));


function Proprieters(){
    const classes = useStyles();

    return(
      
        <Grid container className={classes.fullLength}>
            <Grid item xs={12} className={classes.headerText}>
                <Typography variant="h2">PROPRIETERS</Typography>

                <Grid container orientation="verticle">
                {proprieters
                    .map(({title, subheader, caption, description}, i) => (
                        <Grid item lg={4} md={4} sm={12} xs={12} key={i}>
                            <Card className={classes.imgSize3}>
                            <CardHeader
                                title={title}
                                subheader={subheader}
                                avatar={
                                <Avatar>
                                    <PersonIcon />
                                </Avatar> }
                            />
                            <CardContent>
                                <Typography variant="caption" color="textSecondary">{caption}</Typography>
                                <Typography>
                                    {description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton>
                                <ContactMailIcon />
                                </IconButton>
                                <IconButton>
                                <ContactPhoneIcon />
                                </IconButton>
                            </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>                    
        </Grid>

    )
}

export default Proprieters;
