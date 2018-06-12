import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Nav from "../components/Nav.jsx";
import Caption from "../components/Caption.jsx";
import { StatusContext } from "../context/statusContext.js";
import { app, base } from "../config/fire.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captions: []
    };
  }

  componentDidMount = () => {
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

  render() {
    return (
      <StatusContext.Consumer>
        {({ authenticated, username }) => (
          <div>
            <header className="header">
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
                    What do you see in artworks? Fantasise about the story in
                    the picture but also behind the picture.
                  </p>
                </div>
                <ol className="intro-list">
                  <li className="intro-list-item1">
                    <h3>Look at the artwork and fantasise …</h3>
                    <img
                      src="assets/img/merry.jpg"
                      alt=""
                      width="746"
                      height="520"
                    />
                  </li>
                  <li className="intro-list-item2">
                    <div className="intro-container">
                      <h3>Write down what you see</h3>
                      <div className="intro-list-item2-form">
                        <form action="">
                          <input type="text" />
                        </form>
                        <div className="item2-form-bottom">
                          <a>Caption this</a>
                          <p>500 characters over</p>
                        </div>
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
                              <p className="main-random-button">
                                ga naar een <br /> willekeurig kunstwerk
                              </p>
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
                                ga naar een <br /> willekeurig kunstwerk
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="intro-list-item3">
                    <h3>Open up for new visions by reading other captions</h3>
                    <div>
                      {this.state.captions.map(caption => (
                        <Caption
                          caption={caption.caption}
                          userName={caption.userName}
                        />
                      ))}
                    </div>
                    <a href="#m" className="main-button" />
                  </li>
                  <li className="intro-list-item4">
                    <h3>Get your caption on a sticker!</h3>
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
                  different <br /> vision
                </li>
                <li className="footer-right">
                  <a className="footer-logo" href="https://www.boijmans.nl">
                    <img
                      data-src="https://static.boijmans.nl/build/images/boijmans-logo-invert.svg"
                      alt="logo boijmans"
                      src="https://static.boijmans.nl/build/images/boijmans-logo-invert.svg"
                    />
                  </a>
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
