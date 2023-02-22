import axios from "../api/axios";
import {storeAuthInfo} from "../redux/features/authSlice";
import {useDispatch, useSelector} from "react-redux";

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const oldAccessToken = useSelector((state) => state.auth.userAccess.accessToken);


	return async () => {
		const response = await axios.get("/refresh",
			{withCredentials: true}
		);

		if (oldAccessToken) {
			await dispatch(storeAuthInfo({
				userType: localStorage.getItem("userType"),
				accessToken: response.data.data
			}))
		}


		// return an object with accessToken and userType
		return response.data.data;
	};
}

export default useRefreshToken;