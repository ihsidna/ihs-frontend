import React,{useEffect, useState} from 'react';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import {Link, useParams} from "react-router-dom";
import Avatar from "react-avatar";
import {avatar} from "../../../data/enums";
import Nodata from "../../../assets/images/noData.svg";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
	barColors: {
		"0": "#05afb0"
	},
	shadowBlur: 5
});

const ViewUserBeneficiaries = () => {
	const axiosPrivate = useAxiosPrivate();
	const user = useParams();
	const [loading, setLoading] = useState();
	const [userId, setUserId] = useState();
	const [beneficiaries, setBeneficiaries] = useState();

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
		const userId = user.userId;
		setUserId(userId);
		let isMounted = true;
		const controller = new AbortController();

		const getBeneficiaries = async () => {
			try {
				const response = await axiosPrivate.get(
					`/admin/user/${userId}/beneficiaries`,
					{
						signal: controller?.signal
					});

				isMounted && setBeneficiaries(response.data.data);
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
			{loading && <TopBarProgress />}
			<div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div
					className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 rounded-md">
					<table className="table-auto min-w-full">
						<thead>
						<tr>
							<th
								className="py-5 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
							</th>
							<th
								className="py-5 text-base font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
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
									<td className=" py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="flex items-center">
											<div className="mx-4">
												<Avatar  name={`${beneficiary?.firstName} ${beneficiary?.lastName}`} color={avatar.BackgroundColor} fgColor={avatar.ForegroundColor}  size={avatar.width} round={true}/>
											</div>
										</div>
									</td>
									<td className="py-4 whitespace-no-wrap border-b border-gray-200">
										<div className="flex items-center">
											<div>
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
										<Link to={`/users/viewuser/${userId}/beneficiary/${beneficiary?.id}`}>
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
	)
};

export default ViewUserBeneficiaries;