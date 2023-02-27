import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import BeneficiaryTable from "./beneficiary/BeneficiaryTable";
import AppointmentTable from "./appointment/AppointmentTable";
import {userRoles} from "../../data/enums";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TopBarProgress from "react-topbar-progress-indicator";
import AllAppointmentsTable from "./appointment/AllAppointmentsTable";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserProfile, storeLoggedInUser} from "../../redux/features/authSlice";

TopBarProgress.config({
	barColors: {
		"0": "#05afb0"
	},
	shadowBlur: 5
});

const Dashboard = () => {
	const dispatch = useDispatch();

	const userType = useSelector((state) => state.auth.userAccess.userType);
	const loggedInUser = useSelector((state) => state.auth.loggedInUser);

	const navigate = useNavigate();
	const axiosPrivate = useAxiosPrivate();
	const location = useLocation();
	const [loading, setLoading] = useState(false)
	const [hasLoaded, setHasLoaded] = useState(false);
	const {beneficiaries, setBeneficiaries, appointments, setAllAppointments, setAppointments, metrics, setMetrics} = useAuth();

	// get logged in user
	useEffect(() => {
		dispatch(fetchUserProfile()).unwrap()
		.then((result) => {
			dispatch(storeLoggedInUser(result));
		}).catch((err) => {
			if (err?.response?.status === 401) {
				navigate('/', {state: {from: location}, replace: true});
			}
		})
	}, [dispatch, location, navigate])

	// get loggedin user beneficiaries
	useEffect(() => {
		setLoading(true)
		let isMounted = true;
		const controller = new AbortController();

		const getBeneficiaries = async () => {
			try {
				const response = await axiosPrivate.get(
					"/user/beneficiaries",
					{
						signal: controller?.signal
					});

				isMounted && setBeneficiaries(response.data.data);
				setLoading(false)
			} catch (err){
				console.error(err)
			}
		}

		getBeneficiaries();

		return () => {
			isMounted = false;
			controller.abort();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// get all appointments
	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const getAllAppointments = async () => {
			try {
				const response = await axiosPrivate.get(
					"/admin/appointments",
					{
						signal: controller?.signal
					});

				isMounted && setAllAppointments(response.data.data);
				setHasLoaded(true);
				setLoading(false);
			} catch (err){
				console.error(err)
			}
		}

		if (userType === userRoles.Admin){
			getAllAppointments();
		}

		return () => {
			isMounted = false;
			controller.abort();
		}
	}, [axiosPrivate, setAllAppointments, userType]);

	// get appointments
	useEffect(() => {
		setLoading(true)
		let isMounted = true;
		const controller = new AbortController();

		const getAppointments = async () => {
			try {
				const response = await axiosPrivate.get(
					"/user/appointments",
					{
						signal: controller?.signal
					});

				isMounted && setAppointments(response.data.data);
				setLoading(false)
			} catch (err){
				console.error(err)
			}
		}

		getAppointments();

		return () => {
			isMounted = false;
			controller.abort();
		}
	}, [axiosPrivate, setAppointments]);

	// get metrics
	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const getMetrics = async () => {
				setLoading(true);
			try {
				const response = await axiosPrivate.get(
					"/metrics",
					{
						signal: controller?.signal
					});

				isMounted && setMetrics(response.data.data);
				setLoading(false)
			} catch (err){
				console.error(err)
			}
		}

		if (userType === userRoles.Admin) {
			getMetrics();
		}

		return () => {
			isMounted = false;
			controller.abort();
		}
	}, [axiosPrivate, setMetrics, userType]);

	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>Dashboard | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<div className="lg:px-20 lg:py-4 md:px-10 p-3">
					{loading && <TopBarProgress />}
					<div className="mb-5 lg:mt-10">
						<h2 className="md:text-4xl text-3xl mb-3">Hello {loggedInUser?.firstName}</h2>
						<p className="text-slate-500 text-xl">Welcome to your dashboard</p>
					</div>

					<hr className="my-10"/>

					{/*User Cards*/}
					<div className="grid md:grid-cols- grid-cols-2 md:gap-7 gap-3 my-10">
						<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-blue-shade-50 md:text-lg shadow-md flex flex-col justify-between">
							<p>Your Beneficiaries</p>
							<p className="mb-4"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">{beneficiaries ? beneficiaries?.length : 0}</span>Beneficiaries</p>
						</div>
						<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-green-shade-50 md:text-lg shadow-md flex flex-col justify-between">
							<p>Your Appointments</p>
							<p className="mb-4"><span className="font-semibold md:text-3xl text-xl pr-0.5 md:pr-2">{appointments ? appointments?.length : 0}</span>Appointments</p>
						</div>
					</div>

					{userType !== userRoles.User &&
						<>
							{/*Admin Cards*/}
							<div className="grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-3 my-10">
								<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-green-shade-50 md:text-lg shadow-md flex flex-col justify-between">
									<p>Total Users</p>
									<p className="mb-4"><span className="font-semibold md:text-3xl text-xl pr-0.5 md:pr-2">{metrics ? metrics?.totalUsers : 0}</span>Users</p>
								</div>
								<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-blue-shade-50 md:text-lg shadow-md flex flex-col justify-between">
									<p>Total Appointments</p>
									<p className="mb-4"><span className="font-semibold md:text-3xl text-xl pr-0.5 md:pr-2">{metrics ? metrics?.totalAppointments : 0}</span>Appointments</p>
								</div>
								<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-green-shade-50 md:text-lg shadow-md flex flex-col justify-between">
									<p>Total Health Workers</p>
									<p className="mb-4"><span className="font-semibold md:text-3xl text-xl pr-0.5 md:pr-2">{metrics ? metrics?.totalHealthWorkers : 0}</span>Health Workers</p>
								</div>
							</div>
						</>
					}

					{userType === userRoles.User &&
						<>
							{/*Beneficiaries Section*/}
							<div className="flex justify-between items-center mt-20">
								<h2 className="md:text-2xl text-xl">Your Beneficiaries</h2>
								<button className="py-3 md:px-4 px-2" onClick={() => navigate('/beneficiaries/addbeneficiary')}>Add Beneficiary</button>
							</div>

							<hr className="my-10"/>

							{/*Beneficiaries Table*/}
							<BeneficiaryTable />

							{/*Appointments Section*/}
							<div className="flex justify-between items-center mt-20">
								<h2 className="md:text-2xl text-xl">Your Appointments</h2>
								<button className="py-3 md:px-4 px-2" onClick={() => navigate('/appointments/bookappointment')}>Book Appointments</button>
							</div>

							<hr className="my-10"/>

							{/*Appointments Table*/}
							<AppointmentTable />
						</>
					}

					{userType !== userRoles.User &&
						<>
							{/*Appointments Section*/}
							<div className="flex justify-between items-center mt-20">
								<h2 className="md:text-2xl text-xl">All Appointments</h2>
							</div>

							<hr className="my-10"/>

							{/*Appointments Table*/}

							{hasLoaded && <AllAppointmentsTable />}
							{/*<AppointmentTable />*/}
						</>
					}
				</div>
			</>
		</HelmetProvider>
	);
};

export default Dashboard;