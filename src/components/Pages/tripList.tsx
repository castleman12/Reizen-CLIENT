
    import React, { Component } from 'react'
    import AddTrip from './search'
    import FlightResults from './flightResults'


    interface showResults {
   
            Flights: {
                FlightTo: string,
                FlightFrom: string,
                ArrivalDate: string,
                ReturnDate: string,
                ItemName: string | null,
                id: number,
     }
         

       
       refresh: Function,
       userId: string | null
    }


    export default class TripList extends React.Component<showResults> {
        constructor(props:showResults) {
        super(props)
       
        }
        render() {
            return (
                <div>
                    {
                    this.props.Flights.map(Flights => {
                        return(
                            <FlightResults Flights={Flights} refresh={this.props.refresh} userId={this.props.userId} />
                        )
                    })
                    }
                </div>
            )
        }
    }
    
    
