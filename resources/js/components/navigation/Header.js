import React,{useEffect} from 'react';
import {AppBar, CssBaseline, Toolbar, Typography, Button} from '@material-ui/core';
import {LogoutAction} from '../../redux/actions/AuthActions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory,Link} from 'react-router-dom'; 
import {useStyles} from '../../styles/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SearchIcon from '@material-ui/icons/Search';

export default function Header(props) {
	const history = useHistory();
	const classes = useStyles(); 
	const dispatch = useDispatch();
	const authResponse = useSelector(state=>state.userAuth.authResponse);
	const logOut = () => {
		dispatch(LogoutAction());
		history.push("/user/login");
	}
	const login = () => {
		history.push("/user/login");
	}

	const gotToContact = (e, url) => {
		history.push('/contact');
	}

	const searchMovie = (e, url) => {
		history.push("/search");
	}

	const token = localStorage.getItem('user-token');
	useEffect(() => {
		if(authResponse !== "" && authResponse.success === true){
		alert(authResponse.message);
		localStorage.removeItem('user-token');
	} 
	return () => {
	};
	},[authResponse])
	return (
		<div className={classes.root}>
			<CssBaseline />
				<AppBar position="fixed" className={classes.header}>
				<Toolbar>
					<Typography variant="h6"  className={classes.title}>
						<Link to="/" className={classes.link}> MOVIE APP</Link>
					</Typography>
					
					<Button color="inherit" onClick={e => searchMovie(e)} endIcon={<SearchIcon />}>Search</Button> 
					{
					token !== null && token !== "" ?
					<div>

					<Button color="inherit" onClick={e => gotToContact(e, '/user')} endIcon={<AccountCircleIcon />}>Contact</Button> 
					<Button color="inherit" onClick={e => logOut(e, '/user')} endIcon={<KeyboardReturnIcon />}>Logout</Button> 

					</div>:
					<Button color="inherit" onClick={login}>Login</Button>
					}
				</Toolbar>
			</AppBar>
		</div>
	);
}