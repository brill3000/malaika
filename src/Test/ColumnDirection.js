import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

const style = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
});
const Container = props => <Grid container {...props} />
const Item = props => < Grid item {...props} />

const ColumnDirection = withStyles(style) (({ classes}) => (
    <div className = {classes.root}>
        <Container justify = "space-around" spacing={4}>
            <Item xs={3}>
                <Container direction="column" spacing={2}>
                    <Item>
                        <Paper className={classes.paper}>
                            <Typography>One</Typography>
                        </Paper>
                    </Item>
                    <Item>
                        <Paper className={classes.paper}>
                            <Typography>Two</Typography>
                        </Paper>
                    </Item>
                </Container>
            </Item>
            <Item xs={3}>
                <Container direction="column" spacing={2}>
                    <Item>
                        <Paper className={classes.paper}>
                            <Typography>Three</Typography>
                        </Paper>
                    </Item>
                    <Item>
                        <Paper className={classes.paper}>
                            <Typography>Four</Typography>
                        </Paper>
                    </Item>
                </Container>
            </Item><Item xs={3}>
                <Container direction="column" spacing={2}>
                    <Item>
                        <Paper className={classes.paper}>
                            <Typography>Five</Typography>
                        </Paper>
                    </Item>
                    <Item>
                        <Paper className={classes.paper}>
                            <Typography>Six</Typography>
                        </Paper>
                    </Item>
                </Container>
            </Item>
            <Hidden smDown>
            <Item xs={3}>
                <Container direction="column" spacing={2}>
                    <Item>
                        <Paper className={classes.paper}>
                            <Typography>Seven</Typography>
                        </Paper>
                    </Item>
                    <Item>
                        <Paper className={classes.paper}>
                            <Typography>Eight</Typography>
                        </Paper>
                    </Item>
                </Container>
            </Item>
            </Hidden>
        </Container>
    </div>
));
export default ColumnDirection;