import React, {Component} from 'react';
import Auth from "../Auth/Auth"
import './home.css';
import { Form, Input,Button, Typography,  DatePicker} from 'antd';
import { SearchBar,  WhiteSpace, WingBlank } from 'antd-mobile';
import { Route, Redirect, Link } from "react-router-dom";
import App from '../../App'
import Results from './results'
import APISearch from './results'
import APIURL from '../../helpers/environment'
import moment from 'moment';
import { PlacementsConfig } from 'antd/lib/tooltip';



// interface Carrier  {
//   carrierID: number,
//   carrierName: string
// }

// interface Carriers {
//  carriers: Carrier[]
// }

// interface Quote {
//   quote: number
// }

// interface Price {
//   price: number 
// }

// interface OutboundLeg {

// }



// interface Quotes {
//   quotes: Quote[]
// }
// interface Currency {
//   currency: string
// }

// interface Currencies {
//   currencies: Currency[]
// }

// interface Place {
//     to: string,
//     from: string
// }

// interface states {
//   Carrier: Carrier[],
//   Quote: Quote[],
//   Currency: Currency[],
//   Place: Place[]
// }

// let searchResults = new Map<string, string>()



//   type Data = {
//     Destination: string,
//     From: string,
//     places: Place[],
//     currencies: Currency[],
//     quotes: Quote[],
//     carriers: Carrier[]
//   }
  //   Date: string
  //   APISearch: Function
  //   response: string
  //   json: string

  // }
  // const dateFormat = 'YYYY/MM/DD';

  // class Search extends Component<{},Data> {
  //   constructor(props: Data) {
  //     super(props);
  //     this.state = {
  //       carriers: [],
  //       currencies: [],
  //       quotes: [],
  //       places: [],
  //       From: "",
  //       Destination: "",
  //       } 
  //   } 
    // APISearch = ( values:any) => {
    //   fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${this.state.From}-sky/${this.state.Destination}-sky/anytime?inboundpartialdate=anytime`, {
    //       method: "GET",
    //       headers: {
    //           "x-rapidapi-key": "ef82af61b0msh356197e60c0cdcdp1ea997jsn72137a2a3437",
    //           "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    //       }
    //   })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(json => {
    //    console.log(json.Carriers);
    //   //  this.SetCarrierArray(json.Carriers)
    //   //  this.SetCurrenciesArray(json.Currencies)
    //   //  this.SetPlacesArray(json.Places)
    //    this.SetQuotesArray(json.Quotes)
       
    //   })
    
    //   .catch(err => {
    //     console.log(err);
    // });
    
    // }
  
    // ShowResults = (props:any) => {
    //   searchResults.set(props.currencies, props.places)
    //   console.log(searchResults)

      
    // }
    
  // SetCarrierArray = (CarrierResults: Carrier[]) => {
  //   this.setState({
  //     carriers: CarrierResults
  //   })
    
  //   console.log("Results:", CarrierResults)
  //   console.log(this.state)
  // }


  
  // SetPlacesArray = (PlacesResults: Place[]) => {
  //   this.setState({
  //     places: PlacesResults
  //   })
  //   console.log("Results:", PlacesResults)
  //   console.log(this.state)
  // }

  // SetQuotesArray = (QuotesResults: Quote[]) => {
  //   this.setState({
  //     quotes: QuotesResults
  //   })
  //   console.log("Results:", QuotesResults)

  // }
  
  // SetCurrenciesArray = (CurrenciesResults: Currency[]) => {
  //   this.setState({
  //     currencies: CurrenciesResults
  //   })
  //   console.log("Results:", CurrenciesResults)
    
  // }
  

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  
   type states = {
      
    
        FlightTo: string,
        FlightFrom: string,
        ArrivalDate: string,
        ReturnDate: string
        loginToggler: boolean
        itemToggler: boolean
  
    
  }
  class AddTrip extends Component<{}, states > {
      constructor(props: states) {
          super(props)
          this.state = {
            FlightTo: "",
            FlightFrom: "",
            ArrivalDate: "",
            ReturnDate: "",
            loginToggler: true,
            itemToggler: true,
  
          }
          this.onFinish = this.onFinish.bind(this)
          this.onFinishFailed = this.onFinishFailed.bind(this)
      }
     
        onFinish = (values: any) => {
          console.log('Success: ', values)
          
           fetch(`https://jw-reizen.herokuapp.com/trip`, {
            method: 'POST',
             headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
             }, 
            body: JSON.stringify( {
              FlightTo: values.FlightTo,
              FlightFrom: values.FlightFrom,
              ArrivalDate: values.ArrivalDate,
              ReturnDate: values.ReturnDate
              }  ), 
          })
          .then((response) => response.json())
          .catch(() => console.log("Can’t access response. Blocked by browser?"))
         
        
        }

        Delete = (values: any) => {
          console.log('Success: ', values)
          
           fetch(`https://jw-reizen.herokuapp.com/trip/delete`, {
            method: 'DELETE',
             headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
             }
             
            
          })
          .then((response) => response.json())
          .catch(() => console.log("Can’t access response. Blocked by browser?"))
         
        
        }

        Update = (values: any) => {
          console.log('Success: ', values)
          
           fetch(`${APIURL}/trip`, {
            method: 'PUT',
             headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
             }, 
            body: JSON.stringify( {
              FlightTo: values.FlightTo,
              FlightFrom: values.FlightFrom,
              ArrivalDate: values.ArrivalDate,
              ReturnDate: values.ReturnDate
              }  ), 
          })
          .then((response) => response.json())
          .catch(() => console.log("Can’t access response. Blocked by browser?"))
         
        
        }

        ItemCreate = (values: any) => {
          console.log('Success: ', values)
          
           fetch(`${APIURL}/packingList/create`, {
            method: 'POST',
             headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
             }, 
            body: JSON.stringify( {
              TripID: values.TripID
              }  ), 
          })
          .then((response) => response.json())
          .catch(() => console.log("Can’t access response. Blocked by browser?"))
         
        
          fetch(`${APIURL}/packingList/create`, {
            method: 'POST',
             headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
             }, 
            body: JSON.stringify( {
              TripID: values.TripID
              }  ), 
          })
          .then((response) => response.json())
          .catch(() => console.log("Can’t access response. Blocked by browser?"))
         
          fetch(`${APIURL}/packingItems`, {
            method: 'POST',
             headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
             }, 
            body: JSON.stringify( {
              ItemName: values.ItemName,
              UserID: values.user.id,
              PackingID: values.PackingID,
              createdAt: "2021-01-13 10:20:15.658-06",
              updatedAt: "2021-01-13 10:20:15.658-06",
              packingListId: 3
              }  ), 
          })
          .then((response) => response.json())
          .catch(() => console.log("Can’t access response. Blocked by browser?"))
         
        
        }


        
        ItemUpdate = (values: any) => {
          console.log('Success: ', values)
          
           fetch(`${APIURL}/packingItems`, {
            method: 'PUT',
             headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
             }, 
            body: JSON.stringify( {
              ItemName: values.ItemName,
              UserID: values.user.id,
              PackingID: values.PackingID,
              createdAt: "2021-01-13 10:20:15.658-06",
              updatedAt: "2021-01-13 10:20:15.658-06",
              packingListId: 3
              }  ), 
          })
          .then((response) => response.json())
          .catch(() => console.log("Can’t access response. Blocked by browser?"))
         
        }

        ItemDelete = (values: any) => {
          console.log('Success: ', values)
          
           fetch(`https://jw-reizen.herokuapp.com/packingItems/delete`, {
            method: 'DELETE',
             headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
             }
             
            
          })
          .then((response) => response.json())
          .catch(() => console.log("Can’t access response. Blocked by browser?"))
         
        
        }
        loginToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          this.setState({
            FlightTo: "",
            FlightFrom: "",
            ArrivalDate: "",
            ReturnDate: "",
            loginToggler: !this.state.loginToggler,
            itemToggler: this.state.itemToggler
    
          })
          console.log(this.state.loginToggler)
        }
        itemToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          this.setState({
            FlightTo: "",
            FlightFrom: "",
            ArrivalDate: "",
            ReturnDate: "",
            loginToggler: this.state.loginToggler,
            itemToggler: !this.state.itemToggler,
    
          })
          console.log(this.state.loginToggler)
        }
onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo)
        }

        
    render() {
      return (<div>
       {this.state.loginToggler ? 
           <Form
        {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          className="form">
          <Form.Item
            label="FlightFrom"
            name="flightfrom"
            rules={[{ required: true, message: 'Where are you coming from?' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="FlightTo"
            name="FlightTo"
            rules={[{ required: true, message: 'Where are you flying to?' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="ArrivalDate"
            name="ArrivalDate"
            rules={[{ required: true, message: 'When do you plan to get there?' }]}>
            <Input />
            </Form.Item>
            <Form.Item
            label="ReturnDate"
            name="ReturnDate"
            rules={[{ required: true, message: 'When do you plan to get back?' }]}>
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>  
<Button  color="inherit" htmlType="submit" id="Submit">Add Flight!</Button> 
          </Form.Item>


        </Form>
:
        <Form
        {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.Update}
          onFinishFailed={this.onFinishFailed}
          className="form">
          <Form.Item
            label="FlightFrom"
            name="flightfrom"
            rules={[{ required: true, message: 'Where are you coming from?' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="FlightTo"
            name="FlightTo"
            rules={[{ required: true, message: 'Where are you flying to?' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="ArrivalDate"
            name="ArrivalDate"
            rules={[{ required: true, message: 'When do you plan to get there?' }]}>
            <Input />
            </Form.Item>
            <Form.Item
            label="ReturnDate"
            name="ReturnDate"
            rules={[{ required: true, message: 'When do you plan to get back?' }]}>
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>  
<Button  color="inherit" htmlType="submit" id="Submit">Update Flight!</Button> 
          </Form.Item>


        </Form>

       }
      
          <Button type="primary"  onClick={this.loginToggle}>
              Add/Edit
            </Button>
  
 <br/>
       <br/>
        <Button onClick={this.Delete}>Delete a Flight!</Button>
     
            {this.state.itemToggler ? 
            <div>
            <Form
        {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.ItemCreate}
          onFinishFailed={this.onFinishFailed}
          className="form">
          <Form.Item
            label="ItemName"
            name="itemname"
            rules={[{ required: true, message: "What item do you want to add?" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="UserID"
            name="userid"
            rules={[{ required: true, message: 'Insert ID' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="PackingID"
            name="packingID"
            rules={[{ required: true, message: 'What trip is this for?' }]}>
            <Input />
            </Form.Item>
           
          <Form.Item {...tailLayout}>  
<Button  color="inherit" htmlType="submit" id="Submit">Add Item!</Button> 
          </Form.Item>
 </Form>  
    </div> 
:
<div>
                   <Form
        {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.ItemUpdate}
          onFinishFailed={this.onFinishFailed}
          className="form">
          <Form.Item
            label="ItemName"
            name="itemname"
            rules={[{ required: true, message: "What item do you want to add?" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="UserID"
            name="userid"
            rules={[{ required: true, message: 'Insert ID' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="PackingID"
            name="packingID"
            rules={[{ required: true, message: 'What trip is this for?' }]}>
            <Input />
            </Form.Item>
           
          <Form.Item {...tailLayout}>  
<Button  color="inherit" htmlType="submit" id="Submit">Update Item!</Button> 
          </Form.Item>
</Form>
 </div>   }
<Button type="primary"  onClick={this.itemToggle}>
              Add/Edit
            </Button>
<br/>
<br/>
            <Button onClick={this.ItemDelete}>Delete an Item!</Button>
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
        

      </div>
      );
    }
  }
  


export default AddTrip;
