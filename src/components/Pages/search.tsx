import React from 'react';
import Auth from "../Auth/Auth"
import './home.css';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Route, Redirect } from "react-router-dom";


  type Function = {
    value: string
    searchTerm: string
  }


  class Search extends React.Component<{}, Function> {
    constructor(props: Function) {
      super(props)
      this.state = {
    
      value: "",
      searchTerm: ""
      
      } 
    }


    onSubmit = (searchTerm: string) =>  {
     
      <Redirect to="./results"  />
    }

 

    clear = () => {
      this.setState({ value: '' });
    };

    render() {
      return (<div>
        <WingBlank><div className="sub-title">Normal</div></WingBlank>
        <SearchBar placeholder="From" value="From" maxLength={3} />
        <SearchBar placeholder="To" value="To" maxLength={3} />
        <WhiteSpace />
      
        <WhiteSpace />
       
        <WhiteSpace />
       
        <SearchBar
          value={this.state.value}
          placeholder="Search"
          onSubmit={this.onSubmit}
          // onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          showCancelButton
          // onChange={this.onChange}
        />
       
      </div>);
    }
  }
  
  

  export default Search;