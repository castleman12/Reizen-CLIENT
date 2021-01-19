import React from "react";
import { Route, Link, Switch, Router, BrowserRouter } from "react-router-dom";
import { Menu, Button, Typography, Affix } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Search from "./search";
import SearchResults from "./results";
import AddTrip from "./search";
import "./navbar.css";
import logo from "../assets/MainLogo.png";
import Auth from "../Auth/Auth";
import { createBrowserHistory } from "history";

type Props = {
  token: string | null;
  role: string | null;
  logout: Function;
};

class Nav extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
 
  clickLogout(e: React.MouseEvent) {
    this.props.logout();
  }

  componentDidMount() {
     console.log(this.props.token)
  }

  render() {
    return (
      <div>
        <Menu >
          {localStorage.getItem("token") ? (
            <Button color="inherit" onClick={(e) => this.props.logout()}>
              Logout
            </Button>
          ) : null}
        </Menu>

  
      </div>
    );
  }
}

export default Nav;

