import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Nodata from "../../../assets/images/noData.svg";
import useAuth from "../../../hooks/useAuth"
import Spinner from "../Spinner";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const BeneficiaryTable = () => {
	const axiosPrivate = useAxiosPrivate();
	const {beneficiaries, setBeneficiaries} = useAuth();
	const [loading, setLoading] = useState(false);

	const calculateAge = (dateString) =>{
			const today = new Date();
			const birthDate = new Date(dateString);
			let age = today.getFullYear() - birthDate.getFullYear();
			const m = today.getMonth() - birthDate.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			}
			return age;
	}

	useEffect(() => {
		setLoading(true)
		let isMounted = true;
		const controller = new AbortController();

		const getBeneficiaries = async () => {
			try {
				const response = await axiosPrivate.get(
					"/user/beneficiaries",
					{
						signal: controller?.signal
					});

				isMounted && setBeneficiaries(response.data.data);
				localStorage.setItem("beneficiaries", JSON.stringify(response.data.data))
				setLoading(false)
			} catch (err){
				console.error(err)
			}
		}

		getBeneficiaries();

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
						{beneficiaries?.length
							?
								beneficiaries.map((beneficiary, index) => (
									<tr key={index}>
										<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
											<div className="flex items-center">
												<div className="flex-shrink-0 w-10 h-10">
													<img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu"
															 alt="admin dashboard ui"/>
												</div>

												<div className="ml-4">
													<div className="md:text-lg text-base font-medium leading-5 text-gray-500">
														{beneficiary?.firstName} {beneficiary?.lastName}
													</div>
												</div>
											</div>
										</td>

										<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
											<div className="md:text-lg text-base leading-5 text-gray-500">{beneficiary?.city}, {beneficiary?.state}</div>
										</td>

										<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
											<p className="md:text-lg text-base leading-5 text-gray-500">{calculateAge(beneficiary?.dob)}</p>
										</td>

										<td
											className="px-6 py-4 md:text-lg text-base leading-5 text-ihs-green whitespace-no-wrap border-b border-gray-200">
											<Link to={`/beneficiaries/viewbeneficiary/${beneficiary?.id}`}>
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

export default BeneficiaryTable;