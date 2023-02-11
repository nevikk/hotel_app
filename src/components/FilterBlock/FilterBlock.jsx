import { useState } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import MyDateInput from '../UI/MyDateInput/MyDateInput';
import MyInput from '../UI/MyInput/MyInput';
import classes from './FilterBlock.module.scss';
export default function FilterBlock() {

	const todayDate = new Date();
	const todayDateString = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1 < 10 ? '0'.concat(String(todayDate.getMonth() + 1)) : todayDate.getMonth() + 1) + "-" + todayDate.getDate();

	const submitHandler = (event) => {
		event.preventDefault();
	}

	return (
		<>
			<div className={classes.body}>
				<form onSubmit={(event) => submitHandler(event)} className={classes.form}>
					<label className={classes.formItem}>
						<div className={classes.itemTitle}>Локация</div>
						<MyInput type='text' name="location" />
					</label>
					<label className={classes.formItem}>
						<div className={classes.itemTitle}>Дата заселения</div>
						<MyDateInput name="settlement-date" min={todayDateString} />
					</label>
					<label className={classes.formItem}>
						<div className={classes.itemTitle}>Количество дней</div>
						<MyInput type='text' name="days" />
					</label>
					<MyButton type='submit'>Найти</MyButton>
				</form>
			</div>
		</>
	)
}
