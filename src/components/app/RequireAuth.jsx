import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getKey} from "../../utils/mobilePreferences";
import {useEffect, useState} from "react";

const RequireAuth = ({allowedUserTypes}) => {
	const [mobileAuth, setMobileAuth] = useState('');
	const {accessToken, userType} = useSelector((state) => state.auth.userAccess)
	const location = useLocation();

	// get auth mobile preferences
	useEffect(() => {
		getKey('auth')
		.then((result) => {
			setMobileAuth(result);
		})
		.catch((err) => {
			console.error(err);
		});
	}, [])

	return (
		(mobileAuth?.userType || userType) && allowedUserTypes.includes(userType)
			? <Outlet/>
			: (mobileAuth?.accessToken || accessToken)
				? <Navigate to="/unauthorized" state={{from: location}} replace/>
				: <Navigate to="/" state={{from: location}} replace/>
	);
};

export default RequireAuth;