import React, { Component } from "react";
import { app, base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";

class WerkDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: false,
      kunstwerken: [],
      captions: [],
      loading: true
    };
  }
  componentDidMount() {
    base.syncState(`captions`, {
      context: this,
      state: "captions",
      asArray: true
    });
    base.syncState(`kunstwerken`, {
      context: this,
      state: "kunstwerken",
      asArray: true
    });
    base
      .fetch("kunstwerken", {
        context: this,
        asArray: true
      })
      .then(data => {
        if (data[parseInt(this.props.match.params.id, 10)]) {
          this.setState({ match: true, loading: false });
        } else {
          this.setState({ match: false, loading: false });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleNewCaptionSubmit = e => {
    e.preventDefault();
    const caption = this.captionInput.value;
    const user = app.auth().currentUser.displayName;
    const userid = app.auth().currentUser.uid;
    const kunstwerkId = parseInt(this.props.match.params.id, 10);

    if (caption.trim().length !== 0) {
      base
        .push(`kunstwerken/${kunstwerkId}/captions`, {
          data: {
            caption: caption,
            userName: user,
            userid: userid,
            kunstwerkId: kunstwerkId
          }
        })
        .then(() => {
          base.push(`captions/${userid}`, {
            data: {
              caption: caption,
              userName: user,
              userid: userid,
              kunstwerkId: kunstwerkId
            }
          });
        })
        .then(() => {
          this.captionForm.reset();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    } else {
      const kunstwerkId = parseInt(this.props.match.params.id, 10);

      const result = this.state.kunstwerken.filter(
        kunstwerk => kunstwerk.id === kunstwerkId
      )[0];

      if (this.state.match) {
        return (
          <StatusContext.Consumer>
            {({ authenticated }) => (
              <div>
                <h1>{result.title}</h1>
                <p>{result.author}</p>
                <p>{result.date}</p>
                <p>{result.desc}</p>
                <p>{result.img}</p>
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
                  <div>
                    <p>Schrijf hier jouw caption:</p>
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
                      <input type="submit" value="voeg jouw caption toe" />
                    </form>
                  </div>
                ) : (
                  <p>Je moet ingelogd zijn om een caption te schrijven</p>
                )}
              </div>
            )}
          </StatusContext.Consumer>
        );
      }
      return (
        <div>
          <p>No match</p>
        </div>
      );
    }
  }
}

export default WerkDetail;
