import React from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import background from "./images/manga.jpg";
import aotpic from "./images/aot.png";
import jujupic from "./images/juju.jpg";
import dspic from "./images/ds.jpg";
import sgatepic from "./images/sgate.jpg";
import vinlandpic from "./images/vinland.jpg";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff",
        border: ".1px double black",
        // borderTopLeftRadius: "5px",
        // borderTopRightRadius: "5px",
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
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    },
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    }
}
));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.rhs}>
                    <Button color="primary">Home</Button>
                    <Button smooth="true" duration={350} component={Link} to="blogStart" color="primary">Blogs</Button>
                </Toolbar>
            </AppBar>
            <Box className={classes.hero}>
                <Box></Box>
            </Box>

            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography id="blogStart" variant="h4" className={classes.blogTitle}>
                    Articles
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>

                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={aotpic}
                                    title="AOT"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Attack on Titan
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="secondary" component={RouterLink} to={{
                                    pathname:'/blog/AoT',
                                    state:{
                                        image: "https://images.unsplash.com/photo-1557343133-b5cf261ace6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                                        score:"9/10",
                                        text: "Attack on Titan! The story is one of the most captivating stories I've ever seen. 100 years prior to the start of the anime, humanity has been on the bridge of extinction due to the monstrous humanoid Titans that devour humans. Now, present day in the anime, the remaining small population of mankind lives confined within 3 `heavenly` walls that are so tall and sturdy that even the titans can't break in.",
                                    }
                                }}>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={jujupic}
                                    title="AOT"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Jujutsu Kaisen
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="secondary" component={RouterLink} to={{
                                    pathname: '/blog/Juju',
                                    state: {
                                        image: "https://fsa.zobj.net/crop.php?r=Rs8HPF9We6yxljxrVwNxSKxVj5qbRk1xrI9HsLz_cekVCA-WK2yXK0m1ViWbFJkPCDLeZAEoMA88tmfKva--rPvMI3rttmFrSHh3soCy-yNs4LV5N_N_lAMXypVVy3dqeL3MgmNorwsFTE3B",
                                        score: "9/10",
                                        text: "Jujutsu Kaisen! So yes, I'm gonna first highlight the sector which totally carries JJK, the animation. JJK is a feast for your eyes. The animation is just so magnificent, starting from the beautiful landscapes to the sakuga on even the smallest fights. The fights are so well choreographed, the camera angles, the key frames. I don't have enough words to explain the greatness of the animation. You have to witness it for yourself.",
                                    }
                                }}>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={dspic}
                                    title="AOT"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Demon Slayer
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="secondary" component={RouterLink} to={{
                                    pathname: '/blog/DemonSlayer',
                                    state: {
                                        image: "https://wallpaperaccess.com/full/1099445.png",
                                        score: "9/10",
                                        text: "Demon Slayer! For a show to be good, it’s not always necessary for it to have a complex plot and a deep cast of characters. This is exactly what Kimetsu no Yaiba (Demon Slayer) proves. This show is yet another spectacle by ufotable – the studio that can take an otherwise generic shounen with a fairly linear story and turn it into a show that has fans craving for more every week. The studio has done just that with Kimetsu no Yaiba by making it one of the most popular shows of the year with its animation quality and direction.",
                                    }
                                }}>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={sgatepic}
                                    title="AOT"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Steins Gate
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        The self-proclaimed mad scientist Rintarou Okabe rents out a room in a rickety old building in Akihabara, where he indulges himself...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="secondary" component={RouterLink} to={{
                                    pathname: '/blog/SteinsGate',
                                    state: {
                                        image: "https://pixelz.cc/wp-content/uploads/2019/09/steins-gate-makise-kurisu-portrait-uhd-4k-wallpaper.jpg",
                                        score: "10/10",
                                        text: "Steins;Gate! is about Okabe Rintarou, a “mad scientist” who spends his time hanging out in his laboratory with his friends Mayuri and Daru. Ocassionally, they manage to invent futuristic gadgets, though these are never worth mentioning. The first few episodes may turn you down, as it seems like your general slice of life/comedy anime. However, when their most interesting invention, the Phone Microwave, turns out to be able to send text messages through time",
                                    }
                                }}>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={vinlandpic}
                                    title="AOT"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Vinland Saga
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="secondary" component={RouterLink} to={{
                                    pathname: '/blog/VinlandSaga',
                                    state: {
                                        image: "https://fsa.zobj.net/crop.php?r=b1uzJvPRM0IAxcoB6H-nPm1-YXRWEk02OGkYrEWMFDHZ76Sr_K1276dU1PUDTL_RYKpvhTllqUf_ioozMoPNBaTVk8WnwztM3rnq6Ge7GoaJqKV1nLWaByV__Cym4oaQH8LyVgmJ-LezlP1g",
                                        score: "9/10",
                                        text: "Man, have WIT proved everyone wrong. Vinland saga was absolutely masterfully crafted from beginning to end in every aspect. The story follows a young Icelandic adventurer on his quest for revenge so of course there’s great fight scenes, but where Vinland succeeds is its absolutely amazing writing. When watching the series, I genuinely forgot that I was watching an anime at several times. The acting, OST, writing and direction create a very live action experience and just feel Oscar worthy and real.",
                                    }
                                }}>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

export default Home