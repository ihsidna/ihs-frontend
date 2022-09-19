import React from 'react';
import {Link} from "react-router-dom";
import Nodata from "../../../assets/images/noData.svg";
import useAuth from "../../../hooks/useAuth";
import {appointmentStatus, avatar, booleanString} from "../../../data/enums";
import Avatar from "react-avatar";

const AppointmentTable = () => {
	const {appointments} = useAuth();

	return (
		<div className="flex flex-col mt-8">
			<div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div
					className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 rounded-md">
					<table className="table-auto min-w-full">
						<thead>
						<tr>
							<th
								className="px-6 py-5 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
							</th>
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
						{appointments?.length
						?
							appointments.map((appointment, index) => (
								<tr key={index}>
									<td>
										<div className="mx-4">
											<Avatar name={`${appointment?.beneficiaryName}`} color={avatar.BackgroundColor} fgColor={avatar.ForegroundColor}  size={avatar.width} round={true}/>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="flex items-center">


												<div className="md:text-lg text-base font-medium leading-5 text-gray-500">
													{appointment?.beneficiaryName}
												</div>

										</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="md:text-lg text-base leading-5 text-gray-500">{appointment?.serviceName}</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<span
											className={appointment?.completed.toString() === booleanString.True
												? "inline-flex p-2 py-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-md capitalize"
												: appointment?.status === appointmentStatus.Confirmed
													? "inline-flex p-2 py-2 text-xs font-semibold leading-5 text-green-800 bg-ihs-blue-shade-200 rounded-md capitalize"
													:"inline-flex p-2 text-xs font-semibold leading-5 text-green-800 bg-red-100 rounded-md capitalize"}>
											{appointment?.completed.toString() === booleanString.True ? appointmentStatus.Completed : appointment?.status}
											</span>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to={`/appointments/viewappointment/${appointment?.id}`}>
											View Details
										</Link>
									</td>

								</tr>
							))

							:

							<tr>
								<td colSpan="5" className="px-6 py-4 text-center">
									<div className="flex flex-col justify-center items-center py-20">
										<img src={Nodata} alt="No Data" className="w-40 my-10"/>
										<p className="text-lg md:mx-32 mx-5 text-center">You have no appointment. Book an appointment to begin</p>
									</div>
								</td>
							</tr>
						}

						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AppointmentTable;