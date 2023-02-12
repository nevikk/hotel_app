import classes from './MyDateInput.module.scss';

const MyDateInput = ({ name, value, onChange, min }) => {
	return (
		<>
			<input
				className={classes.input}
				name={name}
				value={value}
				onChange={event => onChange(event)}
				min={min}
				type='date'
			/>
		</>
	);
};

export default MyDateInput;
