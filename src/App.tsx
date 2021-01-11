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
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Typography, Space } from 'antd';
import Auth from './components/Auth/Auth'
import Search from './components/Pages/search'
import Results from './components/Pages/results'



const { Text, Link } = Typography;

<Switch>
<Route exact path="/">
  <Home />
</Route>
<Route path="/search">
  <Search />
</Route>
<Route path="/results">
  <Results />
</Route>
</Switch>

type states = {
  search: string|null,
  token: string|null,
  userId: string|null,
  role: string|null

}
class App extends React.Component<{}, states> {
  _isMounted = false
  constructor(props: any) {
      super(props)
      this.state = {
    
      search: null,
      token: null,
      userId: null,
      role: null
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
    return (
      <BrowserRouter >
    < Route exact path ="/">
     {localStorage.getItem('token') == "" ? <Auth updateToken={this.updateToken} / > : <Search /> }
   </Route>
   </BrowserRouter>
    )
  }
 
}


export default App;


