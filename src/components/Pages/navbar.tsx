// import React from 'react';
// import {
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom'
// import Home from './Pages/Home';
// import SearchResults from './Pages/SearchResults';
// import Watchlist from './Pages/Watchlist'
// import './Navbar.css'
// import logo from '../assets/MainLogo.png'
// import Auth from './Auth/Auth'

// type props = {
//  AuthActive: boolean
// }


// class Header extends React.Component<{}, props> {
//     _isMounted = false
//     constructor(props: props) {
//         super(props)
//         this.state = {
//             AuthActive: false
//         }
//     }


//   authOn = () => {
//       this.setState({AuthActive: true})
   
//   }

//   authOff = () => {
//     this.setState({AuthActive: false});
//   }





// render() {
//   return(
   
  
//       <div className="showContent">
//         <Switch>

//           <Route exact path="/"><Home  clickLogout={this.clickLogout} updateToken={this.updateToken} setSearch={this.setSearch} search={this.search} token={props.token}/></Route>
//           <Route exact path="/home"><Home clickLogout={props.clickLogout} updateToken={props.updateToken} setSearch={props.setSearch} search={props.search} Link={Link} token={props.token}/></Route>
//           <Route exact path="/searchresults"><SearchResults search={props.search} token={props.token} authOn={props.authOn} authOff={props.authOff}/></Route>
//           <Route exact path="/watchlist"><Watchlist token={props.token}/> </Route>
//         </Switch>
//       </div>

//   )
// }
// }
// }
export{}