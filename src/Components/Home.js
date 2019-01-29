import React, { Component } from 'react';
import LOGO from './LOGO.svg';
class Home extends Component {

	  constructor() {
    super();
    this.state = {
      fields: {},
      // errors: {},
      userAuth: false
    };
  }
  render() {
    const username = localStorage.getItem("username");
   // const email=localStorage.getItem("username");
    if (localStorage.getItem("authenticate")) {
      return (
        <div className=" ">
        <header>
          Hello, <strong>{username}</strong>
          <img src={LOGO} className="App-logo" alt="logo" />
        </header>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <img src={LOGO} className="App-logo" alt="logo" />
            
          </header>
     
        </div>
      );
    }
  }
    // render() {
    	
    //   return (<img src={LOGO} className="App-logo" alt="logo" />);
    // }
  }
  
  export default Home;