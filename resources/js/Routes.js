import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import PrivateRoute from './PrivateRoute';
import {Guard} from './Guard';
import Header from './components/navigation/Header';


function Routes(){
	return (
		<>
			<Header/>
			<Switch>
				
				<Route path="/user/login" component={Login}/>
				<Route path="/user/register" component={Register}/> 
				<Route path="/contact" component={Contact}/>
				
				{/*Redirect if not authenticated */} 
				<Guard path="/" token="user-token" routeRedirect="/user/login" component={PrivateRoute}/> 

			</Switch>
		</>
	);
}
export default Routes;