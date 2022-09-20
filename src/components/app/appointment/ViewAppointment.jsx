import React, {useEffect, useState} from 'react';
import {ChevronLeftIcon, ClipboardCheckIcon} from "@heroicons/react/outline";
import {Link, useNavigate, useParams} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {userRoles} from "../../../data/enums";
import { StarRating } from 'react-star-rating-element';

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

const ViewAppointment = () => {
	const appointment = useParams();
	const navigate = useNavigate();
	const {auth, allAppointments, appointments, loggedInUser} = useAuth();
	const [appointmentDetails, setAppointmentDetails] = useState({});

	const getDate = (dateString) =>{
		const date = new Date(dateString)
		const year = date.getFullYear()
		const day = date.getDate()
		const monthIndex = date.getMonth()
		const monthName = months[monthIndex]
		const formattedDate = `${day} ${monthName} ${year}`
		return formattedDate;
	}

	useEffect(() => {
		let filteredAppointment;

		const appointmentId = appointment.appointmentId;

		if (auth?.userType === userRoles.User){
			filteredAppointment = appointments.filter(appointment => appointment.id === appointmentId);
		} else{
			filteredAppointment = allAppointments.filter(appointment => appointment.id === appointmentId)
		}

		filteredAppointment?.length === 0 ? navigate(-1) : setAppointmentDetails(filteredAppointment[0]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="lg:p-20 md:p-10 p-3">
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-10" onClick={() => navigate(-1)}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Appointments</p>
			</button>
			<div className="flex">
				<div className="flex-1">

					<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
						<div className="flex">
							<ClipboardCheckIcon className="md:w-14 w-8 md:ml-10 ml-3" />
							<h3 className="md:text-2xl text-lg py-8 md:px-8 px-2">Appointments Details</h3>
						</div>

						<div className="flex md:flex-row flex-col items-center md:gap-x-2 pr-2">
							{loggedInUser?.id === appointmentDetails?.userId && (
								<Link to={`/appointments/review/${appointmentDetails?.id}`} className="text-gray-600 hover:text-gray-700">
									<button className="sm:text-xl text-sm px-3">Review</button>
								</Link>
							)}

							{auth?.userType === userRoles.Admin && (
								<>
									<Link to={`/allappointments/assignworker/${appointmentDetails?.id}`} className="text-gray-600 hover:text-gray-700">
										<button className="sm:text-xl text-sm px-3 my-2">Assign</button>
									</Link>
									<Link to={`/allappointments/updateappointment/${appointmentDetails?.id}`} className="text-gray-600 hover:text-gray-700">
										<button className="sm:text-xl text-sm px-3">Update</button>
									</Link>
								</>

							)}
						</div>

					</div>

					<div className="mt-10 text-gray-600 md:text-xl" >
						<div className="grid grid-cols-4 items-center">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Beneficiary: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{appointmentDetails?.beneficiaryName} </p>
						</div>
						<div className="grid grid-cols-4 items-center">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Service: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{appointmentDetails?.serviceName} </p>
						</div>
						<div className="grid grid-cols-4 items-center">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Health Worker: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{appointmentDetails?.healthWorkerName ? appointmentDetails?.healthWorkerName : "Unassigned"} </p>
						</div>
						<div className="grid grid-cols-4 items-center">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Date: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{getDate(appointmentDetails?.date)} </p>
						</div>
						<div className="grid grid-cols-4 items-center">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Time: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{appointmentDetails?.time}</p>
						</div>
						<div className="grid grid-cols-4 items-center">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Status: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2 capitalize">{appointmentDetails?.status}</p>
						</div>

						{/*	Review */}
						<div>
							<div className="grid grid-cols-4 items-center">
								<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Review: </p>
								<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{appointmentDetails?.review ? appointmentDetails?.review : "Unreviewed Appointment"} </p>
							</div>
							<div className="grid grid-cols-4 items-center">
								<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Rating: </p>

								<div className="py-5 md:ml-3 md:col-start-2 col-span-2">
									<StarRating
										ratingValue={appointmentDetails?.rating}
										starEmptyColor="#999999"
										starSpacing={5}
										starDimension={25}
										starRatedColor="#1eb7b8"
									/>
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewAppointment;