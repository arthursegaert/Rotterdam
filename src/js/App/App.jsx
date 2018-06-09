import React, { Component } from "react";
import { app, base } from "./config/fire.js";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import Home from "./components/Home.jsx";
import Werken from "./components/Werken.jsx";
import Account from "./components/Account.jsx";
import Sticker from "./components/Sticker.jsx";
import Captions from "./components/Captions.jsx";

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
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/werken" component={Werken} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/captions" component={Captions} />
        <Route exact path="/sticker" component={Sticker} />
      </div>
    );
  }
}

export default App;
