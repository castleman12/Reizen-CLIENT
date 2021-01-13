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
import { Route, BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { Typography, Space } from 'antd';
import Auth from './components/Auth/Auth'
import Search from './components/Pages/search'
import Results from './components/Pages/results'
import APISearch from './components/Pages/results'
import APIURL from './helpers/environment'



const { Text, Link } = Typography;



type states = {
  search: string|null,
  token: string|null,
  userId: string|null,
  role: string|null
  Destination: string
  From: string
  Date: string
  APISearch:Function


}
class App extends React.Component<{}, states> {
  _isMounted = false
  constructor(props: any) {
      super(props)
      this.state = {
    
      search: null,
      token: null,
      userId: null,
      role: null,
      Date: "",
      From: "",
      Destination: "",
      APISearch: new Function

      } 
      this.updateToken = this.updateToken.bind(this)
      this.updateRole = this.updateRole.bind(this)
      this.updateUserId = this.updateRole.bind(this)
 
      
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
        console.log(this.state.token)
      }

      updateUserId = (newUserId: string) => {
        this.setState({userId: newUserId})
        localStorage.setItem('userId', newUserId)
      
      }

      updateRole = (newRole: string) => {
        this.setState({role: newRole})
        localStorage.setItem('role', newRole)
      
      }


      
  render() {
    return( 
      
    <div>

    <Router>
     <Auth updateToken={this.updateToken}/>
    </Router>
     {localStorage.getItem('token') ?   <Search/> : null }
     
    </div>
 
  
//    <Switch>

// <Route path="/search">
//   <Search  Destination={this.state.Destination} From={this.state.From} Date={this.state.Date} />
// </Route >
// <Route path="/results">
//   <Results/>
// </Route>
// </Switch>
    )
  }
 
}


export default App;


