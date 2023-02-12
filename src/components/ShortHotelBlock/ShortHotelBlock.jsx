import classes from './ShortHotelBlock.module.scss';
import { formatPrice, declOfNum, formatDate } from '../../helpers/index';
import { useDispatch } from 'react-redux';
import { removeFromFavorite } from './../../redux/actions/hotelsActionCreator';

export default function ShortHotelBlock({ hotel }) {
	const { hotelName, priceAvg, stars, checkIn, day } = hotel;

	const dispatch = useDispatch();

	const startDate = formatDate(checkIn);
	const priceString = formatPrice(priceAvg);

	const days = String(day).concat(' ', declOfNum(day, ['день', 'дня', 'дней']));

	const starsArray = [];
	// Формируем массив звездочек золотого и серого цвета
	for (let i = 0; i < 5; i++) {
		starsArray.push(
			i < stars ? (
				<div
					key={i}
					className={classes.star.concat(' ', classes.starGold)}></div>
			) : (
				<div key={i} className={classes.star}></div>
			),
		);
	}

	const clickHandler = () => {
		dispatch(removeFromFavorite(hotel.hotelId));
	}

	return (
		<div className={classes.block}>
			<div className={classes.head}>
				<div className={classes.title}>{hotelName}</div>
				<button onClick={clickHandler} className={classes.icon}></button>
			</div>
			<div className={classes.dateInfo}>
				<div className={classes.date}>{startDate}</div>
				<div className={classes.days}>{days}</div>
			</div>
			<div className={classes.footer}>
				<div className={classes.rating}>{starsArray}</div>
				<div className={classes.priceName}>
					Price: <span className={classes.price}>{priceString}</span>
				</div>
			</div>
		</div>
	);
}
