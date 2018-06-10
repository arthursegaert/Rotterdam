import React, { Component } from "react";
import { app, facebookProvider } from "../config/fire.js";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";

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
        <main class="two-sec-page">
          <section className="section-left">
            <h1 className="title">Login</h1>
            <form
              onSubmit={e => {
                this.authWithEmailPassword(e);
              }}
              ref={form => {
                this.loginForm = form;
              }}
            >
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                ref={input => {
                  this.emailInput = input;
                }}
                placeholder="email"
              />
              <label className="label">Password</label>
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
            <button onClick={() => this.authWithFacebook()}>
              Login with Facebook
            </button>
            <p>
              Nog geen account?
              <Link to="/register">Register</Link>
            </p>
          </section>
          <section className="section-right">
            <nav>
              <ul class="navigation">
                <li class="nav-item">
                  <Link class="grid__item" to="/">
                    <span class="box__title">
                      <span class="box__title-inner" data-hover="Home">
                        Home
                      </span>
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/captions" class="grid__item">
                    <span class="box__title">
                      <span class="box__title-inner" data-hover="Captions">
                        Captions
                      </span>
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="grid__item" to="/werken">
                    <span class="box__title">
                      <span class="box__title-inner" data-hover="Werken">
                        Werken
                      </span>
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="grid__item" to="/account">
                    <span class="box__title">
                      <span class="box__title-inner" data-hover="Account">
                        Account
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </main>
      );
    }
  }
}

export default Login;
