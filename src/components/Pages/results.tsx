import React from 'react';
import Auth from "../Auth/Auth"
import './home.css';
import search from './search'
import { Route, Redirect } from "react-router-dom";
import App from '../../App'

type AcceptedProps = {
  results: string
  }

class Results extends React.Component<AcceptedProps> {
   constructor(props: AcceptedProps) {
       super(props)

   }

    
   
           
   
render() {
    return (
        <div>
          Hey
        </div>
    )
}
}


export default Results;