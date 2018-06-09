import React, { Component } from "react";
import { base } from "../config/fire.js";

class WerkDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: false
    };
  }
  componentDidMount() {
    base
      .fetch("kunstwerken", {
        context: this,
        asArray: true
      })
      .then(data => {
        if (data[parseInt(this.props.match.params.id, 10)]) {
          this.setState({ match: true });
        } else {
          this.setState({ match: false });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    if (this.state.match) {
      return (
        <div>
          <h2>Kunstwerk id: {this.props.match.params.id}</h2>
        </div>
      );
    }
    return <p>No match</p>;
  }
}

export default WerkDetail;
