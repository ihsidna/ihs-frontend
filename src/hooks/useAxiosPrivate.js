import {axiosPrivate} from "../api/axios";
import useAuth from "./useAuth";
import {useEffect} from "react"
import useRefreshToken from "./useRefreshToken";

const UseAxiosPrivate = () => {
	const refresh = useRefreshToken();
	const { auth } = useAuth();

	useEffect(() => {
		const requestIntercept = axiosPrivate.interceptors.request.use(
			config => {
				if (!config.headers["Authorization"]) {
					config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
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
					// console.log("refreshing token");
					// console.log(auth);
					const newAccessToken = await refresh();
					prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
					// setAuth(newAccessToken, auth.userType);
					// console.log(auth);
					return axiosPrivate(prevRequest);
				}
				return Promise.reject(error);
			});

		return () => {
			axiosPrivate.interceptors.request.eject(requestIntercept);
			axiosPrivate.interceptors.response.eject(responseIntercept);
		}
	}, [auth, refresh]);

	return axiosPrivate;
};

export default UseAxiosPrivate;