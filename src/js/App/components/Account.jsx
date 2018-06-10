import React, { Component } from "react";
import { app, base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";
import Nav from "./Nav.jsx";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captions: []
    };
  }

  componentDidMount = () => {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        const userid = app.auth().currentUser.uid;
        base.syncState(`captions/${userid}`, {
          context: this,
          state: "captions",
          asArray: true
        });
      }
    });
  };

  render() {
    return (
      <StatusContext.Consumer>
        {({ authenticated }) => (
          <div>
            <h1>Account</h1>
            <Nav />
            {authenticated ? (
              <div>
                <h2>Jouw captions</h2>
                <ol>
                  {this.state.captions.map(caption => (
                    <li>{caption.caption}</li>
                  ))}
                </ol>
              </div>
            ) : (
              <p>Niet ingelogd</p>
            )}
          </div>
        )}
      </StatusContext.Consumer>
    );
  }
}

export default Account;
