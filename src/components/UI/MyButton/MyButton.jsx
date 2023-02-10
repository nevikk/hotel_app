import classes from './MyButton.module.scss';

const MyButton = ({ children, type, onClick }) => {
	return (
		<button className={classes.button} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default MyButton;
