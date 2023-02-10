import React from 'react';
import { useNavigate } from 'react-router';

const HotelPage = () => {

	const navigation = useNavigate();

	const exitHandler = () => {
		localStorage.setItem('auth', false);
		navigation('/', {replace: true})
	}

	return (
		<>
		<div>
			HotelPage
		</div>
		<button onClick={exitHandler} >Exit</button>
		</>
	);
}

export default HotelPage;
