import React, { Component } from 'react';
import Routing from './Components/Routing';
// import Home from './Components/Home';
// import { HashRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userAuth: 0
    };
  }


  render() {

    return (
      <div>
      <Routing />
      </div>
      )
    }
  }

  export default App;