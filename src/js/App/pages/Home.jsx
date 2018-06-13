import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Nav from "../components/Nav.jsx";
import Caption from "../components/Caption.jsx";
import { StatusContext } from "../context/statusContext.js";
import { app, base } from "../config/fire.js";
import Flash from "../components/Flash.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captions: [],
      kunstwerken: []
    };
  }

  componentDidMount = () => {
    base.syncState(`kunstwerken`, {
      context: this,
      state: "kunstwerken",
      asArray: true
    });
    app.auth().onAuthStateChanged(user => {
      if (user) {
        const userid = app.auth().currentUser.uid;
        base.syncState(`captions/${userid}`, {
          context: this,
          state: "captions",
          asArray: true
        });
      }
    });
  };

  getRandomArtWork = () => {
    return (
      Math.floor(
        Math.random() * (parseInt(this.state.kunstwerken.length, 10) - 0 + 1)
      ) + 0
    );
  };

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
        this.captionForm.reset();
      });
  };

  handleSubmitCaption = e => {
    e.preventDefault();
    const caption = this.captionInput.value;
    const kunstwerkId = 12;

    //hebben ze caption ingevuld?
    if (caption.trim().length !== 0) {
      //zijn ze ingelogd of niet?
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
    }
  };

  render() {
    return (
      <StatusContext.Consumer>
        {({ authenticated, username }) => (
          <div>
            {this.checkFlashMessage}
            {this.props.location.state === undefined ? (
              ""
            ) : (
              <Flash flashState={this.props.location.state} />
            )}
            <header className="header">
              <div className="circle-container">
                <div className="white-circle home-circle" />
                <div className="white-circle home-circle" />
                <div className="white-circle home-circle" />
                <div className="white-circle home-circle" />
                <div className="white-circle home-circle" />
              </div>
              <div className="header-wrap">
                <h1 className="header-title">Different Vision</h1>
                <a className="header-subtitle" href="https://www.boijmans.nl">
                  <img
                    data-src="https://static.boijmans.nl/build/images/boijmans-logo-invert.svg"
                    alt="logo boijmans"
                    src="https://static.boijmans.nl/build/images/boijmans-logo-invert.svg"
                  />
                </a>
                <div className="header-img" />
                <Nav />
                <div className="header-account">
                  {authenticated ? (
                    <Link to="/account">
                      <div className="header-account">
                        <svg
                          className="svg-pijl"
                          xmlns="http://www.w3.org/2000/svg"
                          width="54.2px"
                          height="54.3px"
                          viewBox="0 0 54.2 54.3"
                        >
                          <g fill="#EE483C" fillRule="evenodd">
                            <polygon
                              className="st0"
                              points="8.1,2.7 42.6,2.6 43.9,2.6 51.6,2.6 51.6,10.2 51.6,11.5 51.7,46 54.2,46 54.1,0 8.1,0.1 "
                            />
                            <polygon
                              className="st0"
                              points="38.5,10.3 35,10.3 8.1,10.3 8.1,12.9 32.4,12.8 0,45.4 1.8,47.2 36,12.8 "
                            />
                            <polygon
                              className="st0"
                              points="43.9,15.6 41.4,18.2 7.2,52.5 9,54.3 41.4,21.8 41.4,46.1 44,46.1 43.9,19.2 "
                            />
                            <polygon
                              className="st0"
                              points="43.9,12 43.9,10.3 42.1,10.3 39.6,12.8 3.6,49 5.4,50.8 41.4,14.6 "
                            />
                            <polygon
                              className="st0"
                              points="49,10.5 49,7.7 49,5.1 46.5,5.1 43.6,5.1 40.1,5.1 8.1,5.2 8.1,7.8 37.5,7.7 41.1,7.7 44.7,7.7
                46.5,7.7 46.5,9.5 46.5,13.1 46.5,16.6 46.6,46.1 49.1,46.1 49,14.1 "
                            />
                          </g>
                        </svg>
                        {username ? (
                          <p className="header-profile-name">
                            {username.split(" ")[0]}
                          </p>
                        ) : (
                          <p className="header-profile-name">You</p>
                        )}
                        <span className="header-profile-captions">
                          {this.state.captions.length} captions
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div className="header-profile">
                      <svg
                        className="svg-pijl"
                        xmlns="http://www.w3.org/2000/svg"
                        width="54.2px"
                        height="54.3px"
                        viewBox="0 0 54.2 54.3"
                      >
                        <g fill="#EE483C" fillRule="evenodd">
                          <polygon
                            className="st0"
                            points="8.1,2.7 42.6,2.6 43.9,2.6 51.6,2.6 51.6,10.2 51.6,11.5 51.7,46 54.2,46 54.1,0 8.1,0.1 "
                          />
                          <polygon
                            className="st0"
                            points="38.5,10.3 35,10.3 8.1,10.3 8.1,12.9 32.4,12.8 0,45.4 1.8,47.2 36,12.8 "
                          />
                          <polygon
                            className="st0"
                            points="43.9,15.6 41.4,18.2 7.2,52.5 9,54.3 41.4,21.8 41.4,46.1 44,46.1 43.9,19.2 "
                          />
                          <polygon
                            className="st0"
                            points="43.9,12 43.9,10.3 42.1,10.3 39.6,12.8 3.6,49 5.4,50.8 41.4,14.6 "
                          />
                          <polygon
                            className="st0"
                            points="49,10.5 49,7.7 49,5.1 46.5,5.1 43.6,5.1 40.1,5.1 8.1,5.2 8.1,7.8 37.5,7.7 41.1,7.7 44.7,7.7
              46.5,7.7 46.5,9.5 46.5,13.1 46.5,16.6 46.6,46.1 49.1,46.1 49,14.1 "
                          />
                        </g>
                      </svg>
                      <div className="header-profile-line1">
                        <Link to="/login" className="header-profile-login">
                          Login
                        </Link>
                        <span className="header-profile-of">
                          <p>of</p>
                        </span>
                      </div>
                      <Link to="/register" className="header-profile-register">
                        Registreer
                      </Link>
                    </div>
                  )}
                </div>
                <svg
                  className="svg1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="404"
                  height="308"
                  viewBox="0 0 404 308"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="#742DAB"
                    strokeWidth="2"
                    transform="rotate(-90 134.5 173.5)"
                  >
                    <rect width="305" height="401" x="1" y="40" />
                    <path d="M2,41 L307,442 L2,41 Z" />
                    <path
                      d="M-92.7949956,195.691374 L400.794996,285.381888 L-92.7949956,195.691374 Z"
                      transform="rotate(-63 154 240.537)"
                    />
                  </g>
                </svg>
                <svg
                  className="svg2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="300"
                  height="308"
                  viewBox="0 0 196 308"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="#F4442B"
                    strokeWidth="2"
                    transform="rotate(-90 130.5 177.5)"
                  >
                    <rect width="305" height="193" x="1" y="48" />
                    <path d="M2,49 L307,240 L2,49 Z" />
                    <path
                      d="M-23.4926173,112.089874 L329.507383,178.089874 L-23.4926173,112.089874 Z"
                      transform="rotate(-43 153.007 145.09)"
                    />
                  </g>
                </svg>
              </div>
            </header>
            <main className="intro">
              <article>
                <span className="hide">
                  <h2>How it works</h2>
                </span>
                <div className="banner">
                  <p className="banner-text">
                    What do you see in an artwork? What is the story in the
                    picture? Use your imagination !
                  </p>
                </div>
                <ol className="intro-list">
                  <li className="intro-list-item1">
                    <h3>Look at the artwork and fantasise …</h3>
                    <div>
                      <img
                        src="assets/img/merry.jpg"
                        alt=""
                        width="746"
                        height="520"
                      />
                      <svg
                        width="477px"
                        height="276px"
                        viewBox="0 0 477 276"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Home-1440-Copy-3"
                            transform="translate(-902.000000, -1029.000000)"
                            stroke="#F4442B"
                            strokeWidth="2"
                          >
                            <g
                              id="Group-2"
                              transform="translate(1140.500000, 1167.000000) rotate(-360.000000) translate(-1140.500000, -1167.000000) translate(902.000000, 940.000000)"
                            >
                              <rect
                                id="Rectangle-2-Copy-4"
                                x="1"
                                y="90"
                                width="475"
                                height="274"
                              />
                              <path
                                d="M2,90 L476,362 L2,90 Z"
                                id="Path-2-Copy-9"
                              />
                              <path
                                d="M-27,165 L504,289 L-27,165 Z"
                                id="Path-2-Copy-10"
                                transform="translate(238.500000, 227.000000) rotate(-43.000000) translate(-238.500000, -227.000000) "
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </li>
                  <li className="intro-list-item2">
                    <div className="intro-container">
                      <h3>Write down what you see</h3>
                      <div className="intro-list-item2-form">
                        <form
                          ref={form => {
                            this.captionForm = form;
                          }}
                          onSubmit={this.handleSubmitCaption}
                        >
                          <textarea
                            ref={input => {
                              this.captionInput = input;
                            }}
                            className="intro-list-item2-form-textarea"
                          />
                          <div className="item2-form-bottom">
                            <input
                              className="item2-form-button"
                              type="submit"
                              value="caption this"
                            />
                            <p>500 characters over</p>
                          </div>
                        </form>
                      </div>
                      <div className="intro-list-item2-buttons">
                        <div className="main-random main-button">
                          <Link to="/werkdetail/:id">
                            <div className="main-random-color main-button-color">
                              <svg
                                className="main-button-pijl"
                                xmlns="http://www.w3.org/2000/svg"
                                width="54.2px"
                                height="54.3px"
                                viewBox="0 0 54.2 54.3"
                              >
                                <g fill="#EE483C" fillRule="evenodd">
                                  <polygon
                                    className="st0"
                                    points="8.1,2.7 42.6,2.6 43.9,2.6 51.6,2.6 51.6,10.2 51.6,11.5 51.7,46 54.2,46 54.1,0 8.1,0.1 "
                                  />
                                  <polygon
                                    className="st0"
                                    points="38.5,10.3 35,10.3 8.1,10.3 8.1,12.9 32.4,12.8 0,45.4 1.8,47.2 36,12.8 "
                                  />
                                  <polygon
                                    className="st0"
                                    points="43.9,15.6 41.4,18.2 7.2,52.5 9,54.3 41.4,21.8 41.4,46.1 44,46.1 43.9,19.2 "
                                  />
                                  <polygon
                                    className="st0"
                                    points="43.9,12 43.9,10.3 42.1,10.3 39.6,12.8 3.6,49 5.4,50.8 41.4,14.6 "
                                  />
                                  <polygon
                                    className="st0"
                                    points="49,10.5 49,7.7 49,5.1 46.5,5.1 43.6,5.1 40.1,5.1 8.1,5.2 8.1,7.8 37.5,7.7 41.1,7.7 44.7,7.7
                      46.5,7.7 46.5,9.5 46.5,13.1 46.5,16.6 46.6,46.1 49.1,46.1 49,14.1 "
                                  />
                                </g>
                              </svg>
                              <Link
                                className="main-random-button"
                                to={`werkdetail/${this.getRandomArtWork()}`}
                              >
                                ga naar een <br /> willekeurig kunstwerk
                              </Link>
                            </div>
                          </Link>
                        </div>
                        <div className="main-werken main-button">
                          <Link to="/werken">
                            <div className="main-werken-color main-button-color">
                              <svg
                                className="main-button-pijl"
                                xmlns="http://www.w3.org/2000/svg"
                                width="54.2px"
                                height="54.3px"
                                viewBox="0 0 54.2 54.3"
                              >
                                <g fill="#EE483C" fillRule="evenodd">
                                  <polygon
                                    className="st0"
                                    points="8.1,2.7 42.6,2.6 43.9,2.6 51.6,2.6 51.6,10.2 51.6,11.5 51.7,46 54.2,46 54.1,0 8.1,0.1 "
                                  />
                                  <polygon
                                    className="st0"
                                    points="38.5,10.3 35,10.3 8.1,10.3 8.1,12.9 32.4,12.8 0,45.4 1.8,47.2 36,12.8 "
                                  />
                                  <polygon
                                    className="st0"
                                    points="43.9,15.6 41.4,18.2 7.2,52.5 9,54.3 41.4,21.8 41.4,46.1 44,46.1 43.9,19.2 "
                                  />
                                  <polygon
                                    className="st0"
                                    points="43.9,12 43.9,10.3 42.1,10.3 39.6,12.8 3.6,49 5.4,50.8 41.4,14.6 "
                                  />
                                  <polygon
                                    className="st0"
                                    points="49,10.5 49,7.7 49,5.1 46.5,5.1 43.6,5.1 40.1,5.1 8.1,5.2 8.1,7.8 37.5,7.7 41.1,7.7 44.7,7.7
                      46.5,7.7 46.5,9.5 46.5,13.1 46.5,16.6 46.6,46.1 49.1,46.1 49,14.1 "
                                  />
                                </g>
                              </svg>
                              <p className="main-werken-button">
                                ontdek <br /> alle werken
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="intro-list-item3">
                    <h3>Open up for new visions by reading other captions</h3>
                    <div className="item3-captions">
                      {this.state.kunstwerken[12] === undefined ? (
                        <p>Loading...</p>
                      ) : (
                        Object.entries(this.state.kunstwerken[12].captions)
                          .slice(0, 3)
                          .map(caption => {
                            console.log(caption);
                            return (
                              <Caption
                                key={caption[0]}
                                caption={caption[1]}
                                userName={caption[1].userName}
                              />
                            );
                          })
                      )}
                    </div>
                    <div className="main-meer main-button">
                      <Link to="/werkdetail/12">
                        <div className="main-werken-color main-button-color">
                          <svg
                            className="main-button-pijl"
                            xmlns="http://www.w3.org/2000/svg"
                            width="54.2px"
                            height="54.3px"
                            viewBox="0 0 54.2 54.3"
                          >
                            <g fill="#EE483C" fillRule="evenodd">
                              <polygon
                                className="st0"
                                points="8.1,2.7 42.6,2.6 43.9,2.6 51.6,2.6 51.6,10.2 51.6,11.5 51.7,46 54.2,46 54.1,0 8.1,0.1 "
                              />
                              <polygon
                                className="st0"
                                points="38.5,10.3 35,10.3 8.1,10.3 8.1,12.9 32.4,12.8 0,45.4 1.8,47.2 36,12.8 "
                              />
                              <polygon
                                className="st0"
                                points="43.9,15.6 41.4,18.2 7.2,52.5 9,54.3 41.4,21.8 41.4,46.1 44,46.1 43.9,19.2 "
                              />
                              <polygon
                                className="st0"
                                points="43.9,12 43.9,10.3 42.1,10.3 39.6,12.8 3.6,49 5.4,50.8 41.4,14.6 "
                              />
                              <polygon
                                className="st0"
                                points="49,10.5 49,7.7 49,5.1 46.5,5.1 43.6,5.1 40.1,5.1 8.1,5.2 8.1,7.8 37.5,7.7 41.1,7.7 44.7,7.7
                      46.5,7.7 46.5,9.5 46.5,13.1 46.5,16.6 46.6,46.1 49.1,46.1 49,14.1 "
                              />
                            </g>
                          </svg>
                          <p className="main-werken-button">
                            lees <br /> alle captions
                          </p>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="intro-list-item4">
                    <h3>Get your caption on a sticker!</h3>
                    <p className="intro-item4-preview">
                      tetsttetstfstf efesf fesfs
                    </p>
                    <div />
                  </li>
                  <li className="intro-list-item5">
                    <h3>
                      Make art yourself by sticking the caption on a fitting
                      item
                    </h3>
                    <div />
                  </li>
                  <li className="intro-list-item6">
                    <h3>
                      Take a picture of your artwork and share it on the
                      hashtag:
                    </h3>
                    <p>#boijmanscaptions</p>
                  </li>
                  <li className="intro-list-item7">
                    <h3>
                      Get a chance to win a place for your photo at the newely
                      renovated museum boijmans van beuningen
                    </h3>
                  </li>
                </ol>
              </article>
            </main>
            <footer>
              <ul className="footer-ul">
                <li className="footer-left">
                  <a className="footer-logo" href="https://www.boijmans.nl">
                    <img
                      data-src="https://static.boijmans.nl/build/images/boijmans-logo-invert.svg"
                      alt="logo boijmans"
                      src="https://static.boijmans.nl/build/images/boijmans-logo-invert.svg"
                    />
                  </a>
                </li>
                <li className="footer-right">
                  <p>
                    different<br />vision
                  </p>
                </li>
              </ul>
            </footer>
          </div>
        )}
      </StatusContext.Consumer>
    );
  }
}

export default Home;
