import React from 'react'; 
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff",
        border: ".1px double black",
    },
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    rhs: {
        display: "flex",
        justifyContent: "flex-end",
    }, hero: {
        backgroundImage: props => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.location.state.image})`,
        height: "90vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
    }, grid: {
        width: '100%',
        margin: '0px'
    }, rhsBox: {
        height: "500px",
        display: "flex",
        justifyContent: "center",
        padding: "20% 13% 0% 13%"
        
    }
}
));

//pass in image, title, and paragraph
function BlogAll(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.rhs}>
                    <Button color="primary" component={RouterLink} to="/" >Home</Button>
                    <Button smooth="true" duration={350} component={RouterLink} to="/" color="primary">Blogs</Button>
                </Toolbar>
            </AppBar>


            <Grid container className={classes.grid} >
                <Grid item md={6} xs={12} className={classes.hero} >
                </Grid>

                <Grid container item md={6} xs={12}>
                    <Box className={classes.rhsBox}>
                        <Grid item md={6} xs={12} >
                            <Typography variant="h4"  >
                                {props.location.state.score}
                        </Typography>
                            <Typography variant="b1">
                                {props.location.state.text}
                        </Typography>
                        </Grid>

                    </Box>
                    

                </Grid>


            </Grid>
        </div >
    );
}

export default BlogAll;