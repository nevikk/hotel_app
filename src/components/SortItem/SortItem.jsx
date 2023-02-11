import classes from './SortItem.module.scss';

export default function SortItem({ name }) {
	return (
		<div className={classes.item}>{name}</div>
	)
}
