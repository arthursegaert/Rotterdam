import React, { Component } from "react";
import { app, facebookProvider } from "../config/fire.js";
import { Link, Redirect } from "react-router-dom";
import "../css/Login.css";
import Nav from "../components/Nav.jsx";
import KunstwerkCTA from "../components/KunstwerkCTA.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ redirect: true });
      }
    });
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
      return (
        <div>
          <Redirect
            to={{
              pathname: "/",
              state: { referer: "login" }
            }}
          />) />
        </div>
      );
    } else {
      return (
        <main className="two-sec-page">
          <h1 className="page-title page-title-login">Login</h1>
          <div className="white-circle login-circle" />
          <div className="white-circle login-circle" />
          <div className="white-circle login-circle" />
          <div className="white-circle login-circle" />
          <div className="white-circle login-circle" />
          <section className="section-left section-left-login">
            <form
              onSubmit={e => {
                this.authWithEmailPassword(e);
              }}
              ref={form => {
                this.loginForm = form;
              }}
              className="section-left-form-login"
            >
              <label className="section-left-label">E-mail</label>
              <input
                name="email"
                type="email"
                ref={input => {
                  this.emailInput = input;
                }}
                className="section-left-input"
              />
              <label className="section-left-label">Wachtwoord</label>
              <input
                name="password"
                type="password"
                ref={input => {
                  this.passwordInput = input;
                }}
                className="section-left-input"
              />
              <input
                className="section-left-form-submit"
                type="submit"
                value="Log in"
              />
              <button
                className="section-left-form-fb"
                type="button"
                onClick={() => this.authWithFacebook()}
              >
                Login via Facebook
              </button>
            </form>
            <p className="section-left-button">
              Nog geen account?
              <Link className="section-left-button-link" to="/register">
                Registreer!
              </Link>
            </p>
          </section>
          <section className="section-right section-right-login">
            <Nav />
            <KunstwerkCTA
              kunstwerkId="1"
              color="#7333a8"
              classname="section-right-link"
            />
          </section>
        </main>
      );
    }
  }
}

export default Login;
