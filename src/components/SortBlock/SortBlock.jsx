import SortItem from '../SortItem/SortItem';
import classes from './SortBlock.module.scss';
import { useSelector } from 'react-redux';

export default function SortBlock() {

	const {params} = useSelector(state => state.sortReducer);

	return (
		<>
			<div className={classes.row}>
				{params.map((sort, index) => (
					<SortItem key={index} sort={sort} />
				))}
			</div>
		</>
	);
}
