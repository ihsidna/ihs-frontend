import React from 'react';
import {ChevronLeftIcon, ClipboardCheckIcon} from "@heroicons/react/outline";
import {useNavigate} from "react-router-dom";

const ViewAppointment = () => {
	const navigate = useNavigate();

	return (
		<div className="lg:p-20 md:p-10 p-3">
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 mb-10" onClick={() => navigate("/appointments")}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Appointments</p>
			</button>
			<div className="flex">
				<div className="flex-1">
					<div className=" flex h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
						<ClipboardCheckIcon className="w-14 ml-10" />
						<h3 className="text-3xl py-8 px-8">Appointments Details</h3>
					</div>

					<div className="mt-10 text-gray-600 text-xl" >
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Beneficiary: </p>
							<p className="py-5 col-start-2">John Doe </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Service: </p>
							<p className="py-5 col-start-2">Drugs Administration </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Date: </p>
							<p className="py-5 col-start-2">22 September, 2022 </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 col-span-1">Time: </p>
							<p className="py-5 col-start-2">12:00 PM </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewAppointment;