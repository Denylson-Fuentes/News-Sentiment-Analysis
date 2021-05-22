import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./Pages/Home"
import ContactPage from "./Pages/Contact"
import PredictPage from "./Pages/Predict"
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            News sentiment Analysis
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          {/* <Route path="/about" exact component={() => <About />} /> */}
          <Route path="/contact" exact component={() => <ContactPage />} />
          <Route path="/predict" exact component={() => <PredictPage />} />
      </Switch>
    </div>
  );
}

export default App;
