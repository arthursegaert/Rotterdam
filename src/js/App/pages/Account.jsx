import React, { Component } from "react";
import { app, base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";
import Nav from "../components/Nav.jsx";
import { Link } from "react-router-dom";

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
            <Nav />
            <h2>Account</h2>
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
              <div>
                <p>Niet ingelogd</p>
                <Link to="/login">Login</Link>
                <Link to="/register">Registreer</Link>
              </div>
            )}
          </div>
        )}
      </StatusContext.Consumer>
    );
  }
}

export default Account;
