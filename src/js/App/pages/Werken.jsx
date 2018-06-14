import React, { Component } from "react";
import { base } from "../config/fire.js";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import "../css/Werken.css";

class Werken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kunstwerken: [],
      captions: []
    };
  }

  componentDidMount() {
    base.syncState(`kunstwerken`, {
      context: this,
      state: "kunstwerken",
      asArray: true
    });
  }
  render() {
    return (
      <div className="werken-div-background">
        <div className="white-circle werken-circle" />
        <div className="white-circle werken-circle" />
        <h1 className="page-title page-title-werken">Werken</h1>
        <Nav classname="werken-div-nav" />
        <div className="werken-grid">
          <div className="white-circle werken-circle" />
          <div className="white-circle werken-circle" />
          <div className="white-circle werken-circle" />
          <div className="white-circle werken-circle" />
          <div className="white-circle werken-circle" />
          <div className="white-circle werken-circle" />
          <div className="white-circle werken-circle" />
          <div className="white-circle werken-circle" />
          {this.state.kunstwerken.map(kunstwerk => {
            console.log(kunstwerk);
            const kunstenaarVoornaam = kunstwerk.author.split(" ").pop();
            const kunstwerkId = parseInt(kunstwerk.id, 10);
            const aantalCaptions = Object.keys(
              this.state.kunstwerken[kunstwerkId].captions
            ).length;
            return (
              <div
                key={kunstwerk.id}
                className={[
                  "werken-kunstwerk",
                  ["werken-kunstwerk", kunstwerk.id].join("-")
                ].join(" ")}
              >
                <Link
                  className={"kunstwerk-container"}
                  to={{
                    pathname: `/werkdetail/${kunstwerk.id}`,
                    kunstwerk
                  }}
                >
                  <img
                    alt={kunstwerk.author}
                    className={"kunstwerk-img"}
                    src={kunstwerk.img}
                  />
                  <div className="nav-list-item-link">
                    <span className="nav-list-item-link-title">
                      <span
                        className={[
                          "kunstwerk-author-p",
                          "nav-list-item-link-title-inner",
                          ["kunstwerk-author-p", kunstwerk.id].join("-")
                        ].join(" ")}
                        data-hover={kunstenaarVoornaam}
                      >
                        {kunstenaarVoornaam}
                      </span>
                    </span>
                  </div>
                  <p
                    className={[
                      "kunstwerk-captions-amount",
                      ["kunstwerk-captions-amount", kunstwerk.id].join("-")
                    ].join(" ")}
                  >
                    {[
                      aantalCaptions,
                      aantalCaptions === 1 ? " caption" : " captions"
                    ]}
                  </p>
                </Link>
              </div>
            );
          })}
          <div className="werken-nav">
            <span className="werken-nav-span">1/4</span>
            <p className="werken-nav-button werken-nav-button-vorige">Vorige</p>
            <p className="werken-nav-button werken-nav-button-volgende">
              Volgende
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Werken;
