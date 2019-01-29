import React, { Component } from 'react';
import md5 from 'react-native-md5';
import {Redirect} from 'react-router-dom';
class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			userAuth: false
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log(localStorage.getItem('username'));
		console.log(localStorage.getItem('password'));
		// console.log(this.state.userAuth)
		if((this.state.username == localStorage.getItem('username')) && (md5.b64_md5(this.state.password) == localStorage.getItem('password')))
		{

			this.setState({userAuth: true})
			this.setState({Auth: true})
			localStorage.setItem('authenticate', true)
			console.log("logged In");
		}
		else
		{
			alert("Wrong login credentials.")
		}

		this.props.callbackFromParent(this.state.userAuth);
	}

	render() {
		
		if(this.state.userAuth)
		{
			return (<Redirect to={'/Home'}/>)
		}
		return (
			<form className="FormFields">
			<div className="FormField">
			<label className="FormField__Label" htmlFor="Username">Username</label>
			<input type="text" name='username' className="FormField__Input" value={this.state.username} onChange={e => this.handleChange(e)}/>
			</div>
			<div className="FormField">
			<label className="FormField__Label" htmlFor="password">Password</label>
			<input type="password" name='password' className="FormField__Input" value={this.state.password} onChange={e => this.handleChange(e)}/>
			</div>
			<div className="FormField">
			<button className="FormField__Button mr-20" onClick={(e) => this.onSubmit(e)}>Send</button>         
			</div>
			</form>
			
			);
	}
}

export default Login;