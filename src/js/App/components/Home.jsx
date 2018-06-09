import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
                <a class="grid__item" href="#preview-1">
                  <span class="box__title">
                    <span class="box__title-inner" data-hover="Home">
                      Home
                    </span>
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="grid__item" href="#preview-1">
                  <span class="box__title">
                    <span class="box__title-inner" data-hover="Captions">
                      Captions
                    </span>
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="grid__item" href="#preview-1">
                  <span class="box__title">
                    <span class="box__title-inner" data-hover="#Stick-it">
                      #Stick-it
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="cta">
            <a class="cta-link" href="#">
              Sticker action
            </a>
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
    );
  }
}

export default Home;
