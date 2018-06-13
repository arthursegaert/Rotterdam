import React, { Component } from "react";
import { app, base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";
import Nav from "../components/Nav.jsx";
import Caption from "../components/Caption.jsx";
import Loading from "../components/Loading.jsx";
import Flash from "../components/Flash.jsx";
import "../css/WerkDetail.css";
import { Link } from "react-router-dom";

class WerkDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: false,
      kunstwerken: [],
      captions: [],
      loading: true,
      showSuccessFlash: false,
      showErrorFlash: false
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

  postToDatabase = (user, userid, caption, kunstwerkId) => {
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
        this.setState({
          showSuccessFlash: true
        });
        setTimeout(() => {
          this.setState({
            showSuccessFlash: false
          });
        }, 2000);
      })
      .then(() => {
        this.captionForm.reset();
      });
  };

  handleNewCaptionSubmit = e => {
    e.preventDefault();
    const caption = this.captionInput.value;
    const kunstwerkId = parseInt(this.props.match.params.id, 10);

    if (caption.trim().length !== 0) {
      app.auth().onAuthStateChanged(user => {
        if (user) {
          const user = app.auth().currentUser.displayName;
          const userid = app.auth().currentUser.uid;
          this.postToDatabase(user, userid, caption, kunstwerkId);
        } else {
          const user = "unknown";
          const userid = "unknownUsers";
          this.postToDatabase(user, userid, caption, kunstwerkId);
        }
      });
    } else {
      this.setState({
        showErrorFlash: true
      });
      setTimeout(() => {
        this.setState({
          showErrorFlash: false
        });
      }, 2000);
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      const kunstwerkId = parseInt(this.props.match.params.id, 10);
      const result = this.state.kunstwerken.filter(
        kunstwerk => kunstwerk.id === kunstwerkId
      )[0];

      if (this.state.match) {
        return (
          <div>
            {this.state.showSuccessFlash ? (
              <Flash flashState={{ referer: "addCaption" }} />
            ) : (
              ""
            )}
            {this.state.showErrorFlash ? (
              <Flash flashState={{ referer: "addEmptyCaption" }} />
            ) : (
              ""
            )}
            <main className="werkdetail-main">
              <StatusContext.Consumer>
                {({ authenticated }) => (
                  <section className="werkdetail-section">
                    <div className="white-circle werkdetail-circle" />
                    <div className="white-circle werkdetail-circle" />
                    <div className="white-circle werkdetail-circle" />
                    <Nav classname="werkdetail-nav" />
                    <article className="werkdetail-article">
                      <a
                        href={result.link}
                        className="werkdetail-article-info-a"
                      >
                        <div className="werkdetail-article-info">
                          <span className="werkdetail-article-info-span">
                            i
                          </span>
                          <p className="werkdetail-article-info-p">
                            meer over het werk
                          </p>
                        </div>
                      </a>
                      <div className="werkdetail-article-zoom">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50.1px"
                          height="50.1px"
                          viewBox="0 0 100 100"
                          className="svg-zoom"
                        >
                          <defs />
                          <polygon points="97.9,61.8 97.9,90.5 97.9,91.6 97.9,98 91.6,98 90.5,98 61.8,98 61.8,100.1 100.1,100.1 100.1,61.8 " />
                          <polygon points="91.6,87.1 91.6,84.2 91.6,61.8 89.4,61.8 89.4,82 62.4,55 61,56.5 89.4,85 " />
                          <polygon points="87.1,91.6 85,89.5 56.5,61 55,62.5 82,89.5 61.8,89.5 61.8,91.6 84.1,91.6 " />
                          <polygon points="90.1,91.6 91.6,91.6 91.6,90.1 89.4,88 59.5,58 58,59.5 88,89.5 " />
                          <polygon
                            points="91.4,95.8 93.7,95.8 95.8,95.8 95.8,93.7 95.8,91.4 95.8,88.4 95.8,61.8 93.7,61.8 93.7,86.3
	93.7,89.3 93.7,92.2 93.7,93.7 92.2,93.7 89.2,93.7 86.3,93.7 61.8,93.7 61.8,95.8 88.4,95.8 "
                          />
                          <polygon points="38.4,97.9 9.7,97.9 8.6,98 2.2,98 2.2,91.6 2.2,90.5 2.1,61.8 0,61.8 0.1,100.1 38.4,100 " />
                          <polygon points="13.1,91.6 16,91.6 38.4,91.5 38.3,89.4 18.1,89.4 45.1,62.3 43.6,60.9 15.2,89.4 " />
                          <polygon points="8.6,87.1 10.7,85 39.1,56.4 37.6,54.9 10.7,82 10.6,61.8 8.5,61.8 8.6,84.1 " />
                          <polygon points="8.6,90.1 8.6,91.6 10.1,91.6 12.2,89.4 42.1,59.4 40.6,57.9 10.7,88 " />
                          <polygon
                            points="4.3,91.4 4.3,93.7 4.3,95.8 6.5,95.8 8.8,95.8 11.8,95.8 38.4,95.7 38.4,93.6 13.9,93.7 10.9,93.7
	8,93.7 6.5,93.7 6.5,92.2 6.5,89.2 6.4,86.3 6.4,61.8 4.3,61.8 4.3,88.4 "
                          />
                          <polygon points="2.2,38.3 2.2,9.6 2.2,8.5 2.2,2.1 8.6,2.1 9.7,2.1 38.4,2.2 38.4,0.1 0.1,0 0,38.3 " />
                          <polygon points="8.6,13 8.6,16 8.5,38.3 10.7,38.3 10.7,18.1 37.7,45.2 39.1,43.7 10.7,15.1 " />
                          <polygon points="13.1,8.5 15.2,10.7 43.6,39.2 45.1,37.7 18.2,10.7 38.4,10.7 38.4,8.6 16,8.5 " />
                          <polygon points="10.1,8.5 8.6,8.5 8.6,10 10.7,12.1 40.6,42.2 42.1,40.7 12.2,10.7 " />
                          <polygon
                            points="8.8,4.3 6.5,4.3 4.4,4.3 4.4,6.4 4.4,8.7 4.3,11.7 4.3,38.3 6.4,38.3 6.5,13.8 6.5,10.9 6.5,7.9
	6.5,6.4 8,6.4 11,6.4 13.9,6.4 38.4,6.5 38.4,4.3 11.8,4.3 "
                          />
                          <polygon points="61.8,2.4 90.5,2.4 91.6,2.4 98,2.4 98,8.7 98,9.8 98,38.5 100.1,38.5 100.1,0.2 61.8,0.2 " />
                          <polygon points="87.1,8.7 84.1,8.7 61.8,8.8 61.8,10.9 82,10.9 55,37.9 56.5,39.4 85,10.9 " />
                          <polygon points="91.6,13.2 89.5,15.3 61,43.8 62.5,45.3 89.5,18.3 89.5,38.5 91.6,38.5 91.6,16.2 " />
                          <polygon points="91.6,10.2 91.6,8.7 90.1,8.7 88,10.9 58,40.9 59.5,42.3 89.5,12.4 " />
                          <polygon
                            points="95.8,8.9 95.8,6.6 95.8,4.5 93.7,4.5 91.4,4.5 88.4,4.5 61.8,4.5 61.8,6.6 86.3,6.6 89.2,6.6 92.2,6.6
	93.7,6.6 93.7,8.1 93.7,11.1 93.7,14.1 93.7,38.5 95.9,38.5 95.8,11.9 "
                          />
                        </svg>
                      </div>
                      <img
                        alt={result.desc}
                        src={["../", result.img].join("")}
                        className="werkdetail-result"
                      />
                      <div className="werkdetail-werken-nav">
                        <span className="werkdetail-werken-nav-span">
                          {kunstwerkId + 1}/16
                        </span>
                        <Link
                          className="werkdetail-werken-nav-button werkendetail-nav-button-vorige"
                          to={kunstwerkId > 0 ? `${kunstwerkId - 1}` : `${0}`}
                        >
                          vorige
                        </Link>
                        <Link
                          className="werkdetail-werken-nav-button werkendetail-nav-button-volgende"
                          to={
                            kunstwerkId >= 15 ? `${15}` : `${kunstwerkId + 1}`
                          }
                        >
                          volgende
                        </Link>
                      </div>
                    </article>
                    <article className="werkdetail-article-captions">
                      <h2 className="werkdetail-article-captions-h2">
                        Captions
                      </h2>
                      <div className="werkdetail-captions">
                        {/*check of er captions zijn voor het kunstwerk*/}
                        {result.captions ? (
                          Object.entries(result.captions).map(captions => {
                            const captionId = captions[0];
                            return Object.entries(captions).map(
                              c =>
                                //is de caption niet undefined?
                                c[1].caption !== undefined ? (
                                  <Caption
                                    caption={c[1].caption}
                                    captionId={captionId}
                                    key={c[0]}
                                    userName={c[1].userName}
                                    likes={c[1].likes >= 0 ? c[1].likes : "0"}
                                    kunstwerkId={kunstwerkId}
                                  />
                                ) : (
                                  //as het undefined is, toon niks:
                                  ""
                                )
                            );
                          })
                        ) : (
                          //als er nog geen captions zijn:
                          <p>Dit werk heeft nog geen captions</p>
                        )}
                      </div>
                      {/* is de gebruiker ingelogt?*/}
                      {authenticated ? (
                        ""
                      ) : (
                        <p>Bij registratie kan je jouw captions bijhouden</p>
                      )}
                      <form
                        ref={form => {
                          this.captionForm = form;
                        }}
                        onSubmit={this.handleNewCaptionSubmit}
                        className="caption-add-form"
                      >
                        <textarea
                          className="work-detail-add-caption"
                          ref={input => {
                            this.captionInput = input;
                          }}
                          placeholder="wat zie je?"
                        />
                        <input
                          className="section-left-form-submit caption-add-submit"
                          type="submit"
                          value="caption-it!"
                        />
                      </form>
                    </article>
                  </section>
                )}
              </StatusContext.Consumer>
            </main>
          </div>
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
