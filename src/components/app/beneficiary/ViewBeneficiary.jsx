import React, {useEffect, useState, lazy, Suspense} from 'react';
import {ChevronLeftIcon, UserCircleIcon} from "@heroicons/react/outline";
import {Link, useNavigate, useParams} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../Spinner";
const ViewBeneficiaryAppointments = lazy(() => import('./ViewBeneficiaryAppointments'));

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

const ViewBeneficiary = () => {
	const [beneficiaryDetails, setBeneficiaryDetails] = useState({});
	const beneficiary = useParams();
	const navigate = useNavigate();
	const {beneficiaries} = useAuth();

	useEffect(() => {
		const beneficiaryId = beneficiary.beneficiaryId;
		const filteredBeneficiary = beneficiaries.filter(beneficiary => beneficiary.id === beneficiaryId);
		filteredBeneficiary.length === 0 ? navigate(-1) : setBeneficiaryDetails(filteredBeneficiary[0])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getDate = (dateString) =>{
		const date = new Date(dateString)
		const year = date.getFullYear()
		const day = date.getDate()
		const monthIndex = date.getMonth()
		const monthName = months[monthIndex]
		const formattedDate = `${day} ${monthName} ${year}`
		return formattedDate;
	}

	return (
		<div className="lg:p-20 md:p-10 p-3">
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-10" onClick={() => navigate("/beneficiaries")}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Beneficiaries</p>
			</button>
			<div className="flex">
				<div className="flex-1">
					<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
						<div className="flex">
							<UserCircleIcon className="md:w-14 w-8 md:ml-10 ml-3" />
							<h3 className="md:text-3xl sm:text-2xl text-xl py-8 md:px-8 px-2">Beneficiary Details</h3>
						</div>

						<Link to={`/beneficiaries/updatebeneficiary/${beneficiaryDetails?.id}`} className="text-gray-600 hover:text-gray-700 pr-2">
							<button className="sm:text-xl text-sm px-3">Update</button>
						</Link>

					</div>

					<div className="my-10 ml-5 text-gray-600 md:text-xl" >
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Full Name: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{beneficiaryDetails?.firstName}  {beneficiaryDetails?.lastName} </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Date of Birth: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{beneficiaryDetails ? getDate(beneficiaryDetails?.dob) : ""} </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Relationship: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{beneficiaryDetails ? beneficiaryDetails?.relationship : ""} </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Email: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{beneficiaryDetails ? beneficiaryDetails?.email : ""} </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Phone Number: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{beneficiaryDetails ? beneficiaryDetails?.phone : ""} </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Address: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{beneficiaryDetails ? beneficiaryDetails?.address : ""} </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">City: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{beneficiaryDetails ? beneficiaryDetails?.city : ""} </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">State: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{beneficiaryDetails ? beneficiaryDetails?.state : ""} </p>
						</div>

					</div>
				</div>
			</div>
			<div className="flex justify-between items-center mt-10">
				<h2 className="md:text-2xl text-xl">Appointments</h2>
			</div>

			<hr className="my-10"/>
			<Suspense fallback={<Spinner />}>
				<ViewBeneficiaryAppointments />
			</Suspense>
		</div>
	);
};

export default ViewBeneficiary;