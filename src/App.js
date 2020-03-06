import React, { Component } from 'react';
import './App.css';
import Stock from './components/Stock.js';
import Crypto from './components/Crypto';
import fire from './config/Fire';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component() {
  constructor(){
    super(props);
    this.state = {
      user:{},
    }
  }


ComponentDidMount(){
  this.authListener();
}

authListener() {
  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    if(user){
      this.setState({user});
    } else {
      this.setState({user: null});
    }
  });
}

  render(){
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
        <Stock/>
        <Crypto/>
      </div>
    );
  }
}

export default App;
