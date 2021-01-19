import React, { Component } from "react";
import Auth from "../Auth/Auth";
import "./home.css";
import { Form, Input, Button, Typography, DatePicker, Menu, Affix } from "antd";
import { SearchBar, WhiteSpace, WingBlank } from "antd-mobile";
import {
  Route,
  Redirect,
  Link,
  Switch,
  Router,
  BrowserRouter,
} from "react-router-dom";
import App from "../../App";
import Results from "./results";
import APISearch from "./results";
import APIURL from "../../helpers/environment";
import moment from "moment";
import { PlacementsConfig } from "antd/lib/tooltip";
import "./search.css";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Search from "./search";
import SearchResults from "./results";
import "./navbar.css";
import logo from "../assets/MainLogo.png";

import { createBrowserHistory } from "history";
import FlightResults from "./flightResults";
import { Row, Col } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

type states = {
  FlightTo: string | null;
  FlightFrom: string | null;
  ArrivalDate: string | null;
  ReturnDate: string | null;
  FlightInfo: Array<Flights>;

  token: string | null;
  userId: string | null;
  Items: Array<Items>;
  role: string | null;
  logout: Function;
  loginToggler: boolean;
  itemToggler: boolean;
  flightToggler: boolean;
  myFlightToggler: boolean;
};

interface Flights {
  FlightTo: string;
  FlightFrom: string;
  ArrivalDate: string;
  ReturnDate: string;
  id: number;
}

interface Items {
  ItemName: string,
  id: number;
}
class AddTrip extends Component<{}, states> {
  constructor(props: {}) {
    super(props);
    this.state = {
      token: null,
      userId: null,
      FlightTo: "",
      FlightFrom: "",
      ArrivalDate: "",
      ReturnDate: "",
      role: null,
      Items: [],
      loginToggler: true,
      itemToggler: true,
      flightToggler: true,
      myFlightToggler: true,
      logout: new Function(),
      FlightInfo: [],
    };
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
    this.Delete = this.Delete.bind(this)
  }


  // returnArray(string: string) {
  //   if(string === ""){
  //     return null
  //   } else {
  //     let newArray: Array<string> = string.split(",").map(item => item.trim() )
  //     return newArray
  //   }
  // }

  componentDidMount() {
 
    fetch(`${APIURL}/trip/user/${localStorage.getItem("userId")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ FlightInfo: data }))
      .catch(() => console.log("Can’t access response. Blocked by browser?"));

      fetch(`${APIURL}/packingItems/user/${localStorage.getItem("userId")}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => this.setState({ Items: data }))
        .catch(() => console.log("Can’t access response. Blocked by browser?"));
  }

  onFinish = (values: any) => {
    console.log("Success: ", values);

    fetch(`${APIURL}/trip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        FlightTo: values.FlightTo,
        FlightFrom: values.FlightFrom,
        ArrivalDate: values.ArrivalDate,
        ReturnDate: values.ReturnDate,
      }),
    })
      .then((response) => response.json())
      .catch(() => console.log("Can’t access response. Blocked by browser?"));
  };

  Delete = (flights: Flights) => {


    fetch(`${APIURL}/trip/delete/${flights.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
     

      .catch(() => console.log("Can’t access response. Blocked by browser?"));
       window.location.reload()
  };

  Update = (flights: Flights, values: any) => {

    fetch(`${APIURL}/trip/${flights.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        FlightTo: flights.FlightTo,
        FlightFrom: flights.FlightFrom,
        ArrivalDate: flights.ArrivalDate,
        ReturnDate: flights.ReturnDate,
      }),
    })
      .then((response) => response.json())
    
      .catch(() => console.log("Can’t access response. Blocked by browser?"));
        console.log(flights.FlightTo)
  };

  ItemCreate = (values: any) => {
    console.log("Success: ", values);

    fetch(`${APIURL}/packingItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
         ItemName: values.ItemName,

        createdAt: "2021-01-13 10:20:15.658-06",
        updatedAt: "2021-01-13 10:20:15.658-06",
      }),
    })
      .then((response) => response.json())
      .catch(() => console.log("Can’t access response. Blocked by browser?"));
  };

  
  ItemUpdate = (Items: Items) => {


    fetch(`${APIURL}/packingItems/${Items.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        ItemName: Items.ItemName,
      }),
    })
      .then((response) => response.json())
      .catch(() => console.log("Can’t access response. Blocked by browser?"));
  };

  ItemDelete = (values: any) => {
    console.log("Success: ", values);

    fetch(`${APIURL}/packingItems/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .catch(() => console.log("Can’t access response. Blocked by browser?"));
  };

  loginToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      FlightTo: "",
      FlightFrom: "",
      ArrivalDate: "",
      ReturnDate: "",
      loginToggler: !this.state.loginToggler,
      itemToggler: this.state.itemToggler,
      myFlightToggler: this.state.myFlightToggler,
    });
    console.log(this.state.loginToggler);
  };
  itemToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      FlightTo: "",
      FlightFrom: "",
      ArrivalDate: "",
      ReturnDate: "",
      loginToggler: this.state.loginToggler,
      itemToggler: !this.state.itemToggler,
      myFlightToggler: this.state.myFlightToggler,
    });
    console.log(this.state.itemToggler);
  };

  myFlightToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      FlightTo: "",
      FlightFrom: "",
      ArrivalDate: "",
      ReturnDate: "",
      loginToggler: this.state.loginToggler,
      itemToggler: this.state.itemToggler,
      flightToggler: this.state.flightToggler,
      myFlightToggler: !this.state.myFlightToggler,
    });
    console.log(this.state.flightToggler);
  };
  onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  mapper = () => {
    return this.state.FlightInfo.map((flights:Flights, index: number) => {

        return(
          <div>
          <Col>
          <Row>{flights.FlightTo}</Row>
          <Row>{flights.FlightFrom}</Row> 
          <Row>{flights.ArrivalDate}</Row>
          <Row>{flights.ReturnDate}</Row>
         
          <Row>{this.itemMapper()}</Row> 
           </Col>
          <Button onClick={() => {this.Delete(flights)}}
>Delete a Flight!</Button>
 <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            // onFinish={() => {this.Update(flights)}}
            onFinishFailed={this.onFinishFailed}
            className="form light"
          >
            <Form.Item
            style={{ color: "white" }}
            label={<label style={{ color: "white" }}>Flight From</label>}
              name="FlightFrom"
              rules={[
                { required: true, message: "Where are you coming from?" },
              ]}
            >
              <Input
               
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "white" }}>Flight To</label>}
              style={{ color: "white" }}
              name="FlightTo"
              rules={[{ required: true, message: "Where are you flying to?" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "white" }}>Arrival Date</label>}
              name="ArrivalDate"
              rules={[
                { required: true, message: "When do you plan to get there?" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "white" }}>Return Date</label>}
              name="ReturnDate"
              rules={[
                { required: true, message: "When do you plan to get back?" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button color="inherit" htmlType="submit" id="Submit">
                Update Flight!
              </Button>
            </Form.Item>
          </Form>
          </div>  
            
        )
    })
}

itemMapper = () => {
  return this.state.Items.map((Items:Items, index: number) => {

      return(
        <div>
        <div>{Items.ItemName}</div>
        
        <Button onClick={() => {this.ItemDelete(Items)}}
>Delete a Flight!</Button>
     <div>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.ItemUpdate}
              onFinishFailed={this.onFinishFailed}
              className="form"
            >
              <Form.Item
                label={<label style={{ color: "white" }}>Item Name</label>}
                name="ItemName"
                className="formItem"
                rules={[
                  { required: true, message: "What item do you want to add?" },
                ]}
              >
                <Input className="formItem" />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button color="inherit" htmlType="submit" id="Submit">
                  Update Item!
                </Button>
              </Form.Item>
            </Form>
          </div>
</div>
      )
  })
}

  render() {
    {this.state.FlightInfo.map((flights:Flights, index: number) => {
      return (
        <div>{flights.FlightFrom}</div>  
   
      )
    })}
    return (
      <div>
      <Col>
          <Form
          style={{ color: "white" }}
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            className="form"
          >
            <Form.Item
            style={{ color: "white" }}
            label={<label style={{ color: "white" }}>Flight From</label>}
              name="FlightFrom"
              rules={[
                { required: true, message: "Where are you coming from?" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "white" }}>Flight To</label>}
              name="FlightTo"
              rules={[{ required: true, message: "Where are you flying to?" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "white" }}>Arrival Date</label>}
              name="ArrivalDate"
              rules={[
                { required: true, message: "When do you plan to get there?" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "white" }}>Return Date</label>}
              name="ReturnDate"
              rules={[
                { required: true, message: "When do you plan to get back?" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button color="inherit" htmlType="submit" id="Submit">
                Add Flight!
              </Button>
            </Form.Item>
          </Form>
        </Col>
   <div>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.ItemCreate}
              onFinishFailed={this.onFinishFailed}
              className="form"
            >
              <Form.Item
                label={<label style={{ color: "white" }}>Item Name</label>}
                name="ItemName"
                rules={[
                  { required: true, message: "What item do you want to add?" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button color="inherit" htmlType="submit" id="Submit">
                  Add Item!
                </Button>
              </Form.Item>
            </Form>
          </div>

        <br />
        <br />
      

       
          
       
     
        
        <Button type="primary" onClick={this.itemToggle}>
          Add/Edit
        </Button>
        <br />
        <br />
        <Button onClick={this.ItemDelete}>Delete an Item!</Button>
   

       <Col> {this.mapper()}</Col>
        

  

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
