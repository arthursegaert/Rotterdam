import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { app, facebookProvider } from "../config/fire.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  authWithFacebook = () => {
    app
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result, error) => {
        if (error) {
          return <p>Unable to sign in with Facebook.</p>;
        } else {
          this.setState({ redirect: true });
        }
      });
  };

  authWithEmailPassword = e => {
    e.preventDefault(); //no refresh
    console.log("auth with email");
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <button onClick={() => this.authWithFacebook()}>
            Login with Facebook
          </button>
          <p>If you don't have an account already, this form will create one</p>
          <form
            onSubmit={e => {
              this.authWithEmailPassword(e);
            }}
            ref={form => {
              this.loginForm = form;
            }}
          >
            <label>Email</label>
            <input
              name="email"
              type="email"
              ref={input => {
                this.emailInput = input;
              }}
              placeholder="email"
            />
            <label>Password</label>
            <input
              name="password"
              type="password"
              ref={input => {
                this.passwordInput = input;
              }}
              placeholder="password"
            />
            <input type="submit" />
          </form>
        </div>
      );
    }
  }
}

export default Login;
