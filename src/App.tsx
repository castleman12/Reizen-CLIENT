import React from 'react'
import Home from './components/Pages/home';
import './App.css';
import ReactDOM, { render, } from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import  { FC } from 'react';
import { Button } from 'antd';
import './App.css'; 
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { Typography, Space } from 'antd';
import Auth from './components/Auth/Auth'
import Search from './components/Pages/search'


const { Text, Link } = Typography;

type Data = {
  search: string|null,
  token: string|null,
  userId: string|null,
  role: string|null

}
class Login extends React.Component<{}, Data> {
  _isMounted = false
  constructor(props: Data) {
      super(props)
      this.state = {
    
      search: null,
      token: null,
      userId: null,
      role: null
      } 
    }
    componentWillUnmount(){
      this._isMounted = false;
  }
    componentDidMount() {
      this._isMounted = true;
      if (localStorage.getItem('token')){
          this.setState({
              token: localStorage.getItem('token'),
              role: localStorage.getItem('role'),
              userId: localStorage.getItem("userId")
          });
        }
  }
      updateToken = (newToken: string) => {
        this.setState({token: newToken})
        localStorage.setItem('token', newToken)
        
      }

      updateUserId = (newUserId: string) => {
        this.setState({userId: newUserId})
        localStorage.setItem('userId', newUserId)
      
      }
     




 


  render() {
    return (
      <BrowserRouter >
    < Route>
     {this.state.token !== "" ? <Auth /> : <Search />}
   </Route>
   </BrowserRouter>
    )
  }
 
}


export default Login;


