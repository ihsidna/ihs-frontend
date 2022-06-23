import React from 'react';

const HowItWorks = () => {
	return (
		<div className="bg-gray-50 w-full md:py-32 py-20 md:px-20 px-10 bg-ihs-blue-shade-100">
			<div className="max-w-[1240] mx-auto">
				<div className="flex justify-center items-center">
					<h2 className="md:text-6xl text-4xl font-bold pb-10 text-gray-800 underline underline-offset-2 decoration-wavy decoration-ihs-green decoration-2 ">
						How it works
					</h2>
				</div>
				<div className="grid md:grid-cols-3 md:gap-5 gap-5 px-2 text-center my-10">

					<div className="border md:py-8 py-6 md:px-8 px-4 rounded-xl shadow-xl bg-white">
						<p className="text-4xl text-gray-800 py-4 ">Step 1</p>
						<p className="text-gray-500 text-2xl py-4">Create an account</p>
					</div>

					<div className="border md:py-8 py-6 md:px-8 px-4 rounded-xl shadow-xl bg-white">
						<p className="text-4xl text-gray-800 py-4">Step 2</p>
						<p className="text-gray-500 text-2xl py-4">Add a your loved one as a beneficiary to your account</p>
					</div>

					<div className="border md:py-8 py-6 md:px-8 px-4 rounded-xl shadow-xl bg-white">
						<p className="text-4xl text-gray-800 py-4">Step 3</p>
						<p className="text-gray-500 text-2xl py-4">Book an appointment for your loved one.</p>
					</div>

				</div>

			</div>

			<div className="flex justify-center md:py-10 py-6">
				<button className="bg-ihs-blue md:py-6 py-4  md:px-6 px-4 md:text-2xl text-xl md:hover:bg-transparent md:hover:text-ihs-blue md:hover:border-ihs-blue md:hover:font-bold hover:bg-transparent hover:text-ihs-blue hover:border-ihs-blue hover:font-bold shadow-2xl">Create an account</button>
			</div>
		</div>
	);
};

export default HowItWorks;