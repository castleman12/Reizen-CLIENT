// import React from 'react';
// import {
//   Route,
//   Link,
//   Switch,
//   Router,
//   BrowserRouter
// } from 'react-router-dom'
// import {Menu, Button, Typography, Affix} from 'antd'
// import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons'
// import Search from './search'
// import SearchResults from './results'
// import AddTrip from './search'
// import './navbar.css'
// import logo from '../assets/MainLogo.png'
// import Auth from '../Auth/Auth'
// import TripList from './tripList'
// import {createBrowserHistory} from 'history'

// const history = createBrowserHistory()

// type Props = {
//   FlightInfo: Array<{
            
//     FlightTo: string,
//     FlightFrom: string,
//     ArrivalDate: string,
//     ReturnDate: string,
//     ItemName: string | null,
//     id: number,
// }>
//  token: string | null,
//  role: string | null
//  logout: Function
// }


// class Nav extends React.Component<Props> {
//     constructor(props:Props) {
//     super(props)
//     }
//     clickLogout(e: React.MouseEvent){
//       this.props.logout()
//     }
  
//     render() {

  
//       return (
//        <div>
//         <Menu mode="inline">
//           <Menu.Item key="3"><Link to="/tripList">My Flights</Link></Menu.Item>
//           {this.props.role == "admin" ? <Menu.Item key="19"><Link to="/admin">Admin Portal</Link></Menu.Item> : null}
//         </Menu>

//         <Switch>
//           <Route exact path="/" render={() => (<Search />)}/>
//           <Route exact path="/tripList" render={() => (<TripList />)}/>
//         </Switch>
//         </div>
//       )}
//   }
  
// export default Nav
export{}