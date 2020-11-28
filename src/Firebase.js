import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBStw900Y7jURw-NGQHpnBtpW-2uDtbHI4",
  authDomain: "crowdph.firebaseapp.com",
  databaseURL: "https://crowdph.firebaseio.com",
  projectId: "crowdph",
  storageBucket: "crowdph.appspot.com",
  messagingSenderId: "653676081072",
  appId: "1:653676081072:web:19fd6869a05da98445f075",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
