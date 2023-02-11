import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import RequireAuth from './hoc/RequireAuth';
import AuthPage from './pages/AuthPage';
import HotelPage from './pages/HotelPage';
import { getCities } from './redux/actions/citiesActionCreator';

function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCities());
	}, [])

	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<RequireAuth>
							<HotelPage />
						</RequireAuth>
					}
				/>
				<Route path='/auth' element={<AuthPage />} />
			</Routes>
		</div>
	);
}

export default App;
