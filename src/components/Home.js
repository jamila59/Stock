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

const drawerWidth = 240;

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
  width: 60,
  height: 60
}

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
            <Button onClick = {this.logout} variant="contained" color="primary" disableElevation>
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
        <ShowChartIcon
        style={icon}/>
        <Link to="/stock">Stock</Link>
        <br/>
        <ShareIcon
         style={icon}/>
         <Link to="/crypto">Cryptocurrency</Link>
        <Divider />
      </Drawer>
      <main>
        <div style={toolbar} />
      </main>
    </div>
      
    )
  }
}
export default Home;

 