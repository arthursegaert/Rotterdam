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
      <div>
        <Nav />
        <ul>
          {this.state.captions.map(captions =>
            Object.entries(captions).map(
              c =>
                c[1].caption !== undefined ? (
                  <li>
                    {c[1].caption} - Posted by {c[1].userName}
                  </li>
                ) : (
                  ""
                )
            )
          )}
        </ul>
      </div>
    );
  }
}

export default Captions;
