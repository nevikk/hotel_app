import {useState} from 'react';
import classes from './HotelsItem.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate } from '../../helpers';
import { formatPrice, declOfNum } from '../../helpers/index';
import { addFavorite } from '../../redux/actions/hotelsActionCreator';
import { removeFromFavorite } from './../../redux/actions/hotelsActionCreator';
export default function HotelsItem({ hotel }) {

	const { hotelName, priceAvg, stars } = hotel;

	const { day, favorites } = useSelector(state => state.hotelsReducer);
	const { checkIn } = useSelector(state => state.hotelsReducer.filter);

	const dispatch = useDispatch();

	// Проверяем находится ли данный отель в списке избранного
	let isFavorite = false;
	let findItem = favorites.find(hotelFav => {
		return hotel.hotelId === hotelFav.hotelId;
	})
	if (findItem) {
		isFavorite = true;
	}
	

	// Если отель в избранном, то добавляем кнопке класс favoriteSvgActive
	const favBtnClass = isFavorite ? classes.favoriteSvg.concat(' ', classes.favoriteSvgActive) : classes.favoriteSvg;

	const startDate = formatDate(checkIn);
	const priceString = formatPrice(priceAvg);

	const days = String(day).concat(' ', declOfNum(day, ['день', 'дня', 'дней']));

	const starsArray = [];

	// Формируем массив из звездочек золотого и серого цвета
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

	const addFavoriteHandler = () => {
		if (!isFavorite) {
			dispatch(addFavorite(hotel));
		} else {
			dispatch(removeFromFavorite(hotel.hotelId));
		}
	}


	return (
		<div className={classes.body}>
			<div className={classes.icon}></div>
			<div className={classes.info}>
				<div className={classes.title}>{hotelName}</div>
				<div className={classes.dateInfo}>
					<div className={classes.date}>{startDate}</div>
					<div className={classes.day}>{days}</div>
				</div>
				<div className={classes.stars}>{starsArray}</div>
			</div>
			<div className={classes.rightColumn}>
				<button onClick={addFavoriteHandler} className={classes.favoriteIcon}>
					<svg
						className={favBtnClass}
						viewBox='0 0 23 20'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
				<div className={classes.price}>
					Price: <span className={classes.priceNumber}>{priceString} ₽</span>
				</div>
			</div>
		</div>
	);
}
