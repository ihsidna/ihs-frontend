import React, {useEffect, useState} from 'react';
import {ChevronLeftIcon, ClipboardCopyIcon} from "@heroicons/react/outline";
import {useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import {appointmentStatus} from "../../../data/enums";
import {Helmet, HelmetProvider} from "react-helmet-async";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
	barColors: {
		"0": "#05afb0"
	},
	shadowBlur: 5
});

const BOOK_APPOINTMENT = "/appointment/create"

const BookAppointment = () => {
	const axiosPrivate = useAxiosPrivate();
	const navigate = useNavigate();
	const {beneficiaries, services, setServices} = useAuth();

	const [beneficiary, setBeneficiary] = useState('');
	const [service, setService] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await axiosPrivate.post(BOOK_APPOINTMENT,
				JSON.stringify({
					beneficiaryId: beneficiary, serviceId: service, date, time, status: appointmentStatus.Booked}),
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true
				}
			)

			setBeneficiary('');
			setService('');
			setDate('');
			setTime('');

			setLoading(false);
			// setSuccess(true);

			navigate('/appointments')

		} catch (err) {
			if (!err.response) {
				console.error('No Server Response')
				setLoading(false);
			} else {
				console.error(err)
			}
		}
	}

	useEffect(() => {
		setLoading(true)
		let isMounted = true;
		const controller = new AbortController();

		const getServices = async () => {
			try {
				const response = await axiosPrivate.get(
					"/admin/service/all",
					{
						signal: controller?.signal
					});

				isMounted && setServices(response.data.data);
				localStorage.setItem("services", JSON.stringify(response.data.data))
				setLoading(false)
			} catch (err){
				console.error(err)
			}
		}

		getServices();

		return () => {
			isMounted = false;
			controller.abort();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>Book Appointment | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<div className="lg:p-20 md:p-10 p-3">
					{loading && <TopBarProgress />}
					<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-8" onClick={() => navigate("/appointments")}>
						<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Appointments</p>
					</button>
					<div className="flex md:justify-start justify-center md:items-start items-center">
						<div className="md:flex-1">

							<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
								<div className="flex">
									<ClipboardCopyIcon className="md:w-14 w-8 md:ml-10 ml-3" />
									<h3 className="md:text-3xl text-2xl py-8 md:px-8 px-2">Book Appointment</h3>
								</div>
							</div>

							<form className="my-16 space-y-0" onSubmit={handleSubmit}>

								{/*Beneficiary*/}
								<div className="flex md:flex-row flex-col">

									<div>
										<label
											htmlFor="beneficiary"
											className="block text-md font-medium text-gray-500"
										>
											Beneficiary
											<span className="text-red-600">*</span>
										</label>
										<div className="mt-1">
											<select
												id="beneficiary"
												required
												aria-required="true"
												value={beneficiary}
												onChange={(e) => setBeneficiary(e.target.value)}
												className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 w-96">
												<option value="">Select Beneficiary</option>
												{beneficiaries?.length
													?
													beneficiaries.map((beneficiary, index) => (
														<option
															key={index}
															value={beneficiary?.id}
														>
															{beneficiary?.firstName} {beneficiary?.lastName}
														</option>
													))
													:
													<option value="">You have no beneficiaries</option>
												}
											</select>
										</div>
									</div>
								</div>

								{/*Service*/}
								<div className="flex md:pt-10 pt-5 md:flex-row flex-col">

									<div>
										<label
											htmlFor="service"
											className="block text-md font-medium text-gray-500"
										>
											Service
											<span className="text-red-600">*</span>
										</label>
										<div className="mt-1">
											<select
												id="service"
												required
												aria-required="true"
												value={service}
												onChange={(e) => setService(e.target.value)}
												className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 text-gray-500 w-96">
												<option value="">Select a service</option>
												{services?.length
													?
													services.map((service, index) => (
														<option
															key={index}
															value={service?.id}
														>
															{service?.name}
														</option>
													))
													:
													<option value="">No services at this time</option>
												}
											</select>
										</div>
									</div>

								</div>

								{/*Date and Time*/}
								<div className="flex md:flex-wrap md:flex-row flex-col md:pt-10 pt-5 ">
									<div>
										<label
											htmlFor="date"
											className="block text-md font-medium text-gray-500"
										>
											Date
											<span className="text-red-600">*</span>
										</label>
										<div className="mt-1">
											<input
												type="date"
												id="date"
												required
												autoComplete="current-date"
												aria-required="true"
												value={date}
												onChange={(e) => setDate(e.target.value)}
												className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-96 md:w-72"/>
										</div>
									</div>

									<div className="lg:ml-10 lg:mt-0 md:mt-0 md:ml-10 mt-5">
										<label
											htmlFor="time"
											className="block text-md font-medium text-gray-500"
										>
											Time
											<span className="text-red-600">*</span>
										</label>
										<div className="mt-1">
											<input
												type="time"
												id="time"
												required
												autoComplete="current-time"
												aria-required="true"
												value={time}
												onChange={(e) => setTime(e.target.value)}
												className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-96 md:w-72"/>
										</div>
									</div>

								</div>
								<div className="flex justify-start">
									<button type="submit" className="px-4 py-3 my-20 bg-ihs-green hover:font-bold focus: outline-none focus:ring-2 focus:ring-ihs-green-shade-500 w-96 text-lg">
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		</HelmetProvider>
	);
};

export default BookAppointment;