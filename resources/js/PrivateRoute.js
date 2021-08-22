import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";

export default function PrivateRoute(props) {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/search' component={Movies}/>

			</Switch>
		</div>
	);
}