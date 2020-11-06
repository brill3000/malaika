import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';

const useStyles = theme => ({
    root: {
        flexGrow: 1
    },
    flex : {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar
});

const ScrollAppBar = withStyles(useStyles)(
    class extends Component {
        state = {
            scrolling: false,
            scrollTop: 0
        };

        onScroll = e => {
            this.setState(state => ({
                scrollTop: e.target.documentElement.scrollTop,
                scrolling: e.target.documentElement.scrollTop > state.scrollTop
            }));
        };
            shouldComponentUpdate(props, state) {
                return this.state.scrolling !== state.scrolling;
        }
            componentDidMount() {
                window.addEventListener('scroll', this.onScroll);
        }
            componentWillUnmount() {
                window.removeEventListener('scroll', this.onScroll);
        }
        render(){
            const { classes } = this.props;
            return (
            <Slide in={!this.state.scrolling}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                        >
                            My Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Slide>
            );
        }
    }
);

const FixedAppBar = withStyles(useStyles)(
    ({ classes, title, buttonText }) => (
        <div className={classes.root}>
            <ScrollAppBar />
        <div className={classes.toolbarMargin} />
        <ul>
            { new Array(500).fill(null).map((v,i) => (
                <li key={i}>{i}</li>
            ))}
        </ul>
        </div>
    )
)

export default FixedAppBar;