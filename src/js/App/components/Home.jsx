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
          <svg
            class="subtitle"
            xmlns="http://www.w3.org/2000/svg"
            width="549"
            height="33"
            viewbox="0 0 549 33"
          >
            <text
              fill="#FFF"
              fill-opacity="0"
              fill-rule="evenodd"
              stroke="#FFF"
              font-family="ArchivoBlack-Regular, Archivo Black"
              font-size="44"
              font-weight="700"
              transform="translate(-89 -430)"
            >
              <tspan x="87" y="462">
                BOIJMANS PRESENTS:
              </tspan>
            </text>
          </svg>
          <img
            class="header-img"
            src="assets/img/reproduction.jpg"
            alt="reproduction"
            width="2880"
            height="3621"
          />
          <nav>
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
       <h2 class="h2_title">What do you see in artworks?</h2>
       <div class="home_grid">
         <article class="artile-artwork article_one">
           <img src="assets/img/judd.jpg" alt="Dit is een kunstwerk met de naam judd." width="400" height="300" class="black_white"/>
           <p class="article_artist artist_judd">judd</p>
           <span class="article-captions captions_judd">12 captions</span>
         </article>
         <article class="artile-artwork article_two">
           <img src="assets/img/shirley.jpg" alt="Dit is een kunstwerk die noemt Shirley van de kunstenaar Dali." width="340" height="254.6" class="black_white"/>
           <p class="article_artist artist_dali">dali</p>
           <span class="article-captions captions_dali">23 captions</span>
           <span class="background_uitspraken uitspraak_one">f*cking <br/> ugly</span>
         </article>
         <article class="artile-artwork article_three">
           <img src="assets/img/manhole.jpg" alt="Dit is een kunstwerk die noemt Shirley van de kunstenaar Dali." width="288" height="360.1" class="black_white"/>
           <p class="article_artist artist_cattelan">cattelan</p>
           <span class="article-captions captions_cattelan">14 captions</span>
         </article>
         <article class="artile-artwork article_four">
           <img src="assets/img/manhole.jpg" alt="Dit is een kunstwerk die noemt Shirley van de kunstenaar Dali." width="288" height="360.1" class="black_white"/>
           <p class="article_artist artist_gogh">van gogh</p>
           <span class="article-captions captions_gogh">11 captions</span>
           <span class="background_uitspraken uitspraak_two">damn</span>
         </article>
         <p class="captions_button">meer captions</p>
         <p class="werken_button">meer werken</p>
       </div>
       <div class="box_sticker">
         <h2 class="h2_sticker">&#35;boijmanscaptions</h2>
         <ol>
           <li class="li-sticker">
             <p>find a <span class="span-sticker">ticker</span></p>
             <p class="text-sticker">Look around you! We put them everywhere, from beer mats to instagram.</p>
           </li>
           <li class="li-sticker">
             <p>create <span class="span-sticker">art</span></p>
             <p class="text-sticker">... by sticking it on an object that fits the caption.</p>
           </li>
           <li class="li-sticker">
             <p>capture <span class="span-sticker">it</span></p>
             <p class="text-sticker">Take a picture when you found the perfect combination. Make sure you can read the caption.</p>
           </li>
           <li class="li-sticker">
             <p>share <span class="span-sticker">with everyone</span></p>
             <p class="text-sticker">Share in person or digital with the hashtag #boijmanscaptions.</p>
           </li>
           <li class="li-sticker">
             <p>win <span class="span-sticker">cool prizes</span></p>
             <p class="text-sticker">Impress our jury and get a chance to win a bunch of cool prizes. First prize gets exhibition in the renovated museum.</p>
           </li>
           </ol>
         </div>
       </main>
       </body>
    );
  }
}

export default Home;
