import {Button, Typography} from 'antd';
import React from 'react'
import Search from './search'


type States = {
    FlightInfo:{
    FlightTo: string,
   FlightFrom: string,
   ArrivalDate: string,
   ReturnDate: string,
   ItemName: string | null,
   id: number,

    },  
     refresh: Function,
   userId: string | null
}
class FlightResults extends React.Component <States> {
    constructor(props: States) {
        super(props)
    
    }
    render() {
        return (
            <div>
            <div key={this.props.FlightInfo.id}></div>
            <Typography>
                {this.props.FlightInfo}
            </Typography>
            </div>
        )
    }
}

export default FlightResults