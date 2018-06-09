import React, { Component } from "react";
import { app, base } from "../config/fire.js";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captions: []
    };
  }

  componentDidMount = () => {
    const userid = app.auth().currentUser.uid;
    base.syncState(`captions/${userid}`, {
      context: this,
      state: "captions",
      asArray: true
    });
  };

  render() {
    return (
      <div>
        <h1>Account</h1>
        <h2>Jouw captions</h2>
        <ol>
          {this.state.captions.map(caption => <li>{caption.caption}</li>)}
        </ol>
      </div>
    );
  }
}

export default Account;
