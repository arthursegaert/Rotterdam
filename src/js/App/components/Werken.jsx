import React, { Component } from "react";
import { base } from "../config/fire.js";
import { Link } from "react-router-dom";

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
      <div>
        {this.state.kunstwerken.map(kunstwerk => {
          return (
            <div key={kunstwerk.id} className="kunstwerk">
              <p>{kunstwerk.title}</p>
              <p>{kunstwerk.author}</p>
              <img
                alt={kunstwerk.desc}
                className="kunstwerk-img"
                src={kunstwerk.img}
                width="1000"
                height="1000"
              />
              <Link
                to={{
                  pathname: `/werkdetail/${kunstwerk.id}`,
                  kunstwerk
                }}
              >
                Werk Detail
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Werken;
