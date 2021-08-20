import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import Contact from "./components/pages/Contact";
import TemporaryDrawer from "./components/pages/TemporaryDrawer";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import PrivateRoute from './PrivateRoute';
import {Guard} from './Guard';
import Nav from './components/navigation/Nav';


function Routes(){
	return (
		<>
			<Nav/>
			<Switch>
				<Route exact path="/" render={props => (
					<Redirect to={{ pathname: '/home' }} />
				)}/>
				
				<Route path="/home" component={Home}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/search" component={Movies}/>
				<Route path="/user/login" component={Login}/>
				<Route path="/user/register" component={Register}/> 
				<Route path="/movies" component={Movies}/>
				<Route path="/drawer" component={TemporaryDrawer}/> 
				
				{/*Redirect if not authenticated */} 
				<Guard path="/user" token="user-token" routeRedirect="/user/login" component={PrivateRoute}/> 

			</Switch>
		</>
	);
}
export default Routes;