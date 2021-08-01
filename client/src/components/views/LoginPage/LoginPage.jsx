import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

const LoginPage = (props) => {
	const dispatch = useDispatch();

	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value);
	}
	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);
	}
	const onSubmitHandler = (event) => {
		event.preventDefault();

		let body = {
			email: Email,
			password: Password
		}
		
		dispatch(loginUser(body))
		.then(response => {
			if (response.payload.loginSuccess) {
				props.history.push('/')
			} else {
				alert('Error')
			};
		});
	 };
	return(
		<div className={styles.loginBox}>
			<form className={styles.loginForm} onSubmit={onSubmitHandler}>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" placeholder="email" value={Email} onChange={onEmailHandler} />
				<label htmlFor="password">Password</label>
               	<input  type="password" id="password" placeholder="password" value={Password} onChange={onPasswordHandler} />
				<br />
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	)
};

export default LoginPage;