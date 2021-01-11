import React from 'react';
import Auth from "../Auth/Auth"
import './home.css';
import { Form, Input,Button, Typography, } from 'antd';
import { SearchBar,  WhiteSpace, WingBlank } from 'antd-mobile';
import { Route, Redirect, Link } from "react-router-dom";
import Results from './results'


  type Function = {
    to: string
    from: string
    searchTerm: string
  }

 
  class Search extends React.Component<{}, Function> {
    constructor(props: Function) {
      super(props)
      this.state = {
    
      to: "",
      from: "",
      searchTerm: ""
      
      } 
    }


    onSubmit = (searchTerm: string) =>  {
     
      <Redirect to="./results"  />
    }

   


    render() {
      return (<div>
        <Form>
        <WingBlank><div className="sub-title">Normal</div></WingBlank>
        <Form.Item>
        <SearchBar placeholder="From" maxLength={3}     onChange={(event) => {                 
                  this.setState({
                    from: this.state.from
                  });  
                  }} />
        </Form.Item>
        <Form.Item>
        <SearchBar placeholder="To" maxLength={3}  onChange={(event) => {                 
                  this.setState({
                    to: this.state.to
                  });  
                  }}  />
        </Form.Item>
        <WhiteSpace />
        <Form.Item>
      <Link to = "/results">  <Button color="inherit" id="Submit" htmlType="submit">Search for Flights!</Button> </Link>
         </Form.Item>
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
       
      </div>);
    }
  }
  
  

  export default Search;