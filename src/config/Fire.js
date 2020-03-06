import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQmxPp-p6qEoroaTZE29vE4d7IupDsgKc",
    authDomain: "stok-29912.firebaseapp.com",
    databaseURL: "https://stok-29912.firebaseio.com",
    projectId: "stok-29912",
    storageBucket: "stok-29912.appspot.com",
    messagingSenderId: "651289063363",
    appId: "1:651289063363:web:e567393f3c211d43295776",
    measurementId: "G-GR8P4B95FV"
  };
  const fire = firebase.initializeApp(config);
  
  export default fire;
