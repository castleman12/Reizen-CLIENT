import React from 'react';
import Auth from "../Auth/Auth"
import './home.css';
import search from './search'

import { Route, Redirect } from "react-router-dom";



class results extends React.Component<{}, search> {
   
//       fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${from}&destinationLocationCode=${to}&departureDate=${date}&adults=1&travelClass=ECONOMY&nonStop=false&max=1`, {
//         method: 'GET',
//         })
        
//         setSearchResults(movies);
//     }
//     fetchResults()
//     }, [])
render() {
    return (
        <div>
            <h1>Hey</h1>
        </div>
    )
}

 }

export default results;