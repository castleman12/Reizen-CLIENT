import React from 'react'
import Home from './components/Pages/home';
import './App.css';
import ReactDOM, { render } from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import  { FC } from 'react';
import { Button } from 'antd';
import './App.css';
import { Typography, Space } from 'antd';
import Auth from './components/Auth/Auth'


const { Text, Link } = Typography;

type Data = {
  search: string,
  token: string,
  userId: string,
  role: string

}
class Login extends React.Component<{}, Data> {
  constructor(props: Data) {
      super(props)
      this.state = {
    
      search: "",
      token: "",
      userId: "",
      role: ""
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
      updateRole = (newRole: string) => {
        this.setState({role: newRole})
        localStorage.setItem('role', newRole)
      
      }





 


  render() {
    return (
     <div> <Auth updateToken={this.updateToken} updateUserId={this.updateUserId} updateRole={this.updateRole} /></div> 
    )
  }
 
}


export default Login;


