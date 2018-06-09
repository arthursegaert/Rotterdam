import React, { Component } from "react";
import { app, base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";

class Captions extends Component {
  constructor() {
    super();
    this.state = {
      captions: []
    };
  }
  handleNewCaptionSubmit = e => {
    e.preventDefault();
    const caption = this.captionInput.value;
    const user = app.auth().currentUser.displayName;
    const userid = app.auth().currentUser.uid;

    if (caption.trim().length !== 0) {
      base
        .push(`captions/${userid}`, {
          data: { caption: caption, userName: user }
        })
        .then(() => {
          this.captionForm.reset();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  componentDidMount = () => {
    base.syncState(`captions`, {
      context: this,
      state: "captions",
      asArray: true
    });
  };

  render() {
    return (
      <StatusContext.Consumer>
        {({ authenticated }) => (
          <div>
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
            {authenticated ? (
              <form
                ref={form => {
                  this.captionForm = form;
                }}
                onSubmit={this.handleNewCaptionSubmit}
              >
                <input
                  ref={input => {
                    this.captionInput = input;
                  }}
                />
                <button>Voeg een caption toe</button>
              </form>
            ) : (
              <p>Je moet inloggen om een caption te schrijven</p>
            )}
          </div>
        )}
      </StatusContext.Consumer>
    );
  }
}

export default Captions;
