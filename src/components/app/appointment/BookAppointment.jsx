import React from 'react';
import {ChevronLeftIcon} from "@heroicons/react/outline";
import {useNavigate} from "react-router-dom";

const BookAppointment = () => {
	const navigate = useNavigate();
	return (
		<div className="lg:p-20 md:p-10 p-3">
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 mb-20" onClick={() => navigate("/appointments")}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Appointments</p>
			</button>
			<div className="flex">
				<div className="flex-1">
					<form className="mb-0 space-y-0" action="src/components/website/globals/SignUpForm#" method="POST">

						{/*Beneficiary*/}
						<div className="flex">
							<div>
								<label htmlFor="beneficiary" className="block text-md font-medium text-gray-500">Beneficiary <span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="text" id="beneficiary" name="beneficiary" required placeholder="John Doe" autoComplete="current-beneficiary"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 w-[50rem]"/>
								</div>
							</div>
						</div>

						{/*Service*/}
						<div className="flex pt-10">
							<div>
								<label htmlFor="service" className="block text-md font-medium text-gray-500">Service <span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<select id="service" name="service" required className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 text-gray-500 w-[50rem]">
										<option value="">Select a service</option>
										<option value="1">Service 1</option>
										<option value="2">Service 2</option>
										<option value="3">Service 3</option>
									</select>
								</div>
							</div>
						</div>

						{/*Date and Time*/}
						<div className="flex pt-10">
							<div>
								<label htmlFor="date" className="block text-md font-medium text-gray-500">Date <span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="date" id="date" name="date" required autoComplete="current-date"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 w-96"/>
								</div>
							</div>

							<div className="ml-10">
								<label htmlFor="time" className="block text-md font-medium text-gray-500">Time<span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="time" id="time" name="time" required placeholder="+234 800 304 0567" autoComplete="current-time"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 w-96"/>
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
	);
};

export default BookAppointment;