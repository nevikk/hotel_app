import ShortHotelBlock from '../ShortHotelBlock/ShortHotelBlock';
import SortBlock from '../SortBlock/SortBlock';
import classes from './FavoritesBlock.module.scss';

export default function FavoritesBlock() {
	return (
		<>
			<div className={classes.body}>
				<h3 className={classes.title}>Избранное</h3>
				<SortBlock />
				<ShortHotelBlock />
			</div>
		</>
	)
}
