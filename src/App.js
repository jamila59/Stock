import React, { Component } from 'react';
import fire from './config/fire'
import Login from './components/Login.js';
import Stock from './components/Stock'
import Home from './components/Home.js';
import ClippedDrawer from './components/Selector';

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
        {/* { this.state.user ? ( <Home /> ) : ( <Login /> ) } */}
        <ClippedDrawer/>
        {/* <Home/> */}
        {/* <Stock/> */}
      </div>
    );
  }
}

export default App;