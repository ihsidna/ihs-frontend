import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";
import Nodata from "../../../assets/images/noData.svg";
import Spinner from "../Spinner";

const ServiceTable = () => {
	const {services, setServices} = useAuth();
	const axiosPrivate = useAxiosPrivate();
	const [loading, setLoading] = useState(false);

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
								<p>Service</p>
							</th>
							<th
								className="px-6 py-3 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
								Category
							</th>
							<th
								className="px-6 py-3 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
								More...
							</th>
						</tr>
						</thead>

						<tbody className="bg-white">
						{services?.length
						?
							services.map((service, index) => (
								<tr key={index}>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="flex items-center">
											<div className="ml-4">
												<div className="md:text-lg text-base font-medium leading-5 text-gray-500">
													{service?.name}
												</div>
											</div>
										</div>
									</td>

									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="md:text-lg text-base leading-5 text-gray-500 capitalize">{service?.category}</div>
									</td>

									<td
										className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
										<Link to={`viewservice/${service?.id}`}>
											View Details
										</Link>
									</td>

								</tr>
							))

							:
							<tr>
								<td colSpan="3" className="px-6 py-4 text-center">
									<div className="flex flex-col justify-center items-center py-20">
										<img src={Nodata} alt="No Data" className="w-40 my-10"/>
										<p className="text-lg md:mx-32 mx-5 text-center">There are no services. Add a Service to begin</p>
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

export default ServiceTable;