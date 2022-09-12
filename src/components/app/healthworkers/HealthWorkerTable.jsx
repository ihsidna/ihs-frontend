import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Nodata from "../../../assets/images/noData.svg";
import Avatar from "react-avatar";
import {avatar} from "../../../data/enums";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../Spinner";

const HealthWorkerTable = () => {
	const axiosPrivate = useAxiosPrivate();
	const {healthWorkers, setHealthWorkers} = useAuth();
	const [loading, setLoading] = useState(false);

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
		<div className="flex flex-col mt-8">
			{loading && <Spinner />}
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
								className="py-5 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
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
						{healthWorkers?.length
						?
							healthWorkers.map((worker, index) => (
								<tr key={index}>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div >
											<Avatar name={`${worker?.firstName} ${worker?.lastName}`} color={avatar.BackgroundColor} fgColor={avatar.ForegroundColor}  size={avatar.width} round={true}/>
										</div>
									</td>
									<td className=" py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="flex items-center">
											<div>
												<div className="md:text-lg text-base font-medium leading-5 text-gray-500">
													{worker?.firstName} {worker?.lastName}
												</div>
											</div>
										</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="md:text-lg text-base leading-5 text-gray-500">{worker?.email}</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<p className="md:text-lg text-base leading-5 text-gray-500">{worker?.phone}</p>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to={`/healthworkers/viewhealthworker/${worker?.id}`}>
											View Details
										</Link>
									</td>

								</tr>
							))
							:
							<tr>
								<td colSpan="4" className="px-6 py-4 text-center">
									<div className="flex flex-col justify-center items-center py-20">
										<img src={Nodata} alt="No Data" className="w-40 my-10"/>
										<p className="text-lg md:mx-32 mx-5 text-center">You have no beneficiaries. Add a Beneficiary to begin</p>
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

export default HealthWorkerTable;