import firebase from "firebase/app";
import  "firebase/database";
import  "firebase/auth";
import Rebase from "re-base";

const config = {
  apiKey: "AIzaSyBqKXTejPfFjJH5_yaxapBijSnQo2VSMuk",
  authDomain: "rotterdam-maiv.firebaseapp.com",
  databaseURL: "https://rotterdam-maiv.firebaseio.com"
};

const app = firebase.initializeApp(config);
const db = firebase.database(app);
const base = Rebase.createClass(db);
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { app, db, base, facebookProvider };
