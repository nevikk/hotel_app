import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../redux/actions/hotelsActionCreator';
import HotelsItems from '../HotelsItems/HotelsItems';
import MyCarousel from '../UI/MyCarousel/MyCarousel';
import classes from './HotelBlock.module.scss';

export default function HotelBlock() {
	const { isLoading, error } = useSelector(state => state.hotelsReducer);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHotels());
	}, []);

	return (
		<div className={classes.body}>
			{isLoading ? (
				<div>Загрузка</div>
			) : error ? (
				<div>{error}</div>
			) : (
				<>
					<div className={classes.header}>
						<div className={classes.titleRow}>
							<h1 className={classes.title}>Отели</h1>
							<div className={classes.city}>Москва</div>
						</div>
						<div className={classes.date}>07 июля 2020</div>
					</div>
					<div className={classes.carouselContainer}>
						<MyCarousel />
					</div>
					<HotelsItems />
				</>
			)}
		</div>
	);
}
