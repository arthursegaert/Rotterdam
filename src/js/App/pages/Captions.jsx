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
        <Nav />
        <section className="captions-section-instagram">
          <h1 className="captions-h1">Captions</h1>
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
              src="../assets/img/judd.jpg"
              alt="Dit is een geshared foto van de stickeractie via sociale media."
              className="captions-div-instagram-img"
            />
            <img
              src="../assets/img/judd.jpg"
              alt="Dit is een geshared foto van de stickeractie via sociale media."
              className="captions-div-instagram-img"
            />
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
                      <Caption
                        caption={c[1].caption}
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
            <ul>
              {this.state.captions.map(captions => {
                console.log(captions);
                return Object.entries(captions).map(c => {
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
