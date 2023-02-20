import axios from "../api/axios";
import {storeAuthInfo} from "../redux/features/authSlice";
import {useDispatch} from "react-redux";

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const refresh = async () => {
		const response = await axios.get("/refresh",
			{ withCredentials: true }
		);

		dispatch(storeAuthInfo({
			userType: localStorage.getItem("userType"),
			accessToken: response.data.data
		}))

		// return an object with accessToken and userType
		return response.data.data;
	}

	return refresh;
}

export default useRefreshToken;