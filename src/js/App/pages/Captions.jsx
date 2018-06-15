import React, { Component } from "react";
import { base } from "../config/fire.js";
import Nav from "../components/Nav.jsx";
import Caption from "../components/Caption.jsx";
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
        <div className="captions-wrap">
          <h1 className="captions-h1">Captions</h1>
          <Nav />
        </div>
        <section className="captions-section-instagram">
          <div className="captions-div-instagram">
            <h2 className="captions-h2">#boijmanscaptions</h2>
            <a
              href="https://www.instagram.com/?hl=nl"
              className="captions-a-instagram"
            >
              bekijk meer op <span className="captions-nadruk">instagram</span>
            </a>
          </div>
          <div className="captions-div-instagram-images">
            <img
              src="../assets/img/social-one.jpg"
              alt="Dit is een geshared foto van de stickeractie via sociale media."
              className="captions-div-instagram-img"
            />
            <img
              src="../assets/img/social-two.jpg"
              alt="Dit is een geshared foto van de stickeractie via sociale media."
              className="captions-div-instagram-img"
            />
            <img
              src="../assets/img/social-three.jpg"
              alt="Dit is een geshared foto van de stickeractie via sociale media."
              className="captions-div-instagram-img"
            />
            <img
              src="../assets/img/social-four.jpg"
              alt="Dit is een geshared foto van de stickeractie via sociale media."
              className="captions-div-instagram-img"
            />
          </div>
        </section>
        <div className="captions-div">
          <section className="captions-section">
            <h2 className="captions-h2">Populair deze week</h2>
            <ul className="captions-captions">
              {this.state.captions.map(captions =>
                Object.entries(captions)
                  .slice(0, 1)
                  .map(
                    c =>
                      c[1].caption !== undefined ? (
                        <Caption
                          caption={c[1]}
                          key={c[0]}
                          userName={c[1].userName}
                          likes={c[1].likes >= 0 ? c[1].likes : "0"}
                        />
                      ) : (
                        ""
                      )
                  )
              )}
            </ul>
          </section>
          <section className="captions-section">
            <h2 className="captions-h2">Boijmans keuze</h2>
            <ul className="captions-captions">
              {this.state.captions.map(captions => {
                return Object.entries(captions)
                  .slice(0, 1)
                  .map(c => {
                    return c[1].caption !== undefined ? (
                      <Caption
                        caption={c[1]}
                        key={c[0]}
                        userName={c[1].userName}
                        likes={c[1].likes >= 0 ? c[1].likes : "0"}
                      />
                    ) : (
                      ""
                    );
                  });
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Captions;
