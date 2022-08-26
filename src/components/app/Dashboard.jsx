import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import BeneficiaryTable from "./beneficiary/BeneficiaryTable";
import AppointmentTable from "./appointment/AppointmentTable";


const Dashboard = () => {
	const navigate = useNavigate();
	const axiosPrivate = useAxiosPrivate();
	const location = useLocation();
	const {loggedInUser, setLoggedInUser} = useAuth();

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
				}

				isMounted && setLoggedInUser(loggedInUserObject);

				// todo: move the next line to the auth context
				localStorage.setItem("loggedInUser", JSON.stringify(loggedInUserObject))
			} catch (err){
				// if status is 401 then redirect to signin page
				if (err?.response?.status === 401) {
					navigate('/signin', {state: {from: location}, replace: true});
				}
				console.error(err)
			}
		}

		getLoggedInUser()

		return () => {
			isMounted = false;
			controller.abort();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
		<>
			<div className="lg:p-20 md:p-10 p-3">
				<div className="mb-5 mt-2">
					<h2 className="md:text-4xl text-3xl mb-3">Hello {loggedInUser?.firstName}</h2>
					<p className="text-slate-500 text-xl">Welcome to your dashboard</p>
				</div>

				<hr className="my-10"/>

				{/*User Cards*/}
				<div className="grid md:grid-cols- grid-cols-2 md:gap-7 gap-3 my-10">
					<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-blue-shade-50 text-lg shadow-md">
						<p>Beneficiaries</p>
						<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">0</span>Beneficiaries</p>
					</div>
					<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-green-shade-50 text-lg shadow-md">
						<p>Appointments</p>
						<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">0</span>Appointments</p>
					</div>
					{/*<div className="h-40 md:p-5 p-3 rounded-md bg-green-100 text-lg shadow-md">*/}
					{/*	<p>Randoms</p>*/}
					{/*	<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">0</span>Randoms</p>*/}
					{/*</div>*/}
				</div>

				{/*Admin Cards*/}
				{/*<div className="grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-3 my-10">*/}
				{/*	<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-green-shade-50 text-lg shadow-md">*/}
				{/*		<p>Users</p>*/}
				{/*		<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">0</span>Users</p>*/}
				{/*	</div>*/}
				{/*	<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-blue-shade-50 text-lg shadow-md">*/}
				{/*		<p>Appointments</p>*/}
				{/*		<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">0</span>Appointments</p>*/}
				{/*	</div>*/}
				{/*	<div className="h-40 md:p-5 p-3 rounded-md bg-ihs-green-shade-50 text-lg shadow-md">*/}
				{/*		<p>Health Workers</p>*/}
				{/*		<p className="my-10"><span className="font-semibold md:text-3xl text-2xl pr-0.5 md:pr-2">0</span>Health Workers</p>*/}
				{/*	</div>*/}
				{/*</div>*/}

				{/*Beneficiaries Section*/}
				<div className="flex justify-between items-center mt-20">
					<h2 className="md:text-2xl text-xl">Beneficiaries</h2>
					<button className="py-3 md:px-4 px-2" onClick={() => navigate('/beneficiaries/addbeneficiary')}>Add Beneficiary</button>
				</div>

				<hr className="my-10"/>

				{/*Beneficiaries Table*/}
				<BeneficiaryTable />

				{/*Appointments Section*/}
				<div className="flex justify-between items-center mt-20">
					<h2 className="md:text-2xl text-xl">Appointments</h2>
					<button className="py-3 md:px-4 px-2" onClick={() => navigate('/appointments/bookappointment')}>Book Appointments</button>
				</div>

				<hr className="my-10"/>

				{/*Appointments Table*/}
				<AppointmentTable />
			</div>
		</>
	);
};

export default Dashboard;