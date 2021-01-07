import React from 'react';
import { setConstantValue } from 'typescript';
import Auth from "../Auth/Auth"
import './home.css';

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
