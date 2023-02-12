import { useEffect } from 'react';
import FavoritesBlock from '../FavoritesBlock/FavoritesBlock';
import FilterBlock from '../FilterBlock/FilterBlock';
import HotelBlock from '../HotelsBlock/HotelBlock';
import classes from './Hotels.module.scss';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { getCities } from './../../redux/actions/citiesActionCreator';

export default function Hotels() {

	const dispatch = useDispatch();

	useEffect(() => {
		// При первом рендере отправляем запрос на получение городов для формирования объекта вида
		// {
		// русскоеназвание: Английское название
		// }
		dispatch(getCities());
	}, [])


	return (
		<>
		<div className={classes.wrapper}>
			<Header />
			<div className={classes.container}>
				<div className={classes.leftBlock}>
					<FilterBlock />
					<FavoritesBlock />
				</div>
				<div className={classes.rightBlock}>
					<HotelBlock />
				</div>
			</div>
		</div>
		</>
	);
}
