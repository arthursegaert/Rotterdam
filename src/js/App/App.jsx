import React, { Component } from "react";
import firebase from "firebase/app";
import Rebase from "re-base";
import database from "firebase/database";

class App extends Component {
  constructor() {
    super();
    this.state = { kunstwerken: [] };

    // Firebase
    const config = {
      apiKey: "AIzaSyBqKXTejPfFjJH5_yaxapBijSnQo2VSMuk",
      authDomain: "rotterdam-maiv.firebaseapp.com",
      databaseURL: "https://rotterdam-maiv.firebaseio.com"
    };
    const app = firebase.initializeApp(config);
    const db = firebase.database(app);
    this.base = Rebase.createClass(db);
  }

  componentDidMount = () => {
    this.base.syncState(`kunstwerken`, {
      context: this,
      state: "kunstwerken"
    });
  };

  render() {
    const { kunstwerken } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {kunstwerken.map(kunstwerk => {
          return (
            <div key={kunstwerk.id} className="kunstwerk">
              <p>{kunstwerk.title}</p>
              <p>{kunstwerk.author}</p>
              <p>{kunstwerk.desc}</p>
              <img className="kunstwerk-img" src={kunstwerk.img} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
