import React, { Component } from "react";
import { app } from "./config/fire.js";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import Home from "./components/Home.jsx";
import Werken from "./components/Werken.jsx";
import WerkDetail from "./components/WerkDetail.jsx";
import Account from "./components/Account.jsx";
import Captions from "./components/Captions.jsx";
import NoMatch from "./components/NoMatch.jsx";
import { StatusContext } from "./context/statusContext.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
      displayName: ""
    };
  }

  componentDidMount = () => {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
          username: user.displayName
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  };

  render() {
    const { authenticated, username } = this.state;
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    return (
      <StatusContext.Provider value={this.state}>
        <div className="App">
          <Link to="/">Home</Link>
          {authenticated ? (
            <div>
              <p>Ingelogd, welkom: {username}</p>
              <Link to="/logout">Logout</Link>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/werken" render={() => <Werken />} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/captions" component={Captions} />
            <Route path="/werkdetail/:id" component={WerkDetail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </StatusContext.Provider>
    );
  }
}

export default App;
