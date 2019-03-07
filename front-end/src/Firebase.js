import * as firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDJGoXKiiTU2PKGWPByGMqtf8ZWAnSVMk0",
  authDomain: "theroaminghobo.firebaseapp.com",
  databaseURL: "https://theroaminghobo.firebaseio.com",
  projectId: "theroaminghobo",
  storageBucket: "theroaminghobo.appspot.com",
  messagingSenderId: "776711505086"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/')
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();