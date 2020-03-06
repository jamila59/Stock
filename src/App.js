import React, { Component } from 'react';
import './App.css';
// import Stock from './components/Stock.js';
// import Crypto from './components/Crypto';
import Login from './components/Login';
import Home from './components/Home';
import fire from './config/Fire';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }


componentDidMount(){
  this.authListener();
}

authListener() {
  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      this.setState({ user });
      localStorage.setItem('user', user.uid);
    } else {
      this.setState({ user: null });
      localStorage.removeItem('user');
    }
  });
}

  render(){
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
        {/* <Stock/>
        <Crypto/> */}
      </div>
    );
  }
}

export default App;
