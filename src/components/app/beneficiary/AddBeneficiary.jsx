import React from 'react';
import {useNavigate} from "react-router-dom";
import {ChevronLeftIcon, UserAddIcon} from "@heroicons/react/outline";

const AddBeneficiary = () => {
	const navigate = useNavigate();

	return (
		<div className="lg:p-20 md:p-10 p-3">
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-8" onClick={() => navigate("/beneficiaries")}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Beneficiaries</p>
			</button>
			<div className="flex md:justify-start justify-center md:items-start items-center">
				<div className="md:flex-1">

					<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
						<div className="flex">
							<UserAddIcon className="md:w-14 w-8 md:ml-10 ml-3" />
							<h3 className="md:text-3xl text-2xl py-8 md:px-8 px-2">Add Beneficiary</h3>
						</div>
					</div>

					<form className="my-16 space-y-0" action="src/components/website/globals/SignUpForm#" method="POST">

						{/*First Name and last Name*/}
						<div className="flex md:flex-row flex-col">
							<div>
								<label htmlFor="firstName" className="block text-md font-medium text-gray-500">First Name <span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="text" id="firstName" name="firstName" required placeholder="John" autoComplete="current-firstName"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-80 md:w-72"/>
								</div>
							</div>

							<div className="md:ml-10 md:mt-0 mt-5">
								<label htmlFor="lastName" className="block text-md font-medium text-gray-500">Last Name<span
									className="text-red-600">*</span></label>
								<div className="md:mt-1">
									<input type="text" id="lastName" name="lastName" required placeholder="Doe" autoComplete="current-lastName"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-80 md:w-72"/>
								</div>
							</div>
						</div>

						{/*DOB and Relationship*/}
						<div className="flex md:pt-10 pt-5 md:flex-row flex-col">
							<div>
								<label htmlFor="dob" className="block text-md font-medium text-gray-500">Date of birth <span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="date" id="dob" name="dob" required autoComplete="current-dob"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-80 md:w-72"/>
								</div>
							</div>

							<div className="md:ml-10 md:mt-0 mt-5">
								<label htmlFor="relationship" className="block text-md font-medium text-gray-500">Relationship<span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="text" id="relationship" name="relationship" required placeholder="Father" autoComplete="current-relationship"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-80 md:w-72"/>
								</div>
							</div>
						</div>

						{/*Email and Phone Number*/}
						<div className="flex md:flex-row flex-col md:pt-10 pt-5 ">
							<div>
								<label htmlFor="email" className="block text-md font-medium text-gray-500">Email <span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="email" id="email" name="email" required placeholder="johndoe@email.com" autoComplete="current-email"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-80 md:w-72"/>
								</div>
							</div>

							<div className="md:ml-10 md:mt-0 mt-5">
								<label htmlFor="phone" className="block text-md font-medium text-gray-500">Phone Number<span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="tel" id="phone" name="phone" required placeholder="+234 800 304 0567" autoComplete="current-phone"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-80 md:w-72"/>
								</div>
							</div>
						</div>

						{/*Address, City and State*/}
						<div className="flex md:flex-wrap md:flex-row flex-col md:pt-10 pt-5">
							<div>
								<label htmlFor="address" className="block text-md font-medium text-gray-500">Address <span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="text" id="address" name="address" required placeholder="123 Maple Street" autoComplete="current-address"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-80 md:w-72"/>
								</div>
							</div>

							<div className="md:ml-10 md:mt-0 mt-5">
								<label htmlFor="city" className="block text-md font-medium text-gray-500">City<span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="text" id="city" name="city" required placeholder="Ikeja" autoComplete="current-city"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-80 md:w-72"/>
								</div>
							</div>

							<div className="lg:ml-10 lg:mt-0 md:mt-10 mt-5">
								<label htmlFor="state" className="block text-md font-medium text-gray-500">State<span
									className="text-red-600">*</span></label>
								<div className="mt-1">
									<input type="text" id="state" name="state" required placeholder="Lagos" autoComplete="current-state"
												 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 lg:w-80 md:w-72"/>
								</div>
							</div>
						</div>

						<div className="flex justify-start">
							<button type="submit" className="px-4 py-3 my-20 bg-ihs-green hover:font-bold focus: outline-none focus:ring-2 focus:ring-ihs-green-shade-500 w-96 text-lg">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddBeneficiary;