import classes from './MyInput.module.scss';

const MyInput = ({
	type,
	placeholder,
	name,
	value,
	onInput,
	error,
	onFocus,
}) => {
	const inputClass = error
		? classes.input.concat(' ', classes.inputError)
		: classes.input;

	return (
		<>
			<input
				onFocusCapture={onFocus}
				className={inputClass}
				name={name}
				value={value}
				onInput={event => onInput(event)}
				type={type}
				placeholder={placeholder}
			/>
			{error && <div className={classes.error}>{error}</div>}
		</>
	);
};

export default MyInput;
