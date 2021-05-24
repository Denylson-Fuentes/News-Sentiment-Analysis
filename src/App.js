import logo from './logo.svg';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomePage from "./Pages/Home"
import ContactPage from "./Pages/Contact"
import PredictPage from "./Pages/Predict"
import {AppBar, Toolbar, IconButton, Typography, Tab, Tabs, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBarStyle:{
    backgroundColor: "green",
    padding: "1% 0%"
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let history = useHistory();

  const handleChange = (event, newValue) => {
    if(newValue === 0){
      history.push('/')
    }
    else{
      history.push('/predict')
    }
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <div className="App">
      <AppBar position="static" className={classes.appBarStyle}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <Container maxheight="sm">
              <img src={logo} className="App-logo" alt="logo" width="10%" height="20%"/>
            </Container> */}
          </IconButton>
          <Typography variant="h6" color="inherit">
            News sentiment Analysis
          </Typography>

          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Home"  />
            <Tab label="Predict"  />
            {/* <Tab label="Item Three"/> */}
          </Tabs>
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
