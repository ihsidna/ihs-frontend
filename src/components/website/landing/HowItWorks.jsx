import React from 'react';
import {useNavigate} from "react-router-dom";

const HowItWorks = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-gray-50 w-full md:py-32 py-20 md:px-20 px-10">
			<div className="max-w-[1240] mx-auto">
				<div className="flex justify-center items-center">
					<h2 className="md:text-4xl text-2xl font-semibold pb-2 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
						How It Works
					</h2>
				</div>
				<div className="grid md:grid-cols-3 gap-4 text-center my-10 ">

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700 text-2xl">Step 1</p>
						<p className="text-gray-400 font-thin text-lg">Create An Account</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700 text-2xl">Step 2</p>
						<p className="text-gray-400 font-thin text-lg">Add A Beneficiary</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700 text-2xl">Step 2</p>
						<p className="text-gray-400 font-thin text-lg">Book An Appointment</p>
					</div>

				</div>

			</div>

			<div className="flex justify-center md:py-10 py-6">
				<button className="bg-ihs-blue py-4 px-4 md:text-2xl text-xl md:hover:bg-transparent md:hover:text-ihs-blue md:hover:border-ihs-blue md:hover:font-bold hover:bg-transparent hover:text-ihs-blue hover:border-ihs-blue hover:font-bold shadow-md" onClick={() => {
					navigate('/signup')
				}}>Create An Account</button>
			</div>
		</div>
	);
};

export default HowItWorks;