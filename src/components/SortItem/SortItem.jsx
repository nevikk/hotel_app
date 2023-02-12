import classes from './SortItem.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from './../../redux/actions/sortActionCreator';

export default function SortItem({ sort }) {

	const {activeParam, ascType} = useSelector(state => state.sortReducer);

	const dispatch = useDispatch();

	let itemClass = classes.item;

	let isActive = activeParam === sort.id;

	if (isActive) {
		itemClass = itemClass.concat(' ', classes.itemActive);
		if (ascType) {
			itemClass = itemClass.concat(' ', classes.itemAsc);
		} else {
			itemClass = itemClass.concat(' ', classes.itemDesc)
		}
	}

	const clickSortHandler = () => {
		let sortType = true;
		if (isActive) {
			sortType = !ascType;
		}
		dispatch(setSort({activeParam: sort.id, ascType: sortType}));
	}

	return (
		<button onClick={clickSortHandler} className={itemClass}>{sort.name}</button>
	)
}
