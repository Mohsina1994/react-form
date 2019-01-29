import React,{ Component } from 'react';
import { FormErrors } from './FormErrors';
import md5 from 'react-native-md5';
import {Redirect} from 'react-router-dom';
//import './App.css';

class Signup extends Component {
  constructor(props){
      super(props);
      this.state={
          username: '',
          password: '',
          confirm_password:'',
          userAuth: 0,
          formErrors: {username: '', password: '', confirm_password: ''},
          usernameValid: false,
          passwordValid: false,
          confirmPasswordValid: false,
          formValid: false,
          redirectTo: false
      };
  }

  handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value}, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let usernameValid         = this.state.usernameValid;
      let passwordValid         = this.state.passwordValid;
      let confirmPasswordValid  = this.state.confirmPasswordValid;

      switch(fieldName) {
        case 'username':
          usernameValid = value.length >= 1;
          fieldValidationErrors.username = usernameValid ? '' : ' is empty';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        case 'confirm_password':
          confirmPasswordValid = value.length >= 6;
          fieldValidationErrors.confirm_password = confirmPasswordValid ? '': ' is too short';
          break;
        default:
          break;
      }

      if((this.state.password != this.state.confirm_password) && confirmPasswordValid)
      {
          fieldValidationErrors.confirm_password = 'Password and Confirm Password should be same.';
      }
      this.setState({formErrors: fieldValidationErrors,
                      usernameValid: usernameValid,
                      passwordValid: passwordValid,
                      confirmPasswordValid: confirmPasswordValid
                    }, this.validateForm);
  }

  validateForm() {
    console.log(this.state.usernameValid+" "+this.state.passwordValid);
      this.setState({formValid: (this.state.usernameValid && this.state.passwordValid && (this.state.password == this.state.confirm_password))});
  }

  errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
  }
  
  onSubmit = (e) => {
   e.preventDefault();
  localStorage.setItem('username', this.state.username)
  localStorage.setItem('password', md5.b64_md5(this.state.password))

   console.log("saved"+localStorage.getItem('username'));
        this.setState({'redirectTo': true});

 }

 
    render () {
      if(this.state.redirectTo)
      {
          return (<Redirect to={'/Login'}/>)
      }
     return (
       <form className="FormFields">
          <div className="FormFields">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
         <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
           <label className="FormField__Label" htmlFor="Username">Username</label>
           <input type="text" className="FormField__Input" name="username" value={this.state.username} onChange={e => this.handleChange(e)}/>
         </div>
         <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
           <label className="FormField__Label" htmlFor="password">Password</label>
           <input type="password" className="FormField__Input" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
         </div>
         <div className={`form-group ${this.errorClass(this.state.formErrors.confirm_password)}`}>
           <label className="FormField__Label" htmlFor="password">Confirm Password</label>
           <input type="password" className="FormField__Input" name="confirm_password" value={this.state.confirm_password} onChange={e => this.handleChange(e)}/>
         </div>
         <button type="submit" className="FormField__Button mr-20" onClick={(e) => this.onSubmit(e)} disabled={!this.state.formValid}>
            Sign up
         </button>
       </form>
     )
  }
  }
  
  export default Signup; 