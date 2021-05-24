
import logo from '../logo.svg'
import {Container, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Background from "../nightSky.jpg"

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    welcomeContainer:{
        //padding: '5% 0',
        //width: '50%'
    },
    welcome:{
       fontSize: 100,
       color: 'white' 
    },
    gridStyle:{
        //backgroundColor: "#04274d",
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        //padding: "30% 0"
    },
    paragraphStyle:{
        color: "white",
        fontSize: 10
    },
});

function HomePage(){
    const classes = useStyles();
    return(
        <div className="HomePage">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header> */}
            <Grid container spacing={3} className={classes.gridStyle}>
                <Grid item xs={6}>
                    <Container className={classes.welcomeContainer} maxwidth='sm'>
                        <h1 className={classes.welcome}>Welcome</h1>
                        <Container>
                            <p className={classes.paragraphStyle}>Cillum aute elit nulla amet commodo consectetur enim laboris tempor. Quis reprehenderit cillum proident dolor ullamco deserunt. Consectetur est qui duis sit reprehenderit non tempor id est incididunt esse esse. Officia culpa voluptate duis id laborum incididunt amet.

        Nisi enim dolore eiusmod duis anim incididunt voluptate adipisicing sit. Ex aute sunt velit aute et ullamco id ea laboris occaecat cillum in. Commodo dolor duis qui ad in deserunt in ipsum. Occaecat consequat ad ut dolor deserunt consectetur. Nostrud mollit laboris enim incididunt culpa ea. Cupidatat minim sit pariatur pariatur est occaecat consequat dolor sunt culpa. Irure qui dolor anim fugiat ipsum excepteur.

        In eu fugiat nostrud eiusmod ex ex. Consectetur id in adipisicing ullamco nisi enim. Cillum proident et do minim nostrud deserunt. Labore sunt pariatur mollit deserunt. Est laboris in irure ullamco sit commodo adipisicing dolore ut nulla ut. Et cupidatat qui ad enim nostrud aliqua sint Lorem consequat. Ea ipsum do culpa duis laborum irure.

        Officia anim consectetur qui do occaecat nulla in ipsum eu labore mollit. Aliqua ea elit dolor dolor et Lorem esse eiusmod dolor excepteur ut. Quis dolore est veniam proident magna quis laborum consequat eiusmod sunt. Consectetur ullamco duis nostrud sint eiusmod exercitation laborum laboris laboris tempor nostrud mollit tempor. Non nostrud nisi ipsum laborum dolor ullamco laborum excepteur culpa Lorem deserunt cillum quis labore. Officia Lorem velit mollit sint do laborum.</p>
                        </Container>
                    </Container>
                </Grid>
            </Grid>

            

        </div>
    )
}

export default HomePage;