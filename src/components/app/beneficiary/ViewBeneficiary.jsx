import React from 'react';
import {ChevronLeftIcon, UserCircleIcon} from "@heroicons/react/outline";
import {Link, useNavigate} from "react-router-dom";

const ViewBeneficiary = () => {
	const navigate = useNavigate();

	return (
		<div className="lg:p-20 md:p-10 p-3">
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-10" onClick={() => navigate("/beneficiaries")}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Beneficiaries</p>
			</button>
			<div className="flex">
				<div className="flex-1">
					<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
						<div className="flex">
							<UserCircleIcon className="md:w-14 w-8 md:ml-10 ml-3" />
							<h3 className="md:text-3xl text-2xl py-8 md:px-8 px-2">Beneficiary Details</h3>
						</div>

						<Link to="/beneficiaries/updatebeneficiary" className="text-gray-600 hover:text-gray-700">
							<h3 className="text-xl md:px-8 px-3 hover:underline">Update</h3>

						</Link>

					</div>

					<div className="my-10 ml-5 text-gray-600 text-xl" >
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Full Name: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">John Doe </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Date of Birth: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">9th July, 1990 </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Relationship: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">Brother </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Email: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">johndoe@email.com </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Phone Number: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">+234 900 456 4321 </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Address: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">123 Maple Street </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">City: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">Ikeja </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">State: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">Lagos </p>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewBeneficiary;