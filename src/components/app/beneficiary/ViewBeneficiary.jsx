import React from 'react';
import {ChevronLeftIcon, UserCircleIcon} from "@heroicons/react/outline";
import {useNavigate} from "react-router-dom";

const ViewBeneficiary = () => {
	const navigate = useNavigate();

	return (
		<div className="lg:p-20 md:p-10 p-3">
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 mb-10" onClick={() => navigate("/beneficiaries")}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Beneficiaries</p>
			</button>
			<div className="flex">
				<div className="flex-1">
					<div className=" flex h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
						<UserCircleIcon className="w-14 ml-10" />
						<h3 className="text-3xl py-8 px-8">Beneficiary Details</h3>
					</div>

					<div className="mt-10 text-gray-600 text-xl" >
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Full Name: </p>
							<p className="py-5 col-start-2">John Doe </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Date of Birth: </p>
							<p className="py-5 col-start-2">9th July, 1990 </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Relationship: </p>
							<p className="py-5 col-start-2">Brother </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Email: </p>
							<p className="py-5 col-start-2">johndoe@email.com </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Phone Number: </p>
							<p className="py-5 col-start-2">+234 900 456 4321 </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Address: </p>
							<p className="py-5 col-start-2">123 Maple Street </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">City: </p>
							<p className="py-5 col-start-2">Ikeja </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">State: </p>
							<p className="py-5 col-start-2">Lagos </p>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewBeneficiary;