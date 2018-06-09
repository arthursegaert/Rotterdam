import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { app, facebookProvider } from "../config/fire.js";

class Register extends Component {
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
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    app
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          //person doesn't have an account
          //create an account
          return app.auth().createUserWithEmailAndPassword(email, password);
        } else if (providers.indexOf("password") === -1) {
          //they already have an account with facebook
          this.loginForm.reset();
          return alert(
            "You already have an account with Facebook. Please sign in instead."
          );
        } else {
          //user already has an account
          this.loginForm.reset();
          return alert("You already have an account, please sign in.");
        }
      })
      .then(user => {
        if (user && user.email) {
          this.loginForm.reset();
          this.setState({ redirect: true });
        }
      })
      .catch(err => {
        return alert(err.message);
      });
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
          <p>If you don't have an account already:</p>
          <Link to="/register">Register</Link>
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
            <input type="submit" value="Register" />
          </form>
        </div>
      );
    }
  }
}

export default Register;
