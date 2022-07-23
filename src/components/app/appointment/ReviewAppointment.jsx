import React from 'react';
import {AnnotationIcon, ChevronLeftIcon, StarIcon,} from "@heroicons/react/outline";
import {useNavigate} from "react-router-dom";

const ReviewAppointment = () => {
	const navigate = useNavigate();

	return (
		<div className="lg:p-20 md:p-10 p-3">
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-8" onClick={() => navigate("/appointments")}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Appointments</p>
			</button>
			<div className="flex md:justify-start justify-center md:items-start items-center">
				<div className="md:flex-1">

					<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
						<div className="flex">
							<AnnotationIcon className="md:w-14 w-8 md:ml-10 ml-3" />
							<h3 className="md:text-3xl text-2xl py-8 md:px-8 px-2">Review Appointment</h3>
						</div>
					</div>

					<form className="my-16 space-y-0" action="src/components/website/globals/SignUpForm#" method="POST">

						{/*Review*/}
						<div className="flex md:flex-row flex-col">

							<div>
								<label htmlFor="review" className="block text-md font-medium text-gray-500">Review <span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<textarea id="review" name="review" required placeholder="It was a pleasant experience" autoComplete="current-review"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 w-96"/>
								</div>
							</div>
						</div>

						{/*Rating*/}
						<div className="flex md:pt-10 pt-5 md:flex-row flex-col">

							<div>
								<label htmlFor="rating" className="block text-md font-medium text-gray-500">Service <span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<select id="rating" name="rating" required className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 text-gray-500 w-96">
										<option value="">Rate your appointment</option>
										<option value="1">1 Star<StarIcon/></option>
										<option value="2">2 Stars</option>
										<option value="3">3 Stars</option>
										<option value="4">4 Stars</option>
										<option value="5">5 Stars</option>
									</select>
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

export default ReviewAppointment;