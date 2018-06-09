import React, { Component } from "react";
class Werken extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.kunstwerken.map(kunstwerk => {
          return (
            <div key={kunstwerk.id} className="kunstwerk">
              <p>{kunstwerk.title}</p>
              <p>{kunstwerk.author}</p>
              <p>{kunstwerk.desc}</p>
              <img
                alt={kunstwerk.desc}
                className="kunstwerk-img"
                src={kunstwerk.img}
                width="1000"
                height="1000"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Werken;
