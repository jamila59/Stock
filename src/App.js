import React, { Component } from 'react';
import fire from './config/fire'
import Login from './components/Login.js';
import Stock from './components/Stock';
import Crypto from './components/Crypto';
import Home from './components/Home.js';
import ClippedDrawer from './components/Selector';
import { Switch, Route, } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? ( <Home /> ) : ( <Login /> ) }
        <Switch>
          <Route exact path='/crypto' component={Crypto} />
          <Route path='/stock' component={Stock} /> 
        </Switch>
      </div>
    );
  }
}

export default App;