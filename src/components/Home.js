import React from 'react';
import fire from './../config/fire';
import Stock from './Stock';
import { ThemeProvider } from '@material-ui/core';


class Home extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>You Are Logged In</h1>
        <button onClick = {this.logout}>Logout</button>
      </div>
    )
  }
}
export default Home;