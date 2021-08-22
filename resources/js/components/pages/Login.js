import React,{useState} from 'react';
import { Button, TextField, Card } from "@material-ui/core";
	import {useStyles} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction} from '../../redux/actions/AuthActions';
import {useHistory,Link} from 'react-router-dom'; 

function Login() {

	const history = useHistory();
	const classes = useStyles();
	const dispatch = useDispatch();

	const [fields, setState] = useState({
		email: "",
		password: "",
	});

	const handleFieldChange = e => {
		setState({
		...fields,
		[e.target.id] : e.target.value
		})
	}
	const UserLogin = (e) => {
		e.preventDefault();
		dispatch(LoginAction(fields, history));
	};

	
	return (
		<div>
			<div className={classes.centerItem}>
				<Card>
					<h2><b>Login</b></h2>
					<form onSubmit={UserLogin}>

						<TextField type="email" className={classes.fullWidth} required margin="normal" variant="outlined" label="email" id="email" value={fields.email} onChange={handleFieldChange}/>


						<TextField className={classes.fullWidth} label="Password" type="password" margin="normal" variant="outlined" required id="password" value={fields.password} onChange={handleFieldChange}/>

						<Button type="submit" className={classes.fullWidth} variant="contained" color="primary" >
							<b>Login</b>
						</Button>
						<br />
						<br />
						<div className={classes.linkContainer}>
							<Link to="/user/register">Register Here</Link>
						</div>

						<div className={classes.linkContainer}>
							<Link to="/home">Back To Home Page </Link>
						</div>
					</form>
				</Card>
			</div>
		</div>
	)
}
export default Login