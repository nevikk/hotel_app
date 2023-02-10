import { Navigate, useLocation } from "react-router";

const RequireAuth = ({ children }) => {
	
	const location = useLocation();
	const auth = localStorage.getItem('auth');

	if (auth !== 'true') {
		return <Navigate to="/auth" state={{from: location}} />
	}
	return children;
}

export default RequireAuth;
