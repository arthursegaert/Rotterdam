import React, { Component } from "react";
import { base } from "../config/fire.js";
import { StatusContext } from "../context/statusContext.js";

class WerkDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: false,
      kunstwerken: [],
      loading: true
    };
  }
  componentDidMount() {
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

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    } else {
      const kunstwerkId = parseInt(this.props.match.params.id, 10);

      const result = this.state.kunstwerken.filter(
        kunstwerk => kunstwerk.id === kunstwerkId
      )[0];

      if (this.state.match) {
        return (
          <StatusContext.Consumer>
            {({ authenticated }) => (
              <div>
                <h1>{result.title}</h1>
                <p>{result.author}</p>
                <p>{result.date}</p>
                <p>{result.desc}</p>
                <p>{result.img}</p>
                {authenticated ? (
                  <div>
                    <p>Schrijf hier jouw caption toe:</p>
                    <form
                      ref={form => {
                        this.captionForm = form;
                      }}
                      onSubmit={this.handleNewCaptionSubmit}
                    >
                      <input
                        ref={input => {
                          this.captionInput = input;
                        }}
                      />
                      <input type="submit" value="voeg jouw caption toe" />
                    </form>
                  </div>
                ) : (
                  <p>Je moet ingelogd zijn om een caption te schrijven</p>
                )}
              </div>
            )}
          </StatusContext.Consumer>
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
