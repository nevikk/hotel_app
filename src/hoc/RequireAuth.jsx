import { Navigate, useLocation } from "react-router";

const RequireAuth = ({ children }) => {

	// Компонент для проверки авторизации
	// Если авторизован, то направляет на страницу, с которой попали на страницу авторизации
	
	const location = useLocation();
	const auth = localStorage.getItem('auth');

	if (auth !== 'true') {
		return <Navigate to="/auth" state={{from: location}} />
	}
	return children;
}

export default RequireAuth;
