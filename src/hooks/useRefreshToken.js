import axios from "../api/axios";
import {revertAll, storeAuthInfo} from "../redux/features/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {Preferences} from "@capacitor/preferences";
import {getKey, removeKey} from "../utils/mobilePreferences";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const useRefreshToken = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const oldAccessToken = useSelector((state) => state.auth.userAccess.accessToken);
	const [mobileAuth, setMobileAuth] = useState('');

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

	const setKey = async (key, data) => {
		try {
			await Preferences.set({
				key: key,
				value: JSON.stringify(data),
			});
		} catch (error) {
			console.error(`Error setting auth info: ${error}`);
		}
	};

	return async () => {
		try{
			const response = await axios.get("/refresh",
				{withCredentials: true}
			);

			const result = {
				userType: mobileAuth?.userType,
				accessToken: response?.data?.data
			}

			if (mobileAuth?.accessToken || oldAccessToken) {
				await dispatch(storeAuthInfo({
					userType: localStorage.getItem("userType"),
					accessToken: response?.data?.data
				}))

				await setKey('auth', result)

			}

			// return an object with accessToken and userType
			return response.data.data;
		} catch (e) {
			console.error('refresh error', e)
				navigate('/')
				await dispatch(revertAll())
				await localStorage.clear();
				await removeKey('auth');
				await removeKey('loggedInUser')
		}

	};
}

export default useRefreshToken;