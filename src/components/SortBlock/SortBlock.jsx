import SortItem from '../SortItem/SortItem';
import classes from './SortBlock.module.scss';

export default function SortBlock() {
	const initial = ['Рейтинг', 'Цена'];

	return (
		<>
			<div className={classes.row}>
				{initial.map((sort, index) => (
					<SortItem key={index} name={sort} />
				))}
			</div>
		</>
	);
}
