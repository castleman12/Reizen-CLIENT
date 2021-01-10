import React from 'react';
import { setConstantValue } from 'typescript';
import Auth from "../Auth/Auth"
import './home.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Search from './search'

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
        localStorage.setItem("token", newToken)
        console.log(newToken)
      
      }

      updateUserId = (newUserId: string) => {
        this.setState({userId: newUserId})
        localStorage.setItem('userId', newUserId)
        console.log(newUserId)
      
      }
      updateRole = (newRole: string) => {
        this.setState({role: newRole})
        localStorage.setItem('role', newRole)
        console.log(newRole)
      
      }





 


  // render() {
    
  //   return ( 
  //   <div>
  //     {/* <Auth  />
  //     <Search />
  //     // token={this.state.token} updateUserId={this.updateUserId} updateRole={this.updateRole} /> */}
  //    </div> 
  //   )
  // }
 
}

export default Login;
