import React, { Component } from "react";
import { base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";

class Captions extends Component {
  constructor() {
    super();
    this.state = {
      captions: {}
    };
  }
  handleNewCaptionSubmit = e => {
    e.preventDefault();
    const caption = this.captionInput.value;

    if (caption.trim().length !== 0) {
      base
        .push("captions", {
          data: { caption: caption }
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
      state: "captions"
    });
  };

  render() {
    return (
      <StatusContext.Consumer>
        {({ authenticated }) => (
          <div>
            {Object.entries(this.state.captions).map(caption => (
              <p>{caption[1].caption}</p>
            ))}
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
