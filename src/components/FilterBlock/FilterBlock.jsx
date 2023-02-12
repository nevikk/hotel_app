import { useState } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import MyDateInput from '../UI/MyDateInput/MyDateInput';
import MyInput from '../UI/MyInput/MyInput';
import classes from './FilterBlock.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './../../redux/actions/hotelsActionCreator';
export default function FilterBlock() {

	const { filter, day } = useSelector(state => state.hotelsReducer);
	const {cities} = useSelector(state => state.citiesReducer);
	const dispatch = useDispatch();

	// Состояние значений и ошибок полей фильтра
	const [locationValue, setLocationValue] = useState('Москва');
	const [errorLocationValue, setErrorLocationValue] = useState('');
	const [errorDayValue, setErrorDayValue] = useState('');
	const [dayValue, setDayValue] = useState(String(day));
	const [dateValue, setDateValue] = useState(filter.checkIn);

	const minDate = new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' }).split('.').reverse().join('-');


	const submitHandler = (event) => {
		event.preventDefault();
		// Если в объекте городов есть элемент с ключом, в виде российского названия, то город есть в базе
		if (!cities[locationValue.toLowerCase().replaceAll(' ', '')]) {
			setErrorLocationValue('Город не найден');
			return false;
		}
		if (dayValue < 1) {
			setErrorDayValue('Количество должно быть больше 0');
			return false;
		}

		let dateCheckOut = new Date(dateValue);


		// Получаем дату выезда из отеля
		dateCheckOut.setDate(dateCheckOut.getDate() + parseInt(dayValue));

		// Привотим к нужному виду строку даты выезда
		const checkOut = dateCheckOut.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' }).split('.').reverse().join('-');

		// Формируем объект фильтра
		const filter = {location: cities[locationValue.toLowerCase().replaceAll(' ', '')], checkIn: dateValue, checkOut}


		dispatch(setFilter({filter, day: dayValue, locationRu: locationValue}));
	}

	// Запрещаем вводить в поле количества дней что-либо, кроме чисел
	const inputDayHandler = (event) => {
		if (!event.target.value.match(/[^0-9]/g)) {
			setDayValue(event.target.value);
		}
	}

	return (
		<>
			<div className={classes.body}>
				<form onSubmit={(event) => submitHandler(event)} className={classes.form}>
					<label className={classes.formItem}>
						<div className={classes.itemTitle}>Локация</div>
						<MyInput error={errorLocationValue} onFocus={() => setErrorLocationValue('')} value={locationValue} onInput={(event) => setLocationValue(event.target.value)} type='text' name="location" />
					</label>
					<label className={classes.formItem}>
						<div className={classes.itemTitle}>Дата заселения</div>
						<MyDateInput value={dateValue} onChange={event => {setDateValue(event.target.value)}} name="settlement-date" min={minDate} />
					</label>
					<label className={classes.formItem}>
						<div className={classes.itemTitle}>Количество дней</div>
						<MyInput error={errorDayValue} onFocus={() => {setErrorDayValue('')}} value={dayValue} onInput={(event) => inputDayHandler(event)} type='text' name="days" />
					</label>
					<MyButton type='submit'>Найти</MyButton>
				</form>
			</div>
		</>
	)
}
