import React from 'react';
import fire from './../config/fire';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Login extends React.Component {
  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
      
  }
  
  

  render() {
    return (
      <div style={backgroundStyle}>
      <div style={moveCard}>
      <Card>
        <CardContent>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="email" label="Enter Email" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
            <CreateIcon />
        </Grid>
          <Grid item>
            <TextField id="password" label="Enter Password" />
          </Grid>
        </Grid>
        </CardContent>
        <CardActions>
      <Button style={moveButton} variant="contained" size="medium" color="Primary" onClick={this.login}>Login</Button>
      <Button style={moveButton} variant="contained" size="medium" color="secondary" onClick={this.signUp}>Sign up</Button>
    </CardActions>
    </Card>
      </div>
    </div>
    )
  }
}
const moveCard = {
  paddingLeft:'350px',
  minWidth: 365,
  width: '170px',
  marginTop: 300,
  height: '600px',
  opacity: 0.9,
}
const moveButton = {
  paddingLeft: '90px'
}
const backgroundStyle = {
  backgroundPosition: 'center center',
  height: '100vh',
 
    
  display: 'inlineBlock',
  zIndex: '-1',
  width: '100%',
  paddingTop: '15%',
    
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',
  flex: 1,
  resizeMode: 'cover',
  backgroundImage: 'url(' + 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=architecture-buildings-business-city-290595.jpg&fm=jpg' + ')'   
};
export default Login;
