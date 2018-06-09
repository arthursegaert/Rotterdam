import React, { Component } from "react";
import { app, base } from "./config/fire.js";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import Kunstwerken from "./components/Kunstwerken.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kunstwerken: [],
      authenticated: false,
      loading: true,
      displayName: "Nog signed in"
    };
  }

  componentDidMount = () => {
    this.removeAuthListener = app.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
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
    base.syncState(`kunstwerken`, {
      context: this,
      state: "kunstwerken"
    });
  };

  //undo when someone leaves your application
  componentWillUnmount = () => {
    this.removeAuthListener();
  };

  render() {
    const { kunstwerken, authenticated, username } = this.state;
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        {authenticated ? (
          <div>
            <p>Ingelogd, welkom: {username}</p>
            <Link to="/logout">Logout</Link>
            <Kunstwerken kunstwerken={kunstwerken} />
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
        <Route exact path="/login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/logout" component={Logout} />
      </div>
    );
  }
}

export default App;
