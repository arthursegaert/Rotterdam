import React, { Component } from "react";
import { app, facebookProvider } from "../config/fire.js";
import { Link, Redirect } from "react-router-dom";

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
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    app
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          //person doesn't have an account
          return alert("You have to register first.");
          //return app.auth().createUserWithEmailAndPassword(email, password);
        } else if (providers.indexOf("password") === -1) {
          //they didn't sign up with email password but with facebook
          this.loginForm.reset();
          return alert("You need to use Facebook to log into your account.");
        } else {
          //sign user in
          return app.auth().signInWithEmailAndPassword(email, password);
        }
      })
      .then(user => {
        if (user) {
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
            <input type="submit" value="Log in" />
          </form>
        </div>
      );
    }
  }
}

export default Login;
