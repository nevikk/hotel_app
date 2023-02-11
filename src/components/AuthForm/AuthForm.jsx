import { useState } from 'react';
import classes from './AuthForm.module.scss';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';

const AuthForm = () => {
	const [loginValue, setLoginValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [loginError, setLoginError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const navigate = useNavigate();
	const location = useLocation();

	const fromPage = location.state?.from?.pathname || '/';

	const emailTest = value => {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
	};

	const passwordCheck = value => {
		return /[а-яё]/i.test(value.toLowerCase()) || value.length < 8;
	};

	const validateAuthForm = () => {
		let result = true;
		if (emailTest(loginValue)) {
			setLoginError('Неверно введен email');
			result = false;
		} else {
			setLoginError('');
		}

		if (passwordCheck(passwordValue)) {
			setPasswordError(
				'Пароль должен быть минимум 8 символов и не содержать кириллицы',
			);
			result = false;
		} else {
			setPasswordError('');
		}
		return result;
	};

	const submitHandler = event => {
		event.preventDefault();
		if (validateAuthForm()) {
			localStorage.setItem('auth', true);
			navigate(fromPage, { replace: true });
		}
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.body}>
				<h2 className={classes.title}>Simple Hotel Check</h2>
				<form onSubmit={event => submitHandler(event)} className={classes.form}>
					<label className={classes.formItem}>
						<div className={classes.inputTitle}>Логин</div>
						<MyInput
							onFocus={() => setLoginError('')}
							error={loginError}
							value={loginValue}
							onInput={event => setLoginValue(event.target.value)}
							type='text'
							name='login'
						/>
					</label>
					<label className={classes.formItem}>
						<div className={classes.inputTitle}>Пароль</div>
						<MyInput
							onFocus={() => setPasswordError('')}
							error={passwordError}
							value={passwordValue}
							onInput={event => setPasswordValue(event.target.value)}
							name='password'
							type='text'
						/>
					</label>
					<MyButton type='submit'>Войти</MyButton>
				</form>
			</div>
		</div>
	);
};

export default AuthForm;
