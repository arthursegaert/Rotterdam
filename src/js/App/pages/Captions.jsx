import React, { Component } from "react";
import { base } from "../config/fire.js";
import Nav from "../components/Nav.jsx";
import "../css/Captions.css";

class Captions extends Component {
  constructor() {
    super();
    this.state = {
      captions: []
    };
  }

  componentDidMount = () => {
    base.syncState(`captions`, {
      context: this,
      state: "captions",
      asArray: true
    });
  };

  render() {
    return (
      <div className="captions-background">
        <Nav />
        <h1 className="captions-h1">Captions</h1>
        <section>
          <h2 className="captions-h2">#boijmanscaptions</h2>
          <span>bekijk meer op <span className="captions-nadruk">instagram</span></span>
          <div>
            <img src="../assets/img/judd.jpg" alt="Dit is een geshared foto van de stickeractie via sociale media." width="280" height="280"/>
            <img src="../assets/img/judd.jpg" alt="Dit is een geshared foto van de stickeractie via sociale media." width="280" height="280"/>
            <img src="../assets/img/judd.jpg" alt="Dit is een geshared foto van de stickeractie via sociale media." width="280" height="280"/>
            <img src="../assets/img/judd.jpg" alt="Dit is een geshared foto van de stickeractie via sociale media." width="280" height="280"/>
          </div>
        </section>
        <div className="captions-div">
        <section className="captions-section">
        <h2 className="captions-h2">Populair deze week</h2>
        <ul>
          {this.state.captions.map(captions =>
            Object.entries(captions).map(
              c =>
                c[1].caption !== undefined ? (
                  <li key={c[0]}>
                    {c[1].caption} - Posted by {c[1].userName}
                  </li>
                ) : (
                  ""
                )
            )
          )}
        </ul>
        </section>
        <section className="captions-section">
          <h2 className="captions-h2">Boijmans keuze</h2>
          <ul>
          {this.state.captions.map(captions =>
            Object.entries(captions).map(
              c =>
                c[1].caption !== undefined ? (
                  <li key={c[0]}>
                    {c[1].caption} - Posted by {c[1].userName}
                  </li>
                ) : (
                  ""
                )
            )
          )}
        </ul>
        </section>
        </div>
      </div>
    );
  }
}

export default Captions;
