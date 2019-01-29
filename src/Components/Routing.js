import React, { Component } from 'react';
import { HashRouter, Route, Redirect, NavLink} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
//import './App.css';

class Routing extends Component{

	constructor(props) {
		super(props);
		this.state = {
		  userAuth: false
		};
  	}

	myCallback = (dataFromChild) => {
  	  this.setState({ userAuth: dataFromChild });
      console.log(""+ this.state.userAuth);
  	}

	render()
		{if (this.state.userAuth) {
	        return <HashRouter>
	                 <Redirect to='home'/>

	        </HashRouter>        
	    }
		return (
				 <HashRouter>
                   <div className="App">
                    <div className="App__Aside">
                     <div className="FormTitle">
                     <Route  path="/home" component={Home} />                     
                     </div>
                     <div className="FormTitle">
                     <Route  path="/logout" component={Logout} /> 
                     </div>
                    </div>
                     <div className="App__Form">
                     <div className="PageSwitcher">
					 
                     <NavLink to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                     <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
				   	<NavLink to="/logout" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item" >Logout</NavLink>
					 </div>

				   <div className="FormTitle">
                    <NavLink exact to="/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink> <NavLink exact to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
                   </div>
						<Redirect from="/" to="/signup" />
						<Route path="/login" render={() => <Login callbackFromParent={this.myCallback} />}/>
						<Route path="/signup" render={() => <Signup callbackFromParent={this.myCallback} />}/>
						 
					</div>
					  </div>

        
				</HashRouter>
			   );
	}

}


export default Routing;