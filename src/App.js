import React, { Component } from 'react';
import './App.css';
import Stock from './components/Stock.js';
import Crypto from './components/Crypto';
import fire from './config/Fire';

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
      // localStorage.setItem('user' , user.uid);
    } else {
      this.setState({user: null});
      // localStorage.removeItem('user');
    }
  });
}

  render(){
    return (
      <div className="App">
        <Stock/>
        <Crypto/>
      </div>
    );
  }
}

export default App;
