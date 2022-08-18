import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import Nodata from '../../assets/images/noData.svg';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const beneficiariesData = true;
const appointmentsData = true;


const Dashboard = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState();
	const axiosPrivate = useAxiosPrivate();
	const location = useLocation();


	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const getUsers = async () => {
			try {
				const response = await axiosPrivate.get(
					"/users/all",
					{signal: controller?.signal}
				);

				console.log(response.data.data)
				isMounted && setUsers(response.data.data);
			} catch (err){
				// if status is 401 then redirect to signin page
				if (err?.response?.status === 401) {
						navigate('/signin', {state: {from: location}, replace: true});
				}
			}
		}

		getUsers();

		return () => {
			isMounted = false;
			controller.abort();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="lg:p-20 md:p-10 p-3">
				<div className="mb-5 mt-2">
					<h2 className="md:text-4xl text-3xl mb-3">Hello John</h2>
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


				{/*Users Table*/}
				{/*<button className="py-3 md:px-4 px-2" onClick={() => refresh}>Refresh Token</button>*/}

				<div className="flex flex-col mt-8">
					<div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
						<div
							className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 rounded-md">
							<table className="table-auto min-w-full">
								<thead>
								<tr>
									<th
										className="px-6 py-5 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
										<p>Name</p>
									</th>
									<th
										className="px-6 py-3 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
										Email
									</th>
									<th
										className="px-6 py-3 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
										Phone
									</th>
									<th
										className="px-6 py-3 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
										More...
									</th>
								</tr>
								</thead>

								<tbody className="bg-white">
								{users?.length
									?
									users.map((user, index) => (
										<tr key={index}>
											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
												<div className="flex items-center">
													<div className="flex-shrink-0 w-10 h-10">
														<img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu"
																 alt="admin dashboard ui"/>
													</div>

													<div className="ml-4">
														<div className="md:text-lg text-base font-medium leading-5 text-gray-500">
															{user.firstName}
														</div>
													</div>
												</div>
											</td>

											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
												<div className="md:text-lg text-base leading-5 text-gray-500">{user.email}</div>
											</td>

											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
												<p className="md:text-lg text-base leading-5 text-gray-500">{user.phone}</p>
											</td>

											<td
												className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
												<Link to="/users/viewuser">
													View Details
												</Link>
											</td>

										</tr>
									))
									:
									// error message
									<tr>
										<td colSpan="4" className="px-6 py-4 text-center">
											<div className="flex flex-col justify-center items-center py-20">
												<img src={Nodata} alt="No Data" className="max-w-sm my-10"/>
												<p className="text-lg md:mx-32 mx-5 text-center">There are currently no users. Check back later</p>
											</div>
										</td>
									</tr>
								}

								</tbody>
							</table>

						</div>
					</div>
				</div>


				{/*Beneficiaries Section*/}
				<div className="flex justify-between items-center mt-20">
					<h2 className="md:text-2xl text-xl">Beneficiaries</h2>
					<button className="py-3 md:px-4 px-2" onClick={() => navigate('/beneficiaries/addbeneficiary')}>Add Beneficiary</button>
				</div>

				<hr className="my-10"/>

				{/*Beneficiaries Table*/}
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
										Location
									</th>
									<th
										className="px-6 py-3 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
										Age
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
										<div className="md:text-lg text-base leading-5 text-gray-500">Surulere, Lagos</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<p className="md:text-lg text-base leading-5 text-gray-500">25</p>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to="/beneficiaries/viewbeneficiary">
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
										<div className="md:text-lg text-base leading-5 text-gray-500">Surulere, Lagos</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<p className="md:text-lg text-base leading-5 text-gray-500">25</p>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to="/beneficiaries/viewbeneficiary">
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
										<div className="md:text-lg text-base leading-5 text-gray-500">Surulere, Lagos</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<p className="md:text-lg text-base leading-5 text-gray-500">25</p>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to="/beneficiaries/viewbeneficiary">
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
										<div className="md:text-lg text-base leading-5 text-gray-500">Surulere, Lagos</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<p className="md:text-lg text-base leading-5 text-gray-500">25</p>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to="/beneficiaries/viewbeneficiary">
											View Details
										</Link>
									</td>

								</tr>
								</tbody>
							</table>
							<div className={`${beneficiariesData ? "hidden" : "flex flex-col justify-center items-center py-20"}`}>
								<img src={Nodata} alt="No Data" className="max-w-sm my-10"/>
								<p className="text-lg md:mx-32 mx-5 text-center">You currently have no beneficiaries. Click on <span className="text-ihs-green text-xl">"Add Beneficiary "</span> button above to add your loved ones</p>
							</div>

						</div>
					</div>
				</div>

				{/*Appointments Section*/}
				<div className="flex justify-between items-center mt-20">
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

export default Dashboard;