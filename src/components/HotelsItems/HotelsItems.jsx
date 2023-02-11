import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHotels } from '../../redux/actions/hotelsActionCreator';
import classes from './HotelsItems.module.scss';

export default function HotelsItems() {


	return (
		<div className={classes.body}>HotelsItems</div>
	)
}
