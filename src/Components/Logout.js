import React, { Component } from 'react';
import image from './image.png';
import {Redirect} from 'react-router-dom';
class Logout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userAuth: false
		};
	}

	render() {
		  localStorage.removeItem('username')
          localStorage.removeItem('password')
	    	return (<img src={image} className="App-logo" alt="logo" />);
			
		}
	}

	export default Logout;