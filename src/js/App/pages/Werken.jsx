import React, { Component } from "react";
import { base } from "../config/fire.js";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import "../css/Werken.css";

class Werken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kunstwerken: []
    };
  }

  componentDidMount() {
    base.syncState(`kunstwerken`, {
      context: this,
      state: "kunstwerken"
    });
  }
  render() {
    return (
      <div className="werken-div-background">
        <Nav />
        <div className="werken-grid">
        {this.state.kunstwerken.map(kunstwerk => {
          return (
            <div key={kunstwerk.id} className= {["werken-kunstwerk",["werken-kunstwerk", kunstwerk.id].join('-')].join(' ')}>
              <p className= {["kunstwerk-author-p",["kunstwerk-author-p", kunstwerk.id].join('-')].join(' ')}>{kunstwerk.author.split(" ").pop()}</p>
              <Link
                to={{
                  pathname: `/werkdetail/${kunstwerk.id}`,
                  kunstwerk
                }}
              >
                <img
                alt={kunstwerk.author}
                className= {["kunstwerk-img", kunstwerk.id].join('-')}
                src={kunstwerk.img}
              />
              </Link>
            </div>
          );
        })}
        <div className="werken-nav">
        <p className="werken-nav-button werken-nav-button-vorige">Vorige</p>
        <span className="werken-nav-span">1/4</span>
        <p className="werken-nav-button werken-nav-button-volgende">Volgende</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Werken;
