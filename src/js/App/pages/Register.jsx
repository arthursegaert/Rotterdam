import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { app, facebookProvider } from "../config/fire.js";
import "../css/Register.css";
import Nav from "../components/Nav.jsx";
import KunstwerkCTA from "../components/KunstwerkCTA.jsx";

class Register extends Component {
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
    const username = this.usernameInput.value;
    let user = null;
    app
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          //person doesn't have an account
          //create an account
          return app
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              user = app.auth().currentUser;
            })
            .then(() => {
              user.updateProfile({
                displayName: username
              });
            })
            .then(() => {
              this.loginForm.reset();
              this.setState({ redirect: true });
            })
            .catch(error => {
              console.log(error.message);
            });
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
      .catch(err => {
        return alert(err.message);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <main className="two-sec-page">
          <div className="white-circle registreer-circle" />
          <div className="white-circle registreer-circle" />
          <div className="white-circle registreer-circle" />
          <div className="white-circle registreer-circle" />
          <div className="white-circle registreer-circle" />
          <section className="section-left section-left-register">
            <h1 className="page-title section-left-title">Registreer</h1>
            <form
              onSubmit={e => {
                this.authWithEmailPassword(e);
              }}
              ref={form => {
                this.loginForm = form;
              }}
              className="section-left-form-register"
            >
              <label className="section-left-label">E-mail</label>
              <input
                required
                name="email"
                type="email"
                ref={input => {
                  this.emailInput = input;
                }}
                className="section-left-input"
              />
              <label className="section-left-label">Gebruikersnaam</label>
              <input
                required
                name="username"
                type="text"
                ref={input => {
                  this.usernameInput = input;
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
                value="Registreer"
              />
              <button
                type="button"
                className="section-left-form-fb"
                onClick={() => this.authWithFacebook()}
              >
                Registreer via Facebook
              </button>
            </form>
            <p className="section-left-button">
              Al een account?
              <Link className="section-left-button-link" to="/login">
                Log in!
              </Link>
            </p>
          </section>
          <section className="section-right section-right-register">
            <Nav />
            <KunstwerkCTA kunstwerkId="1" color="#7333a8" />
          </section>
        </main>
      );
    }
  }
}

export default Register;
