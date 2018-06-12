import React, { Component } from "react";
import { app, base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";
import Nav from "../components/Nav.jsx";
import "../css/WerkDetail.css";

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
          <main className="werkdetail-main">
          <StatusContext.Consumer>
            {({ authenticated }) => (
                <section className="werkdetail-section">
                <Nav />
                <article className="werkdetail-article">
               <img
                alt={result.desc}
                src={["../", result.img].join('')}
                className= "werkdetail-result"
               />
               <p>{result.link}Hier moet de link komen</p>
               <div className= "werkdetail-werken-nav">
                <p className= "werkdetail-werken-nav-button werkendetail-nav-button-vorige">vorige</p>
                <span className="werkdetail-werken-nav-span">2/16</span>
                <p className= "werkdetail-werken-nav-button werkendetail-nav-button-volgende">volgende</p>
               </div>
               </article>
               <article className="werkdetail-article-captions">
                <h2 className="werkdetail-article-captions-h2">Captions</h2>
                <ul>
                  {/*check of er captions zijn voor het kunstwerk*/}
                  {result.captions ? (
                    Object.entries(result.captions).map(captions =>
                      Object.entries(captions).map(
                        c =>
                          //is de caption niet undefined?
                          c[1].caption !== undefined ? (
                            <li key={c[0]} className="werkdetail-article-captions-li">
                              <span>{c[1].caption}</span>
                              {/*check of het werk likes heeft*/}
                              {c[1].likes >= 0 ? (
                                <div className="werkdetail-article-captions-li-div">
                                  <span>{c[1].userName}</span>
                                  <span>{c[1].likes} likes</span>
                                  <div>
                                  <button
                                    onClick={() => this.handleClickLike(c[1])}
                                  >
                                    like this!
                                  </button>
                                  </div>
                                </div>
                              ) : (
                                //als het werk geen likes heeft
                                <div className="werkdetail-article-captions-li-div">
                                  <span className="werkdetail-article-captions-li-div-user">{c[1].userName}</span>
                                  <div>
                                  <span>0 likes - wees de eerste!</span>
                                  <button
                                    onClick={() => this.handleClickLike(c[1])}
                                  >
                                    like this!
                                  </button>
                                  </div>
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
                </article>
                </section>
            )}
          </StatusContext.Consumer>
        </main>);
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
