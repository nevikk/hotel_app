import ShortHotelBlock from '../ShortHotelBlock/ShortHotelBlock';
import SortBlock from '../SortBlock/SortBlock';
import classes from './FavoritesBlock.module.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function FavoritesBlock() {

	// Массив избранных отелей
	const { favorites } = useSelector(state => state.hotelsReducer);

	// Параметры сортировки
	const {activeParam, ascType} = useSelector(state => state.sortReducer);

	// Создаем состояние отсортированного массива
	const [sortedArray, setSortedArray] = useState([...favorites]);

	useEffect(() => {
		// При каждом изменении массива избранное или параметров сортировки сортируем массив
		let sortedArray = sortArray([...favorites]);
		setSortedArray(sortedArray);
	}, [activeParam, ascType, favorites])

	function sortArray(arrayToSort) {
		return arrayToSort.sort((hotelOne, hotelTwo) => {
			let result = 0;
			if (ascType) {
				result = (parseInt(hotelOne[activeParam]) - parseInt(hotelTwo[activeParam]));
			} else {
				result = (parseInt(hotelTwo[activeParam]) - parseInt(hotelOne[activeParam]));
			}
			return result;
		})
	}

	return (
		<>
			<div className={classes.body}>
				<h3 className={classes.title}>Избранное</h3>
				{sortedArray.length > 0 ? (
					<>
						<SortBlock />
						<div className={classes.favItems}>
							{sortedArray.map(hotel => (
								<ShortHotelBlock key={hotel.hotelId} hotel={hotel} />
							))}
						</div>
					</>
				) : (
					<div className={classes.empty}>Список избранного пуст</div>
				)}
			</div>
		</>
	);
}
