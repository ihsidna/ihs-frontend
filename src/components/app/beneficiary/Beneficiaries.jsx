import React from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import AddBeneficiary from "./AddBeneficiary";
import ViewBeneficiary from "./ViewBeneficiary";
import UpdateBeneficiary from "./UpdateBeneficiary";
import BeneficiaryTable from "./BeneficiaryTable";
import {Helmet, HelmetProvider} from "react-helmet-async";
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
	const navigate = useNavigate();

	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>My Beneficiaries | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<div className="lg:p-20 md:p-10 p-3">
					{/*Beneficiaries Section*/}
					<div className="flex justify-between items-center mt-10">
						<h2 className="md:text-2xl text-xl">Your Beneficiaries</h2>
						<button className="py-3 md:px-4 px-2" onClick={() => navigate('/beneficiaries/addbeneficiary')}>Add Beneficiary</button>
					</div>

					<hr className="my-10"/>

					{/*Beneficiaries Table*/}
					<BeneficiaryTable />
				</div>
			</>
		</HelmetProvider>
	);
};

export default Beneficiaries;