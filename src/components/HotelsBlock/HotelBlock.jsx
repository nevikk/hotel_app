import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../../helpers';
import { getHotels } from '../../redux/actions/hotelsActionCreator';
import HotelsItem from '../HotelsItem/HotelsItem';
import MyCarousel from '../UI/MyCarousel/MyCarousel';
import classes from './HotelBlock.module.scss';

export default function HotelBlock() {
	const { isLoading, error, images: imagesForCarousel, hotels, filter, locationRu } = useSelector(state => state.hotelsReducer);
	const dispatch = useDispatch();

	const {checkIn} = filter;

	const checkInString = formatDate(checkIn);

	useEffect(() => {
		// При первой отрисовке отправится запрос на получение отелей с дефолтными данными, потом при каждом изменении объекта фильтр в hotelReducer
		dispatch(getHotels());
	}, [filter]);

	return (
		<div className={classes.body}>
			<div className={classes.header}>
				<div className={classes.titleRow}>
					<h1 className={classes.title}>Отели</h1>
					<div className={classes.city}>{locationRu}</div>
				</div>
				<div className={classes.date}>{checkInString}</div>
			</div>
			{isLoading ? (
				<div>Загрузка</div>
			) : error ? (
				<div>{error}</div>
			) : (
				<>
					<div className={classes.carouselContainer}>
						<MyCarousel images={imagesForCarousel} />
					</div>
					<div className={classes.hotelItems}>
						{hotels.map(hotel => (
							<HotelsItem key={hotel.hotelId} hotel={hotel} />
						))}
					</div>
				</>
			)}
		</div>
	);
}
