import { Route, Routes } from 'react-router';
import RequireAuth from './hoc/RequireAuth';
import AuthPage from './pages/AuthPage';
import HotelPage from './pages/HotelPage';

function App() {
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
