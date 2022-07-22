import React from 'react';
import Nodata from "../../../assets/images/noData.svg";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import BookAppointment from "./BookAppointment";
import ViewAppointment from "./ViewAppointment";

const appointmentsData = true;

const Appointment = () => {
	return (
		<Routes>
			<Route index element={<ParentContent />} />
			<Route path="/bookappointment" element={<BookAppointment />} />
			<Route path="/viewappointment" element={<ViewAppointment />} />
		</Routes>
	);
}

const ParentContent = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className="lg:p-20 md:p-10 p-3">
				<div className="flex justify-between items-center mt-10">
					<h2 className="md:text-2xl text-xl">Appointments</h2>
					<button className="py-3 md:px-4 px-2" onClick={() => navigate('/appointments/bookappointment')}>Book Appointments</button>
				</div>

				<hr className="my-10"/>

				{/*Appointments Table*/}
				<div className="flex flex-col mt-8">
					<div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
						<div
							className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 rounded-md">
							<table className="table-auto min-w-full">
								<thead>
								<tr>
									<th
										className="px-6 py-5 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
										<p>Beneficiary</p>
									</th>
									<th
										className="px-6 py-3 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
										Purpose
									</th>
									<th
										className="px-6 py-3 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
										Status
									</th>
									<th
										className="px-6 py-3 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
										More...
									</th>
								</tr>
								</thead>

								<tbody className="bg-white">
								<tr>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="flex items-center">
											<div className="flex-shrink-0 w-10 h-10">
												<img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu"
														 alt="admin dashboard ui"/>
											</div>

											<div className="ml-4">
												<div className="md:text-lg text-base font-medium leading-5 text-gray-500">
													John Doe
												</div>
											</div>
										</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="md:text-lg text-base leading-5 text-gray-500">Medication Administration</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<span
											className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Completed</span>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to="/appointments/viewappointment">
											View Details
										</Link>
									</td>

								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="flex items-center">
											<div className="flex-shrink-0 w-10 h-10">
												<img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu"
														 alt="admin dashboard ui"/>
											</div>

											<div className="ml-4">
												<div className="md:text-lg text-base font-medium leading-5 text-gray-500">
													John Doe
												</div>
											</div>
										</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="md:text-lg text-base leading-5 text-gray-500">Medication Administration</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<span
											className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Completed</span>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to="/appointments/viewappointment">
											View Details
										</Link>
									</td>

								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="flex items-center">
											<div className="flex-shrink-0 w-10 h-10">
												<img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu"
														 alt="admin dashboard ui"/>
											</div>

											<div className="ml-4">
												<div className="md:text-lg text-base font-medium leading-5 text-gray-500">
													John Doe
												</div>
											</div>
										</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="md:text-lg text-base leading-5 text-gray-500">Medication Administration</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<span
											className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Completed</span>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to="/appointments/viewappointment">
											View Details
										</Link>
									</td>

								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="flex items-center">
											<div className="flex-shrink-0 w-10 h-10">
												<img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu"
														 alt="admin dashboard ui"/>
											</div>

											<div className="ml-4">
												<div className="md:text-lg text-base font-medium leading-5 text-gray-500">
													John Doe
												</div>
											</div>
										</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="md:text-lg text-base leading-5 text-gray-500">Medication Administration</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<span
											className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Completed</span>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to="/appointments/viewappointment">
											View Details
										</Link>
									</td>

								</tr>
								</tbody>
							</table>

							<div className={`${appointmentsData ? "hidden" : "flex flex-col justify-center items-center py-20"}`}>
								<img src={Nodata} alt="No Data" className="max-w-sm my-10"/>
								<p className="text-lg md:mx-32 mx-5 text-center">You currently have no appointments. Click on <span className="text-ihs-green text-xl">"Book Appointment "</span> button above to book for your loved ones</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Appointment;