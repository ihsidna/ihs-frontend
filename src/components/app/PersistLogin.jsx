import {Outlet} from 'react-router-dom';
import {useState, useEffect} from 'react';
import useRefreshToken	 from "../../hooks/useRefreshToken";
import TopBarProgress from "react-topbar-progress-indicator";
import {useSelector} from "react-redux";

TopBarProgress.config({
	barColors: {
		"0": "#05afb0"
	},
	shadowBlur: 5
});

const PersistLogin = () => {
	const accessToken = useSelector((state) => state.auth.userAccess.accessToken);
	const persist = useSelector((state) => state.auth.userAccess.persist);

	const [loading, setLoading] = useState(true);
	const refresh = useRefreshToken();

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
		!accessToken ? verifyRefreshToken() : setLoading(false);

		if (isMounted) {
			return () => {
				isMounted = false;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{!persist
				? <Outlet />
				: loading
					? <TopBarProgress />
					: <Outlet />
			}

		</>
	);
}

export default PersistLogin;