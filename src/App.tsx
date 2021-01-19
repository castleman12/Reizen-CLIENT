import React from "react";
import Home from "./components/Pages/home";
import "./App.css";
import ReactDOM, { render } from "react-dom";
import { DatePicker, message } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { FC } from "react";
import { Button } from "antd";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import { Typography, Space } from "antd";
import Auth from "./components/Auth/Auth";
import Search from "./components/Pages/search";
import Results from "./components/Pages/results";
import APISearch from "./components/Pages/results";
import APIURL from "./helpers/environment";
import NavBar from "./components/Pages/navbar";

const { Text, Link } = Typography;

type states = {
  token: string | null;
  userId: string | null;
  role: string | null;
};
class App extends React.Component<{}, states> {
  _isMounted = false;
  constructor(props: states) {
    super(props);
    this.state = {
      token: null,
      userId: null,
      role: null,
    };
    this.updateToken = this.updateToken.bind(this);
    this.updateRole = this.updateRole.bind(this);
    this.updateUserId = this.updateUserId.bind(this);
    this.logout = this.logout.bind(this);
  }

  updateToken = (newToken: string) => {
    this.setState({ token: newToken });
    localStorage.setItem("token", newToken);
    console.log(this.state.token);
  };

  updateUserId = (newUserId: string) => {
    this.setState({ userId: newUserId });
    localStorage.setItem("userId", newUserId);
  };

  updateRole = (newRole: string) => {
    this.setState({ role: newRole });
    localStorage.setItem("role", newRole);
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      token: null,
      userId: null,
      role: null,
    });
  };
  render() {
    return (
      <div>
        <h1>Reizen</h1>
        <h3>The pretentious travel site</h3>
        <Router>
          <NavBar
            logout={this.logout}
            token={this.state.token}
            role={this.state.role}
          />
        </Router>
        <br />
        <Router>
         
          {localStorage.getItem("token") ? (
            <Search />
          ) : (
            <Auth
              updateToken={this.updateToken}
              updateUserId={this.updateUserId}
              updateRole={this.updateRole}
            />
          )}
        </Router>
      </div>

      //    <Switch>

      // <Route path="/search">
      //   <Search  Destination={this.state.Destination} From={this.state.From} Date={this.state.Date} />
      // </Route >
      // <Route path="/results">
      //   <Results/>
      // </Route>
      // </Switch>
    );
  }
}

export default App;
