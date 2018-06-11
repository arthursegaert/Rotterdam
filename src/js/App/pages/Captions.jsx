import React, { Component } from "react";
import { base } from "../config/fire.js";
import Nav from "../components/Nav.jsx";

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
      <div className="captions">
        <h1>Captions</h1>
        <Nav />
        <section>
          <h2>#boijmanscaptions</h2>
        </section>
        <section>
        <h2>Populair deze week</h2>
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
        <section>
          <h2>Boijmans keuze</h2>
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
    );
  }
}

export default Captions;
