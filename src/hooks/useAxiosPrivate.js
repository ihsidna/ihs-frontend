import {axiosPrivate} from "../api/axios";
import {useEffect, useState} from "react"
import useRefreshToken from "./useRefreshToken";
import {useDispatch, useSelector} from "react-redux";
import {getKey, removeKey} from "../utils/mobilePreferences";
import {useNavigate} from "react-router-dom";
import {revertAll} from "../redux/features/authSlice";

const UseAxiosPrivate = () => {
	const accessToken = useSelector((state) => state.auth.userAccess.accessToken);
	const [mobileAuth, setMobileAuth] = useState('');

	const refresh = useRefreshToken();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		getKey('auth')
		.then((result) => {
			setMobileAuth(result);
		})
		.catch((err) => {
			console.error(err);
		});
	}, [])

	useEffect(() => {
		const requestIntercept = axiosPrivate.interceptors.request.use(
			config => {
				if (!config.headers["Authorization"]) {
					config.headers["Authorization"] = `Bearer ${accessToken || mobileAuth?.accessToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
			);

		const responseIntercept = axiosPrivate.interceptors.response.use(
			response => response,
			async (error) => {
				const prevRequest = error?.config;
				if (error?.response?.status === 403 && !prevRequest?.sent) {
					prevRequest.sent = true;

					let newAccessToken;

					try {
						newAccessToken = await refresh();

						if (newAccessToken === undefined || newAccessToken === null) {
							return Promise.reject(error);
						}

						prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
						return axiosPrivate(prevRequest);

					} catch (e) {
						// handle the error here, for example, by redirecting the user to the login page
						await dispatch(revertAll());
						localStorage.clear();
						await removeKey('auth');
						await removeKey('loggedInUser')

						navigate('/');					}
				}
				return Promise.reject(error);
			});

		return () => {
			axiosPrivate.interceptors.request.eject(requestIntercept);
			axiosPrivate.interceptors.response.eject(responseIntercept);
		}
	}, [accessToken, mobileAuth?.accessToken, refresh, dispatch, navigate]);

	return axiosPrivate;
};

export default UseAxiosPrivate;