import { useNavigate } from 'react-router';
import classes from './Header.module.scss';

export default function Header() {

	const navigation = useNavigate();
	
	const exitHandler = () => {
		localStorage.setItem('auth', false);
		navigation('/', {replace: true})
	}

	return (
		<>
			<header className={classes.header}>
				<div className={classes.title}>Simple Hotel Check</div>
				<button className={classes.exitBtn} onClick={exitHandler} >Выйти</button>
			</header>
		</>
	)
}
