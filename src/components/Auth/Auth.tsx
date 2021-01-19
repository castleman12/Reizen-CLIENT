import React, {Component} from 'react'
import {MouseEvent } from 'react'
import '../Auth/Auth.css';
import { Route, Redirect } from 'react-router-dom'
 import { Form, Input, Button, Typography, } from 'antd';
import { render } from '@testing-library/react';
import App from '../../App'
import Search from '../Pages/search'
import APIURL from '../../helpers/environment'

interface AcceptedProps {
  updateToken: (token: string) => void
  updateUserId: (userId: string) => void
  updateRole: (role: string) => void
}

 const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

 type states = {
    updateToken: Function,
    updateUserId: Function,
    updateRole: Function,
      email: string,
      password: string,
      userRole: string,
      loginToggler: boolean
      message: string,
      login: boolean
  
}
class Login extends Component<AcceptedProps , states > {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
         loginToggler: true,
         email: "",
         userRole: "user",
         password: "",
         updateToken: new Function,
        updateUserId: new Function,
        updateRole: new Function,
         message: "",
         login: false,

        }
        this.onFinish = this.onFinish.bind(this)
        this.onFinishFailed = this.onFinishFailed.bind(this)
    }
    loginToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      this.setState({
        email: "",
        password: "",
        userRole: "user",
        message: "",
        updateToken: this.state.updateToken,
        loginToggler: !this.state.loginToggler,
      })
      console.log(this.state.loginToggler)
    }
      onFinish = (values: any) => {
        // values.preventDefault()
     
        {this.state.loginToggler ? 
         fetch(`${APIURL}/user/login`, {
          method: 'POST',
           headers: new Headers( {
            'Content-Type': 'application/json',
           }), 
           
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }), 
        })
        .then((response) => response.json())
        .then(data => {
          if(data.sessionToken){
          this.props.updateToken(data.sessionToken) 
          this.props.updateUserId(data.user.id)
          this.props.updateRole(data.user.role)
  
        } })
        .catch( error => this.setState({message: `Error with connection. Please try again later!`}) )
      :  
       fetch(`${APIURL}/user/register`, {
        method: 'POST',
        headers: new Headers( {
          'Content-Type': 'application/json',
         }),
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          role: "user"
        }), 
      })
      .then((response) => response.json())
      .then(data => {
        if(data.sessionToken){
        this.props.updateToken(data.sessionToken) 
        this.props.updateUserId(data.user.id)
        this.props.updateRole(data.user.role)
        this.setState({message: data.message})
        window.location.reload(true)
      } else {
        if (this.state.login) { 
          this.setState({message: data.error}) 
      } else {
          this.setState({message: "Email already in use!"}) 
      }
       }})
}  
    }
      onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
      }
    render() {
      return (
        <Form
        {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          className="form">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>  
          { this.state.loginToggler ? <Button  color="inherit" id="Submit" htmlType="submit">Login!</Button>  : <Button  color="inherit" htmlType="submit" id="Submit">Sign Up!</Button> }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary"  onClick={this.loginToggle}>
              Login/Sign Up
            </Button>
            </Form.Item>
        </Form>
      );
    };
                }
export default Login







// For the "unwrapping" variation

// class LoginToggle extends React.Component<Login> {
//   LoginToggle.setState(email: String),
//   setState(password),
//   setState(message)
// }

// const Auth = (props) => {
   
//   const [login, setLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

  // const title = () => {
  //   return login ? 'Login' : 'Signup';    
  // }

  // const loginToggle = (event) => {
  //   event.preventDefault();
  //   setLogin(!login) 
  //   setEmail("");
  //   setPassword("");
  //   setMessage("");
  // }
  
  // const HandleSubmit = (event) => {
  //   event.preventDefault();
        
  //   const url = login ? `${APIURL}/user/login` : `${APIURL}/user/register`;  
  //   const bodyObj = login ? {user: {
  //     email: email,
  //     password: password
  //   }} : {user: {
  //     email: email,
  //     password: password
  //   }}
        
  //   async function postLogin() {
       
  //     let response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': "application/json"
  //       },
  //       body: JSON.stringify(bodyObj)
  //     })
       
  //     response = await response.json()
  //     console.log("token:",response.sessionToken)
  //     props.updateToken(response.sessionToken)
            
  //     if (response.sessionToken !== undefined) {
  //         setMessage(response.message)  
  //         window.location.reload(true)            
  //     } else if (login) { 
  //         setMessage(response.error) 
  //     } else {
  //         console.log("error:",response.error) 
  //         setMessage(response.error.errors[0].message)  
  //         //setMessage("Signup failed")
          
  //     }
  //   } 
  
  //   postLogin()
  // }   
    
