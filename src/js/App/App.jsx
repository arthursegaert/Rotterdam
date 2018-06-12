import React, { Component } from "react";
import { app } from "./config/fire.js";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Logout from "./pages/Logout.jsx";
import Home from "./pages/Home.jsx";
import Werken from "./pages/Werken.jsx";
import WerkDetail from "./pages/WerkDetail.jsx";
import Account from "./pages/Account.jsx";
import Captions from "./pages/Captions.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import { StatusContext } from "./context/statusContext.js";
import Loading from "./components/Loading.jsx";

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
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <StatusContext.Provider value={this.state}>
        <div className="App">
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
