import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { app } from "../config/fire.js";

class Logout extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    app
      .auth()
      .signOut()
      .then(user => {
        this.setState({ redirect: true });
      });
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { referer: "logout" }
          }}
        />
      );
    }
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}

export default Logout;
