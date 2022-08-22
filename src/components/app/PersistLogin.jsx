import {Outlet} from 'react-router-dom';
import {useState, useEffect} from 'react';
import useRefreshToken	 from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";
import Spinner from "./Spinner";

const PersistLogin = () => {
	const [loading, setLoading] = useState(true);
	const refresh = useRefreshToken();
	const {auth, persist} = useAuth();

	useEffect(() => {
		let isMounted = true;

		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err){
				console.error(err);
			} finally {
				setLoading(false);
			}
		}

		// !auth?.accessToken && persist ? verifyRefreshToken() : setLoading(false);
		!auth?.accessToken ? verifyRefreshToken() : setLoading(false);

		if (isMounted) {
			return () => {
				isMounted = false;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log(`isLoading: ${loading}`)
		console.log(`accTKN: ${JSON.stringify(auth?.accessToken)}`)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading])

	return (
		<>
			{!persist
				? <Outlet />
				: loading
					? <Spinner />
					: <Outlet />
			}

		</>
	);
}

export default PersistLogin;