import classes from './MyDateInput.module.scss';

const MyDateInput = ({ name, value, onInput, min }) => {
	return (
		<>
			<input
				className={classes.input}
				name={name}
				value={value}
				// onInput={event => onInput(event)}
				min={min}
				type='date'
			/>
		</>
	);
};

export default MyDateInput;
