import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <body>
        <header class="header">
          <div class="header-wrap">
            <h1 class="title">Different Vision</h1>
            <span class="subtitle">
              boijmans<br />van beuningen
            </span>
            <div class="header-img" />
            <nav class="nav">
              <ul class="navigation">
                <li class="nav-item">
                  <Link class="grid__item" to="/">
                    <span class="box__title">
                      <span class="box__title-inner" data-hover="Home">
                        Home
                      </span>
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/captions" class="grid__item">
                    <span class="box__title">
                      <span class="box__title-inner" data-hover="Captions">
                        Captions
                      </span>
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="grid__item" to="/werken">
                    <span class="box__title">
                      <span class="box__title-inner" data-hover="Werken">
                        Werken
                      </span>
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="grid__item" to="/account">
                    <span class="box__title">
                      <span class="box__title-inner" data-hover="Account">
                        Account
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div class="cta">
              <Link class="cta-link" to="/sticker">
                Sticker action
              </Link>
            </div>
            <svg
              class="svg1"
              xmlns="http://www.w3.org/2000/svg"
              width="404"
              height="308"
              viewbox="0 0 404 308"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#742DAB"
                stroke-width="2"
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
              class="svg2"
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="308"
              viewbox="0 0 196 308"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#F4442B"
                stroke-width="2"
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
        <main>
          <Link to="/account">
            <div class="profile">
              <svg
                class="svg-pijl"
                xmlns="http://www.w3.org/2000/svg"
                width="54.2px"
                height="54.3px"
                viewBox="0 0 54.2 54.3"
              >
                <g fill="#EE483C" fill-rule="evenodd">
                  <polygon
                    class="st0"
                    points="8.1,2.7 42.6,2.6 43.9,2.6 51.6,2.6 51.6,10.2 51.6,11.5 51.7,46 54.2,46 54.1,0 8.1,0.1 "
                  />
                  <polygon
                    class="st0"
                    points="38.5,10.3 35,10.3 8.1,10.3 8.1,12.9 32.4,12.8 0,45.4 1.8,47.2 36,12.8 "
                  />
                  <polygon
                    class="st0"
                    points="43.9,15.6 41.4,18.2 7.2,52.5 9,54.3 41.4,21.8 41.4,46.1 44,46.1 43.9,19.2 "
                  />
                  <polygon
                    class="st0"
                    points="43.9,12 43.9,10.3 42.1,10.3 39.6,12.8 3.6,49 5.4,50.8 41.4,14.6 "
                  />
                  <polygon
                    class="st0"
                    points="49,10.5 49,7.7 49,5.1 46.5,5.1 43.6,5.1 40.1,5.1 8.1,5.2 8.1,7.8 37.5,7.7 41.1,7.7 44.7,7.7
                46.5,7.7 46.5,9.5 46.5,13.1 46.5,16.6 46.6,46.1 49.1,46.1 49,14.1 "
                  />
                </g>
              </svg>
              <p class="profile_name">timmy</p>
              <span class="profile_captions">24 captions</span>
            </div>
          </Link>
          <h2 class="h2_title">What do you see in artworks?</h2>
          <div class="random">
            <Link to="/werkdetail/:id">
              <div class="random-color">
                <svg
                  class="pijl-random"
                  xmlns="http://www.w3.org/2000/svg"
                  width="54.2px"
                  height="54.3px"
                  viewBox="0 0 54.2 54.3"
                >
                  <g fill="#EE483C" fill-rule="evenodd">
                    <polygon
                      class="st0"
                      points="8.1,2.7 42.6,2.6 43.9,2.6 51.6,2.6 51.6,10.2 51.6,11.5 51.7,46 54.2,46 54.1,0 8.1,0.1 "
                    />
                    <polygon
                      class="st0"
                      points="38.5,10.3 35,10.3 8.1,10.3 8.1,12.9 32.4,12.8 0,45.4 1.8,47.2 36,12.8 "
                    />
                    <polygon
                      class="st0"
                      points="43.9,15.6 41.4,18.2 7.2,52.5 9,54.3 41.4,21.8 41.4,46.1 44,46.1 43.9,19.2 "
                    />
                    <polygon
                      class="st0"
                      points="43.9,12 43.9,10.3 42.1,10.3 39.6,12.8 3.6,49 5.4,50.8 41.4,14.6 "
                    />
                    <polygon
                      class="st0"
                      points="49,10.5 49,7.7 49,5.1 46.5,5.1 43.6,5.1 40.1,5.1 8.1,5.2 8.1,7.8 37.5,7.7 41.1,7.7 44.7,7.7
                46.5,7.7 46.5,9.5 46.5,13.1 46.5,16.6 46.6,46.1 49.1,46.1 49,14.1 "
                    />
                  </g>
                </svg>
                <p class="button-random">
                  ga naar een <br /> willekeurig kunstwerk
                </p>
              </div>
            </Link>
          </div>
          <div class="home_grid">
            <article class="artile-artwork article_one">
              <img
                src="assets/img/judd.jpg"
                alt="Dit is een kunstwerk met de naam judd."
                width="400"
                height="300"
                class="black_white"
              />
              <p class="article_artist artist_judd">judd</p>
              <span class="article-captions captions_judd">12 captions</span>
            </article>
            <article class="artile-artwork article_two">
              <img
                src="assets/img/shirley.jpg"
                alt="Dit is een kunstwerk die noemt Shirley van de kunstenaar Dali."
                width="340"
                height="254.6"
                class="black_white"
              />
              <p class="article_artist artist_dali">dali</p>
              <span class="article-captions captions_dali">23 captions</span>
              <span class="background_uitspraken uitspraak_one">
                f*cking <br /> ugly
              </span>
            </article>
            <article class="artile-artwork article_three">
              <img
                src="assets/img/manhole.jpg"
                alt="Dit is een kunstwerk die noemt Shirley van de kunstenaar Dali."
                width="288"
                height="360.1"
                class="black_white"
              />
              <p class="article_artist artist_cattelan">cattelan</p>
              <span class="article-captions captions_cattelan">
                14 captions
              </span>
            </article>
            <article class="artile-artwork article_four">
              <img
                src="assets/img/manhole.jpg"
                alt="Dit is een kunstwerk die noemt Shirley van de kunstenaar Dali."
                width="288"
                height="360.1"
                class="black_white"
              />
              <p class="article_artist artist_gogh">van gogh</p>
              <span class="article-captions captions_gogh">11 captions</span>
              <span class="background_uitspraken uitspraak_two">damn</span>
            </article>
            <Link to="/captions" class="captions_button">
              meer captions
            </Link>
            <Link to="/werken" class="werken_button">
              meer werken
            </Link>
          </div>
          <div class="box_sticker">
            <h2 class="h2_sticker">&#35;boijmanscaptions</h2>
            <ol>
              <li class="li-sticker">
                <p>
                  find a <span class="span-sticker">ticker</span>
                </p>
                <p class="text-sticker">
                  Look around you! We put them everywhere, from beer mats to
                  instagram.
                </p>
              </li>
              <li class="li-sticker">
                <p>
                  create <span class="span-sticker">art</span>
                </p>
                <p class="text-sticker">
                  ... by sticking it on an object that fits the caption.
                </p>
              </li>
              <li class="li-sticker">
                <p>
                  capture <span class="span-sticker">it</span>
                </p>
                <p class="text-sticker">
                  Take a picture when you found the perfect combination. Make
                  sure you can read the caption.
                </p>
              </li>
              <li class="li-sticker">
                <p>
                  share <span class="span-sticker">with everyone</span>
                </p>
                <p class="text-sticker">
                  Share in person or digital with the hashtag #boijmanscaptions.
                </p>
              </li>
              <li class="li-sticker">
                <p>
                  win <span class="span-sticker">cool prizes</span>
                </p>
                <p class="text-sticker">
                  Impress our jury and get a chance to win a bunch of cool
                  prizes. First prize gets exhibition in the renovated museum.
                </p>
              </li>
            </ol>
          </div>
        </main>
        <footer>
          <ul class="footer_ul">
            <li class="footer_left">
              different <br /> vision
            </li>
            <li class="footer_right">
              presented by museum<br /> boijmans van beuningen
            </li>
          </ul>
        </footer>
      </body>
    );
  }
}

export default Home;
