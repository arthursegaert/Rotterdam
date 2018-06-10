import React, { Component } from "react";
import { app, base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";
import Nav from "./Nav.jsx";

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

  handleClickLike = c => {
    const kunstwerkId = c.kunstwerkId;
    const caption = c.caption;
    const userName = c.userName;
    console.log(kunstwerkId, caption, userName);
  };

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
                <Nav />
                <h1>{result.title}</h1>
                <p>{result.author}</p>
                <p>{result.date}</p>
                <p>{result.desc}</p>
                <p>{result.img}</p>
                <h2>Captions bij dit kunstwerk:</h2>
                <ul>
                  {/*check of er captions zijn voor het kunstwerk*/}
                  {result.captions ? (
                    Object.entries(result.captions).map(captions =>
                      Object.entries(captions).map(
                        c =>
                          //is de caption niet undefined?
                          c[1].caption !== undefined ? (
                            <li>
                              <span>
                                {c[1].caption} - Posted by {c[1].userName}
                              </span>
                              {/*check of het werk likes heeft*/}
                              {c[1].likes >= 0 ? (
                                <div>
                                  <span>{c[1].likes} likes</span>
                                  <button
                                    onClick={() => this.handleClickLike(c[1])}
                                  >
                                    like this!
                                  </button>
                                </div>
                              ) : (
                                //als het werk geen likes heeft
                                <div>
                                  <span>0 likes - wees de eerste!</span>
                                  <button
                                    onClick={() => this.handleClickLike(c[1])}
                                  >
                                    like this!
                                  </button>
                                </div>
                              )}
                            </li>
                          ) : (
                            //as het undefined is, toon niks:
                            ""
                          )
                      )
                    )
                  ) : (
                    //als er nog geen captions zijn:
                    <p>Dit werk heeft nog geen captions</p>
                  )}
                </ul>
                {/* is de gebruiker ingelogt?*/}
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
                  //als de gebruiker niet is ingelogd
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
