import React, { Component } from "react";
import { app, base } from "./config/fire.js";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Kunstwerken from "./components/Kunstwerken.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kunstwerken: [],
      authenticated: false,
      loading: true
    };
  }

  componentDidMount = () => {
    this.removeAuthListener = app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
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
    const { kunstwerken, authenticated } = this.state;
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Different vision</h1>
        </header>
        {authenticated ? (
          <div>
            <p>Ingelogd</p>
            <Link to="/logout">Logout</Link>
            <Kunstwerken kunstwerken={kunstwerken} />
          </div>
        ) : (
          <Link to="/login">Register / Login</Link>
        )}
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </div>
    );
  }
}

export default App;
