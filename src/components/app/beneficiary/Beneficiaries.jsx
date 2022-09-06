import React from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import AddBeneficiary from "./AddBeneficiary";
import ViewBeneficiary from "./ViewBeneficiary";
import UpdateBeneficiary from "./UpdateBeneficiary";
import BeneficiaryTable from "./BeneficiaryTable";

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
		<div className="lg:p-20 md:p-10 p-3">
			{/*Beneficiaries Section*/}
			<div className="flex justify-between items-center mt-10">
				<h2 className="md:text-2xl text-xl">Beneficiaries</h2>
				<button className="py-3 md:px-4 px-2" onClick={() => navigate('/beneficiaries/addbeneficiary')}>Add Beneficiary</button>
			</div>

			<hr className="my-10"/>

			{/*Beneficiaries Table*/}
			<BeneficiaryTable />
		</div>
	);
};

export default Beneficiaries;