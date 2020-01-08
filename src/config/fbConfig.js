
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBMcdsKM1dGIBTFdccclAypnPcfHoYDKY8",
    authDomain: "net-nenja-firebase-playlist.firebaseapp.com",
    databaseURL: "https://net-nenja-firebase-playlist.firebaseio.com",
    projectId: "net-nenja-firebase-playlist",
    storageBucket: "net-nenja-firebase-playlist.appspot.com",
    messagingSenderId: "470984880702"
  };
  firebase.initializeApp(config);
  // firebase.firestore().settings({
  //     timestampsInSnapshots: true
  // })
  
    firebase.firestore().settings({})
  

  export default firebase;