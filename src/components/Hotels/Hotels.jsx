import FavoritesBlock from '../FavoritesBlock/FavoritesBlock';
import FilterBlock from '../FilterBlock/FilterBlock';
import HotelBlock from '../HotelsBlock/HotelBlock';
import classes from './Hotels.module.scss';

import Header from '../Header/Header';

export default function Hotels() {

	


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
