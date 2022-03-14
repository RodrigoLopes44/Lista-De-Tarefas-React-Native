import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVzzbTrJrK2RCLCgX6JCd0hmVov2aEElo",
    authDomain: "recodeproaulas.firebaseapp.com",
    projectId: "recodeproaulas",
    storageBucket: "recodeproaulas.appspot.com",
    messagingSenderId: "471691225667",
    appId: "1:471691225667:web:85819f3801bf8fcfb5c2f6",
    measurementId: "G-4B4CMV0Q9Z",    
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.firestore();
export default database;