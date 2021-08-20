import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Profile from './components/pages/Profile';
import Movies from './components/pages/Movies';

export default function PrivateRoute(props) {
	return (
		<div>
			<Switch>
				<Route exact path={`${props.match.path}/profile`} component={Profile}/>
				<Route exact path={props.match.path} render={props=> (
					<Redirect to={{ pathname: `${props.match.path}/profile` }} />
				)} />
			</Switch>
		</div>
	);
}