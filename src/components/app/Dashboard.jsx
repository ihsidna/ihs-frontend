import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import BeneficiaryTable from "./beneficiary/BeneficiaryTable";
import AppointmentTable from "./appointment/AppointmentTable";
import {userRoles} from "../../data/enums";
import AllAppointmentTable from "./appointment/AllAppointmentTable";
import Spinner from "./Spinner";

const Dashboard = () => {
	const navigate = useNavigate();
	const axiosPrivate = useAxiosPrivate();
	const location = useLocation();
	const [loading, setLoading] = useState(false)
	const {loggedInUser, setLoggedInUser, beneficiaries, appointments, auth, allAppointments, setAllAppointments, setBeneficiaries, setAppointments, users, setUsers, healthWorkers, setHealthWorkers} = useAuth();

	useEffect( () => {
		let isMounted = true;
		const controller = new AbortController();

		const getLoggedInUser = async () => {
			try {
				const response = await axiosPrivate.get(
					"/user/profile",
					{signal: controller?.signal}
				);

				const loggedInUserObject = {
					id: response.data.data.id,
					firstName: response.data.data.firstName,
					lastName: response.data.data.lastName,
					phone: response.data.data.phone,
					email: response.data.data.email
				}

				isMounted && setLoggedInUser(loggedInUserObject);

				// todo: move the next line to the auth context
				localStorage.setItem("loggedInUser", JSON.stringify(loggedInUserObject))
				setLoading(false)
			} catch (err){
				// if status is 401 then redirect to signin page
				if (err?.response?.status === 401) {
					navigate('/signin', {state: {from: location}, replace: true});
				}
				console.error(err)
			}
		}
		getLoggedInUser();


		return () => {
			isMounted = false;
			controller.abort();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setLoading(true)
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
				localStorage.setItem("allAppointments", JSON.stringify(response.data.data));
				setLoading(false);
			} catch (err){
				console.error(err)
			}
		}

		getAllAppointments();

		return () => {
			isMounted = false;
			controller.abort();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
				localStorage.setItem("beneficiaries", JSON.stringify(response.data.data))
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
				localStorage.setItem("appointments", JSON.stringify(response.data.data))
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setLoading(true)
		let isMounted = true;
		const controller = new AbortController();

		const getUsers = async () => {
			try {
				const response = await axiosPrivate.get(
					"/users/all",
					{
						signal: controller?.signal
					});

				//remove logged in user from userList to be displayed on users screen
				const userList = response.data.data.filter(user => loggedInUser.id !== user.id)
				isMounted && setUsers(userList);
				localStorage.setItem("users", JSON.stringify(userList))
				setLoading(false)

			} catch (err){
				console.error(err)
			}
		}

		getUsers();


		return () => {
			isMounted = false;
			controller.abort();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setLoading(true)
		let isMounted = true;
		const controller = new AbortController();

		const getHealthWorkers = async () => {
			try {
				const response = await axiosPrivate.get(
					"/worker/all",
					{
						signal: controller?.signal
					});

				isMounted && setHealthWorkers(response.data.data);
				localStorage.setItem("healthWorkers", JSON.stringify(response.data.data))
				setLoading(false)
			} catch (err){
				console.error(err)
			}
		}

		getHealthWorkers();


		return () => {
			isMounted = false;
			controller.abort();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="lg:p-20 md:p-10 p-3">
				{loading && <Spinner />}
				<div className="mb-5 mt-2">
					<h2 className="md:text-4xl text-3xl mb-3">Hello {loggedInUser?.firstName}</h2>
					<p className="text-slate-500 text-xl">Welcome to your dashboard</p>
				</div>

				<hr className="my-10"/>

				{/*User Cards*/}
				<div className="grid md:grid-cols- grid-cols-2 md:gap-7 gap-3 my-10">
					<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-blue-shade-50 text-lg shadow-md">
						<p>Your Beneficiaries</p>
						<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">{beneficiaries?.length}</span>Beneficiaries</p>
					</div>
					<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-green-shade-50 text-lg shadow-md">
						<p>Your Appointments</p>
						<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">{appointments?.length}</span>Appointments</p>
					</div>
					{/*<div className="h-40 md:p-5 p-3 rounded-md bg-green-100 text-lg shadow-md">*/}
					{/*	<p>Randoms</p>*/}
					{/*	<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">0</span>Randoms</p>*/}
					{/*</div>*/}
				</div>

				{auth?.userType !== userRoles.User &&
					<>
						{/*Admin Cards*/}
						<div className="grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-3 my-10">
							<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-green-shade-50 text-lg shadow-md">
								<p>Total Users</p>
								<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">{users?.length}</span>Users</p>
							</div>
							<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-blue-shade-50 text-lg shadow-md">
								<p>Total Appointments</p>
								<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">{allAppointments?.length}</span>Appointments</p>
							</div>
							<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-green-shade-50 text-lg shadow-md">
								<p>Total Health Workers</p>
								<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">{healthWorkers?.length}</span>Health Workers</p>
							</div>
						</div>
					</>
				}

				{auth?.userType === userRoles.User &&
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

				{auth?.userType !== userRoles.User &&
					<>
						{/*Appointments Section*/}
						<div className="flex justify-between items-center mt-20">
							<h2 className="md:text-2xl text-xl">All Appointments</h2>
						</div>

						<hr className="my-10"/>

						{/*Appointments Table*/}

						<AllAppointmentTable data={allAppointments} rowsPerPage={10} />
						{/*<AppointmentTable />*/}
					</>
				}
			</div>
		</>
	);
};

export default Dashboard;