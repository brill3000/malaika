import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
        to help the vunerable`,
    },
    {
        title: "Julie Mumbua",
        subheader: "Director",
        caption: "Joined 2009",
        description: 
        `Compassionate and driven, Sylvester has dedicated his life an effort
        to help the vunerable`,
    },
    {
        title: "Mayday Mumbi",
        subheader: "Director",
        caption: "Joined 2009",
        description: 
        `Compassionate and driven, Sylvester has dedicated his life an effort
        to help the vunerable`,
    },
]


const useStyles = makeStyles((theme) => ({
    imgSize3:{
        maxWidth: 322,
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(8),
        backgroundColor: "rgb(119 42 88 / 5%)",
        boxShadow:'2px 2px 10px 0px rgb(26 55 64 / 20%)',
        textAlign: 'left'

    },
    fullLength2:{
        background:"rgb(42 98 119 / 11%)",
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
    

}));


function Proprieters(){
    const classes = useStyles();

    return(
        <Grid container className={classes.fullLength2}>
            <Grid item xs={12} className={classes.headerText}>
                <Typography variant="h2">PROPRIETERS</Typography>

                <Grid container orientation="verticle">
                {proprieters
                    .map(({title, subheader, caption, description}, i) => (
                        <Grid item key={i}>
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
