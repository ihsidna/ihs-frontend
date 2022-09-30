import React, {useCallback, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import AddBeneficiary from "./AddBeneficiary";
import ViewBeneficiary from "./ViewBeneficiary";
import UpdateBeneficiary from "./UpdateBeneficiary";
import BeneficiaryTable from "./BeneficiaryTable";
import {Helmet, HelmetProvider} from "react-helmet-async";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
	barColors: {
		"0": "#05afb0"
	},
	shadowBlur: 5
});

const Beneficiaries = () => {
	return (
		<Routes>
			<Route index element={<ParentContent />} />
			<Route path="/addbeneficiary" element={<AddBeneficiary />} />
			<Route path="/viewbeneficiary/:beneficiaryId" element={<ViewBeneficiary />} />
			<Route path="/updatebeneficiary/:beneficiaryId" element={<UpdateBeneficiary />} />
		</Routes>
	);
}

const ParentContent = () => {
	const axiosPrivate = useAxiosPrivate();
	const navigate = useNavigate();
	const {beneficiaries, setBeneficiaries} = useAuth();
	const [loading, setLoading] = useState(false);

	const getBeneficiaries = useCallback(async () => {
		const response = await axiosPrivate.get("/user/beneficiaries");

		const beneficiariesList = response.data.data;
		setBeneficiaries(beneficiariesList);
	}, [axiosPrivate, setBeneficiaries]);

	useEffect(() => {
		setLoading(true)
		getBeneficiaries();
		setLoading(false);
	}, [getBeneficiaries]);

	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>My Beneficiaries | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<div className="lg:p-20 md:p-10 p-3">
					{loading && <TopBarProgress />}
					{/*Beneficiaries Section*/}
					<div className="flex justify-between items-center mt-10">
						<h2 className="md:text-2xl text-xl">Your Beneficiaries</h2>
						<button className="py-3 md:px-4 px-2" onClick={() => navigate('/beneficiaries/addbeneficiary')}>Add Beneficiary</button>
					</div>

					<hr className="my-10"/>

					{/*Beneficiaries Table*/}
					<BeneficiaryTable beneficiaries={beneficiaries} />
				</div>
			</>
		</HelmetProvider>
	);
};

export default Beneficiaries;