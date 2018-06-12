import React, { Component } from "react";
import { app, base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";
import Nav from "../components/Nav.jsx";
import { Link } from "react-router-dom";
import "../css/Account.css";

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
        {({ authenticated }) =>
          authenticated ? (
            <main className="two-sec-page-account">
              <h1 className="page-title page-title-account">Mijn Account</h1>
              <Nav className="account-nav" />
              <section className="section-left section-left-account">
                <h2 className="page-subtitle section-left-subtitle">
                  Mijn informatie
                </h2>
                <form className="section-left-form-account">
                  <label className="section-left-label">E-mail</label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="section-left-input"
                  />
                  <label className="section-left-label">Gebruikersnaam</label>
                  <input
                    required
                    name="username"
                    type="text"
                    className="section-left-input"
                  />
                  <label className="section-left-label">Wachtwoord</label>
                  <input
                    name="password"
                    type="password"
                    className="section-left-input"
                  />
                  <input
                    className="section-left-form-submit"
                    type="submit"
                    value="Save changes"
                  />
                </form>
              </section>
              <section className="section-right section-right-account">
                <h2 className="page-subtitle section-right-subtitle">
                  Mijn captions
                </h2>
                <p className="section-right-account-numberupvotes">
                58 upvotes
              </p>
                <p className="section-right-account-numbercaptions">
                  {this.state.captions.length} captions
                </p>
                <div className="section-right-account-captions">
                {this.state.captions.map(caption => (
                  <article className="caption">
                    <h3 className="caption-content">{caption.caption}</h3>
                      <p className="caption-author">{caption.userName}</p>
                      <a className="caption-link-sticker" href="#">
                        maak de sticker
                      </a>
                      <a className="caption-link-share" href="#">
                        deel
                      </a>
                  </article>
                ))}
                </div>
              </section>
            </main>
          ) : (
            <main className="two-sec-page-account">
              <h1 className="page-title">Mijn Account</h1>
              <Nav />
              <section className="section-left section-left-account section-left-account-not-signed-in">
                <Link
                  className="page-subtitle section-left-subtitle"
                  to="/login"
                >
                  Login
                </Link>
              </section>
              <section className="section-right section-right-account section-right-account-not-signed-in">
                <Link
                  className="page-subtitle section-left-subtitle"
                  to="/register"
                >
                  Registreer
                </Link>
              </section>
            </main>
          )
        }
      </StatusContext.Consumer>
    );
  }
}

export default Account;
