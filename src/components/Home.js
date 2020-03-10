import React from 'react';
import fire from './../config/fire';
import Stock from './Stock';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const drawerWidth = 400;

 const root = {
   display: 'flex'
 }
 const drawer= {
   width: drawerWidth,
   flexShrink: 0
 }
const toolbar = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding:  '8px',
  minHeight: '64px',
}
const appBar = {
  zIndex: '1400',
  flex: 1
}

const icon = {
  width: 70,
  height: 70,
  paddingLeft: '5px'
}

const button = {
  paddingLeft: '750px'
}
// const text = {
//   paddingLeft: '20px'
// }
class Home extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={root}>
      <CssBaseline />
      <AppBar position="fixed" style={appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Welcome!
            <Button onClick = {this.logout} variant="contained" color="primary" disableElevation  style={button}>
            Logout
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={drawer}
        variant="permanent"
      >
        <div style={toolbar} />
        <br/>
        <Fab to='/stock' component={Link} >
          <ShowChartIcon style={icon}/>
        </Fab>
        <h2 >Stock</h2>
        <Divider />
        <br/>
        <Fab  to='/crypto' component={Link} >
          <ShareIcon style={icon}/>
        </Fab>
        <h2>Cryptocurrency</h2>
        <Divider />
      </Drawer>
      <main>s
        <div style={toolbar} />
      </main>
    </div>
    )
  }
}

export default Home;

