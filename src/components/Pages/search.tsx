import React, {Component} from 'react';
import Auth from "../Auth/Auth"
import './home.css';
import { Form, Input,Button, Typography,  DatePicker} from 'antd';
import { SearchBar,  WhiteSpace, WingBlank } from 'antd-mobile';
import { Route, Redirect, Link } from "react-router-dom";
import App from '../../App'
import Results from './results'
import APISearch from './results'

import moment from 'moment';
import { PlacementsConfig } from 'antd/lib/tooltip';



interface Carrier  {
  carrierID: number,
  carrierName: string
}

// interface Carriers {
//  carriers: Carrier[]
// }

interface Quote {
  quote: number
}

// interface Quotes {
//   quotes: Quote[]
// }
interface Currency {
  currency: string
}

// interface Currencies {
//   currencies: Currency[]
// }

interface Place {
    to: string,
    from: string
}

interface states {
  Carrier: Carrier[],
  Quote: Quote[],
  Currency: Currency[],
  Place: Place[]
}

let searchResults = new Map<string, string>()



  type Data = {
    Destination: string,
    From: string,
    places: Place[],
    currencies: Currency[],
    quotes: Quote[],
    carriers: Carrier[]
  }
  //   Date: string
  //   APISearch: Function
  //   response: string
  //   json: string

  // }
  const dateFormat = 'YYYY/MM/DD';

  class Search extends Component<{},Data> {
    constructor(props: Data) {
      super(props);
      this.state = {
        carriers: [],
        currencies: [],
        quotes: [],
        places: [],
        From: "",
        Destination: "",
        } 
    } 
    APISearch = ( values:any) => {
      fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${this.state.From}-sky/${this.state.Destination}-sky/anytime?inboundpartialdate=anytime`, {
          method: "GET",
          headers: {
              "x-rapidapi-key": "ef82af61b0msh356197e60c0cdcdp1ea997jsn72137a2a3437",
              "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
          }
      })
      .then(response => {
        return response.json();
      })
      .then(json => {
       console.log(json.Carriers);
       this.SetCarrierArray(json.Carriers)
       this.SetCurrenciesArray(json.Currencies)
       this.SetPlacesArray(json.Places)
       this.SetQuotesArray(json.Quotes)
       
      })
    
      .catch(err => {
        console.log(err);
    });
    
    }
    ShowResults = (props:any) => {
      searchResults.set(props.currencies, props.places)
      console.log(searchResults)

      
    }
    
  SetCarrierArray = (CarrierResults: Carrier[]) => {
    this.setState({
      carriers: CarrierResults
    })
    
    console.log("Results:", CarrierResults)
    console.log(this.state)
  }


  
  SetPlacesArray = (PlacesResults: Place[]) => {
    this.setState({
      places: PlacesResults
    })
    console.log("Results:", PlacesResults)
    console.log(this.state)
  }

  SetQuotesArray = (QuotesResults: Quote[]) => {
    this.setState({
      quotes: QuotesResults
    })
    console.log("Results:", QuotesResults)
   
    
  }
  
  SetCurrenciesArray = (CurrenciesResults: Currency[]) => {
    this.setState({
      currencies: CurrenciesResults
    })
    console.log("Results:", CurrenciesResults)
    
  }
  
    render() {
      return (<div>
        <Form
        name="basic"
        className="form"
        onFinish={this.APISearch}
        initialValues={{ remember: true }}>
        <WingBlank><div className="sub-title">Flight Search</div></WingBlank>
        <Form.Item
         rules={[{ required: true }]}
            label="From"
            name="from"
            >
            <Input placeholder="From"  maxLength={3} onChange={(event) => this.setState({From: event.target.value})}
        />
          </Form.Item>
        <Form.Item
         rules={[{ required: true }]}
            label="Destination"
            name="destination"
            >
            <Input placeholder="Destination"  maxLength={3} onChange={(event) => this.setState({Destination: event.target.value})}
        />
          </Form.Item>
       
        
          {/* <Form.Item
         rules={[{ required: true }]}
            label="Date"
            name="date"
            >
        {/* <DatePicker defaultValue={moment('2022/01/01', dateFormat)} onOpenChange={(event) => this.setState({Date: event.target.value})}/> */}
   
        <WhiteSpace />
     
        <Form.Item>
            <Button type="primary" onClick={this.APISearch}>
             Search for flights!
            </Button>
            </Form.Item>
          {/* <Route>
      <Link to = "/results" >  <Button color="inherit" id="Submit" htmlType="submit">Search for Flights!</Button> <Results Destination={this.props.Destination} From={this.props.From} Date={this.state.Date}/></Link>
          </Route> 
        */}
     
        <WhiteSpace />
       
        <WhiteSpace />
        
       </Form>
        {/* <SearchBar
          value={this.state.value}
          placeholder="Search"
          onSubmit={this.onSubmit}
          // onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          showCancelButton
          // onChange={this.onChange}
        /> */}
        {this.state.currencies.map}
        
      </div>
      );
    }
  }
  


export default Search;
